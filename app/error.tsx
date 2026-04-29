'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-overline uppercase tracking-widest text-secondary mb-4">Error</p>
      <h1 className="text-h2 font-bold text-primary mb-4">Algo salió mal</h1>
      <p className="text-body text-secondary max-w-md mb-8">
        Ocurrió un error inesperado. Por favor intenta de nuevo.
      </p>
      <button
        onClick={() => unstable_retry()}
        className="bg-primary text-white text-button px-6 py-3 rounded-md hover:bg-primary-light transition-colors"
      >
        Intentar de nuevo
      </button>
    </section>
  )
}
