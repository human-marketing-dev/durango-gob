'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { nav, isNavSection, type NavEntry, type NavLeaf, type NavSection } from '@/lib/nav'

// ── Mega Menu (full-width, rendered at header level) ──────────────────────────

function MegaPanel({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  const sections = (entry.children ?? []).filter(isNavSection) as NavSection[]
  const leaves   = (entry.children ?? []).filter(c => !isNavSection(c)) as NavLeaf[]

  const colClass =
    sections.length === 4 ? 'grid-cols-4' :
    sections.length === 3 ? 'grid-cols-3' : 'grid-cols-2'

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 bg-white border-t-2 border-primary shadow-lg"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    >
      <div className="max-w-content mx-auto site-px py-10">
        <div className={`grid ${colClass} gap-10`}>
          {sections.map(section => (
            <div key={section.href}>
              <Link
                href={section.href}
                onClick={onClose}
                className="block font-lato text-xs font-medium uppercase text-primary border-b border-secondary pb-2 mb-4 hover:opacity-70 transition-opacity"
                style={{ letterSpacing: '1.5px' }}
              >
                {section.label}
              </Link>
              <ul className="space-y-2.5">
                {section.children.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block font-lato text-sm text-overlay hover:text-primary transition-colors leading-snug"
                      style={{ letterSpacing: '0.3px' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {leaves.length > 0 && (
          <div className="mt-8 pt-6 border-t border-secondary flex flex-wrap gap-x-8 gap-y-3">
            {leaves.map(leaf => (
              <Link
                key={leaf.href}
                href={leaf.href}
                onClick={onClose}
                className="font-lato text-sm text-overlay hover:text-primary transition-colors"
                style={{ letterSpacing: '0.3px' }}
              >
                {leaf.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Simple Dropdown (positioned relative to nav item) ─────────────────────────

function SimpleDropdown({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  return (
    <div
      className="absolute left-0 top-full z-50 bg-white border-t-2 border-primary min-w-56"
      style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
    >
      {(entry.children as NavLeaf[]).map((item, i, arr) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className={`block font-lato text-sm text-primary px-5 py-3 hover:bg-blue-bg transition-colors ${i < arr.length - 1 ? 'border-b border-blue-bg' : ''}`}
          style={{ letterSpacing: '0.3px' }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

// ── Mobile accordion item ─────────────────────────────────────────────────────

function MobileItem({ entry }: { entry: NavEntry | NavSection }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])

  const children = 'children' in entry ? entry.children ?? [] : []
  const hasChildren = children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={entry.href}
        className="block font-lato text-sm text-primary px-6 py-3.5 border-b border-blue-bg hover:bg-blue-bg transition-colors uppercase"
        style={{ letterSpacing: '0.8px' }}
      >
        {entry.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-blue-bg">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center justify-between w-full px-6 py-3.5 font-lato text-sm text-primary uppercase hover:bg-blue-bg transition-colors"
        style={{ letterSpacing: '0.8px' }}
      >
        <span>{entry.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="bg-white border-t border-blue-bg">
          <Link
            href={entry.href}
            className="block font-lato text-xs text-overlay px-8 py-2.5 hover:bg-blue-bg transition-colors border-b border-blue-bg"
            style={{ letterSpacing: '0.5px' }}
          >
            Ver todo: {entry.label}
          </Link>
          {children.map(child =>
            isNavSection(child) ? (
              <MobileItem key={child.href} entry={child} />
            ) : (
              <Link
                key={(child as NavLeaf).href}
                href={(child as NavLeaf).href}
                className="block font-lato text-sm text-accent px-8 py-2.5 hover:bg-blue-bg transition-colors border-b border-blue-bg"
                style={{ letterSpacing: '0.3px' }}
              >
                {(child as NavLeaf).label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const desktopSearchRef = useRef<HTMLInputElement>(null)
  const mobileSearchRef  = useRef<HTMLInputElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const closeAll    = useCallback(() => { setOpenMenu(null) }, [])
  const closeSearch = useCallback(() => { setSearchOpen(false) }, [])

  useEffect(() => {
    closeAll()
    setMobileOpen(false)
    setSearchOpen(false)
  }, [pathname, closeAll])

  useEffect(() => {
    if (!searchOpen) return
    const isMobile = window.innerWidth < 1024
    const ref = isMobile ? mobileSearchRef : desktopSearchRef
    // Small delay so the width animation has started before focus
    const t = setTimeout(() => ref.current?.focus(), 50)
    return () => clearTimeout(t)
  }, [searchOpen])

  useEffect(() => {
    if (!openMenu) return
    function onKey(e: globalThis.KeyboardEvent) { if (e.key === 'Escape') closeAll() }
    function onOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [openMenu, closeAll])

  useEffect(() => {
    if (!searchOpen) return
    function onKey(e: globalThis.KeyboardEvent) { if (e.key === 'Escape') closeSearch() }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey) }
  }, [searchOpen, closeSearch])

  const activeEntry   = openMenu ? nav.find(e => e.href === openMenu) : null
  const isMegaActive  = activeEntry?.children?.some(isNavSection) ?? false

  return (
    <header ref={headerRef} className="relative bg-white z-40" style={{ borderBottom: '1px solid #B8C0B8' }}>

      {/* Top bar */}
      <div className="bg-primary">
        <div className="max-w-content mx-auto site-px flex items-center justify-between py-1.5">
          <span className="font-lato text-blue-el" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>
            Gobierno del Estado de Durango
          </span>
          <div className="flex items-center gap-2">
            {(['Mapa del Sitio', 'Accesibilidad', 'English'] as const).map((label, i, arr) => (
              <span key={label} className="flex items-center gap-2">
                <a href="#" className="font-lato text-blue-el hover:opacity-70 transition-opacity" style={{ fontSize: '11px', letterSpacing: '0.5px', textDecoration: 'none' }}>
                  {label}
                </a>
                {i < arr.length - 1 && <span className="text-accent" style={{ fontSize: '10px' }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="max-w-content mx-auto site-px flex items-center justify-between" style={{ height: '72px' }}>

        {/* Brand — always visible */}
        <Link href="/" className="flex items-center shrink-0" style={{ textDecoration: 'none' }}>
          <Image src="/logo-horizontal.webp" alt="Poder Judicial del Estado de Durango" width={220} height={52} style={{ height: '48px', width: 'auto' }} />
        </Link>

        {/* ── Desktop right side ── */}
        <div className="hidden lg:flex items-center">

          {/* Nav items — slide right + fade out on search open */}
          <nav
            className="flex items-center"
            style={{
              opacity:       searchOpen ? 0 : 1,
              transform:     searchOpen ? 'translateX(10px)' : 'translateX(0)',
              transition:    'opacity 200ms ease, transform 200ms ease',
              pointerEvents: searchOpen ? 'none' : 'auto',
            }}
          >
            {nav.map(entry => {
              const isOpen    = openMenu === entry.href
              const isActive  = pathname === entry.href || pathname.startsWith(entry.href + '/')
              const hasKids   = (entry.children?.length ?? 0) > 0
              const isMega    = entry.children?.some(isNavSection) ?? false
              const activeStyle = isOpen || isActive
                ? { borderBottom: '2px solid #1B1A19' }
                : { borderBottom: '2px solid transparent' }

              return (
                <div key={entry.href} className={isMega ? '' : 'relative'}>
                  {hasKids ? (
                    <button
                      onClick={() => setOpenMenu(isOpen ? null : entry.href)}
                      aria-expanded={isOpen}
                      className="t-nav flex items-center gap-1 text-primary bg-transparent border-none cursor-pointer px-3.5 py-2 hover:opacity-70 transition-opacity"
                      style={activeStyle}
                    >
                      {entry.label}
                      <svg
                        width="10" height="10" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2.5"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={entry.href}
                      className="t-nav text-primary px-3.5 py-2 hover:opacity-70 transition-opacity"
                      style={{ ...activeStyle, display: 'block', textDecoration: 'none' }}
                    >
                      {entry.label}
                    </Link>
                  )}
                  {isOpen && !isMega && entry.children && (
                    <SimpleDropdown entry={entry} onClose={closeAll} />
                  )}
                </div>
              )
            })}
          </nav>

          {/* Search input — expands from the icon */}
          <div
            style={{
              overflow:   'hidden',
              width:      searchOpen ? '260px' : '0px',
              opacity:    searchOpen ? 1 : 0,
              transition: 'width 280ms cubic-bezier(0.4,0,0.2,1), opacity 180ms ease',
              display:    'flex',
              alignItems: 'center',
            }}
          >
            <form onSubmit={e => e.preventDefault()} style={{ width: '100%', display: 'flex' }}>
              <input
                ref={desktopSearchRef}
                type="text"
                placeholder="Buscar en el sitio..."
                className="font-lato text-primary bg-transparent"
                style={{
                  width:        '100%',
                  fontSize:     '14px',
                  letterSpacing:'0.3px',
                  border:       'none',
                  borderBottom: '1.5px solid #1B1A19',
                  outline:      'none',
                  padding:      '4px 0 4px 8px',
                }}
              />
            </form>
          </div>

          {/* Search / close icon — always visible, morphs */}
          <button
            onClick={() => searchOpen ? closeSearch() : (setOpenMenu(null), setSearchOpen(true))}
            aria-label={searchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
            className="ml-2 shrink-0 bg-transparent border-none cursor-pointer p-2 flex items-center text-primary hover:opacity-60 transition-opacity"
          >
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              style={{ transition: 'transform 200ms ease', transform: searchOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {searchOpen ? (
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile right side ── */}
        <div className="lg:hidden flex items-center gap-1">

          {/* Mobile input — expands between logo and icons */}
          <div
            style={{
              overflow:   'hidden',
              width:      searchOpen ? '160px' : '0px',
              opacity:    searchOpen ? 1 : 0,
              transition: 'width 280ms cubic-bezier(0.4,0,0.2,1), opacity 180ms ease',
              display:    'flex',
              alignItems: 'center',
            }}
          >
            <input
              ref={mobileSearchRef}
              type="text"
              placeholder="Buscar..."
              className="font-lato text-primary bg-transparent"
              style={{
                width:        '100%',
                fontSize:     '14px',
                letterSpacing:'0.3px',
                border:       'none',
                borderBottom: '1.5px solid #1B1A19',
                outline:      'none',
                padding:      '4px 0',
              }}
            />
          </div>

          {/* Search / close icon */}
          <button
            onClick={() => searchOpen ? closeSearch() : setSearchOpen(true)}
            aria-label={searchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
            className="bg-transparent border-none cursor-pointer p-2 flex items-center text-primary hover:opacity-60 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {searchOpen ? (
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </>
              )}
            </svg>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            className="flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B1A19" strokeWidth="2">
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span style={{ display: 'block', width: '22px', height: '2px', background: '#1B1A19' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: '#1B1A19' }} />
                <span style={{ display: 'block', width: '22px', height: '2px', background: '#1B1A19' }} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mega menu — rendered at header level so left-0/right-0 span full header width */}
      {isMegaActive && activeEntry && openMenu && (
        <MegaPanel entry={activeEntry} onClose={closeAll} />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: '#B8C0B8' }}>
          {nav.map(entry => (
            <MobileItem key={entry.href} entry={entry} />
          ))}
        </div>
      )}
    </header>
  )
}
