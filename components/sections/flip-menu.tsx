"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, AlertCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

// PDF Configuration
const MENU_PDF_URL = "/menu/menu.pdf"

declare global {
  interface Window {
    pdfjsLib: any
    St: any
  }
}

interface FlipMenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FlipMenuModal({ isOpen, onClose }: FlipMenuModalProps) {
  const { t } = useLanguage()
  const [pdfDoc, setPdfDoc] = useState<any>(null)
  const [numPages, setNumPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [scale, setScale] = useState(1)
  const [flipInstance, setFlipInstance] = useState<any>(null)

  const bookContainerRef = useRef<HTMLDivElement>(null)
  const pagesRenderedRef = useRef(new Set<number>())

  // Load libraries
  useEffect(() => {
    if (!isOpen) return

    const loadLibraries = async () => {
      try {
        // Load PDF.js
        if (!window.pdfjsLib) {
          const pdfScript = document.createElement("script")
          pdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
          document.body.appendChild(pdfScript)
          await new Promise((resolve) => (pdfScript.onload = resolve))
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
        }

        // Load Page-Flip Library
        if (!window.St || !window.St.PageFlip) {
          const flipScript = document.createElement("script")
          flipScript.src = "https://cdn.jsdelivr.net/npm/page-flip/dist/js/page-flip.browser.js"
          document.body.appendChild(flipScript)
          await new Promise((resolve) => (flipScript.onload = resolve))
        }

        loadPdf(MENU_PDF_URL)
      } catch (err) {
        console.error("Library load error:", err)
        setError(t("flipMenu.errorLibrary"))
      }
    }

    loadLibraries()
  }, [isOpen, t])

  // Load PDF
  const loadPdf = async (url: string) => {
    try {
      setLoading(true)
      setError(null)
      setLoadingProgress(10)

      const loadingTask = window.pdfjsLib.getDocument(url)

      loadingTask.onProgress = (p: { loaded: number; total: number }) => {
        if (p.total > 0) {
          setLoadingProgress(10 + (p.loaded / p.total) * 40)
        }
      }

      const doc = await loadingTask.promise
      setPdfDoc(doc)
      setNumPages(doc.numPages)
      setLoadingProgress(50)
    } catch (err) {
      console.error("PDF load error:", err)
      setError(t("flipMenu.errorPdf"))
      setLoading(false)
    }
  }

  // Initialize PageFlip
  useEffect(() => {
    if (!pdfDoc || numPages === 0 || !bookContainerRef.current || !window.St) return

    const timer = setTimeout(() => {
      try {
        if (flipInstance) {
          flipInstance.destroy()
        }

        const width = 400
        const height = 580

        const pageFlip = new window.St.PageFlip(bookContainerRef.current, {
          width: width,
          height: height,
          size: "stretch",
          minWidth: 300,
          maxWidth: 1000,
          minHeight: 400,
          maxHeight: 1200,
          maxShadowOpacity: 0.5,
          showCover: true,
          mobileScrollSupport: false,
          usePortrait: false,
          startPage: 0,
          flippingTime: 1000,
          useMouseEvents: true,
          swipeDistance: 30,
        })

        const pageNodes = bookContainerRef.current?.querySelectorAll(".page")
        if (pageNodes) {
          pageFlip.loadFromHTML(pageNodes)
        }

        setFlipInstance(pageFlip)
        setLoading(false)

        renderAllPages(pdfDoc, pageFlip)
      } catch (err) {
        console.error("PageFlip init error:", err)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pdfDoc, numPages])

  // Render PDF pages
  const renderAllPages = async (doc: any, flipInst: any) => {
    for (let i = 1; i <= doc.numPages; i++) {
      if (pagesRenderedRef.current.has(i)) continue

      try {
        const canvasId = `page-canvas-${i}`
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement
        if (!canvas) continue

        const page = await doc.getPage(i)
        const unscaledViewport = page.getViewport({ scale: 1 })
        const scale = (canvas.height * 2) / unscaledViewport.height
        const viewport = page.getViewport({ scale: scale })

        const context = canvas.getContext("2d")
        canvas.width = viewport.width
        canvas.height = viewport.height

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        }

        await page.render(renderContext).promise
        pagesRenderedRef.current.add(i)
        setLoadingProgress((prev) => Math.min(prev + 50 / doc.numPages, 100))
      } catch (e) {
        console.error(`Render page ${i} error`, e)
      }
    }
  }

  const handlePrev = () => {
    if (flipInstance) flipInstance.flipPrev()
  }

  const handleNext = () => {
    if (flipInstance) flipInstance.flipNext()
  }

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPdfDoc(null)
      setNumPages(0)
      setLoading(true)
      setLoadingProgress(0)
      setError(null)
      pagesRenderedRef.current = new Set()
      if (flipInstance) {
        flipInstance.destroy()
        setFlipInstance(null)
      }
    }
  }, [isOpen, flipInstance])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background texture */}
            <div className="absolute inset-0 bg-[url('/dark-wood-texture.png')] opacity-20 dark:opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60 pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center">
                <div className="w-24 h-32 border-4 border-primary rounded mb-6 animate-pulse bg-card flex items-center justify-center">
                  <span className="font-serif text-primary text-2xl font-bold">U</span>
                </div>
                <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
                <p className="mt-4 text-muted-foreground font-mono text-xs">
                  {t("flipMenu.loading")} {Math.round(loadingProgress)}%
                </p>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="flex flex-col items-center justify-center text-foreground">
                <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                <p>{error}</p>
              </div>
            )}

            {/* Header Controls */}
            <div className="absolute top-4 left-4 right-16 flex justify-between items-center z-20">
              <div className="text-primary font-serif tracking-widest text-xl drop-shadow-md">UNAGISTA MENU</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setScale((s) => Math.min(s + 0.1, 1.2))}
                  className="p-2 bg-card/80 text-foreground rounded hover:bg-primary hover:text-primary-foreground transition"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setScale((s) => Math.max(s - 0.1, 0.6))}
                  className="p-2 bg-card/80 text-foreground rounded hover:bg-primary hover:text-primary-foreground transition"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Book Wrapper */}
            <div
              className="relative z-10 transition-transform duration-300 ease-out"
              style={{ transform: `scale(${scale})` }}
            >
              <div ref={bookContainerRef} className="flip-book shadow-2xl">
                {numPages > 0 &&
                  Array.from({ length: numPages }).map((_, index) => {
                    const pageNum = index + 1
                    const isCover = index === 0 || index === numPages - 1

                    return (
                      <div
                        key={index}
                        className={`page ${isCover ? "hard" : "soft"}`}
                        data-density={isCover ? "hard" : "soft"}
                      >
                        <div className="page-content w-full h-full relative overflow-hidden bg-card">
                          <canvas
                            id={`page-canvas-${pageNum}`}
                            className="w-full h-full object-contain"
                            width={800}
                            height={1160}
                          />

                          {/* Paper texture */}
                          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('/paper-texture.jpg')] mix-blend-multiply" />

                          {/* Spine shadow */}
                          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-foreground/10 to-transparent pointer-events-none" />

                          {/* Page number */}
                          {!isCover && (
                            <div className="absolute bottom-3 w-full text-center text-[10px] text-muted-foreground font-mono">
                              - {pageNum} -
                            </div>
                          )}

                          {/* Loading placeholder */}
                          <div className="absolute inset-0 bg-card flex items-center justify-center -z-10">
                            <Loader2 className="w-8 h-8 text-muted animate-spin" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 flex gap-8 z-20">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition shadow-lg border border-border"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 rounded-full bg-card/90 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition shadow-lg border border-border"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <style>{`
              .flip-book {
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
              }

              .page {
                background-color: hsl(var(--card));
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
              }

              .page.hard {
                background-color: hsl(var(--background));
                border: 1px solid hsl(var(--border));
              }

              canvas {
                display: block;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Button to trigger flip menu modal
export function FlipMenuButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="lg"
        className="border-primary text-primary hover:bg-primary/10 bg-transparent gap-2"
      >
        {t("flipMenu.viewFullMenu")}
      </Button>
      <FlipMenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
