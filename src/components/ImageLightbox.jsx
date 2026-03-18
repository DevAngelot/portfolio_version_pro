import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function ImageLightbox({ images, currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const handleArrowLeft = (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1)
      }
    }
    const handleArrowRight = (e) => {
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1)
      }
    }

    window.addEventListener('keydown', handleEscape)
    window.addEventListener('keydown', handleArrowLeft)
    window.addEventListener('keydown', handleArrowRight)
    
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('keydown', handleArrowLeft)
      window.removeEventListener('keydown', handleArrowRight)
      document.body.style.overflow = 'unset'
    }
  }, [currentIndex, images.length, onClose, onNavigate])

  if (!images || images.length === 0) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {images.length > 1 && currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex - 1)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {images.length > 1 && currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(currentIndex + 1)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        />
        {images.length > 1 && (
          <div className="mt-4 text-center text-sm text-white/80">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
