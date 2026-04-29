import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-overline uppercase tracking-widest text-secondary mb-4">404</p>
      <h1 className="text-h1 font-bold text-primary mb-4">Página no encontrada</h1>
      <p className="text-body text-secondary max-w-md mb-8">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="bg-primary text-white text-button px-6 py-3 rounded-md hover:bg-primary-light transition-colors"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
