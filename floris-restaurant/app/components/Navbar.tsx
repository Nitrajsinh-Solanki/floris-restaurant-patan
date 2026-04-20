'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#lunch-offers', label: 'Thali Offers' },
  { href: '#banquet', label: 'Banquet' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(26,15,8,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,149,44,0.2)' : 'none',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            lineHeight: 1,
          }}>FLORIS</span>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.65rem',
            fontWeight: 400,
            color: '#C9952C',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}>Restaurant & Banquet</span>
        </a>

        {/* Desktop Nav Links */}
        <ul style={{
          display: 'flex',
          gap: 32,
          listStyle: 'none',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.5px',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9952C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="tel:+91-XXXXXXXXXX" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: '#C9952C',
            color: '#1A0F08',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            borderRadius: 4,
            transition: 'all 0.2s',
            letterSpacing: '0.3px',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#E4B554'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9952C'; }}
          >
            📞 Book Table
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: '1.5px solid rgba(255,255,255,0.4)',
              color: '#fff',
              padding: '8px 10px',
              borderRadius: 4,
              fontSize: '18px',
              lineHeight: 1,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(26,15,8,0.98)',
          borderTop: '1px solid rgba(201,149,44,0.2)',
          padding: '20px 24px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >{link.label}</a>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <a href="tel:+91-XXXXXXXXXX" className="btn-gold" style={{ flex: 1, justifyContent: 'center', fontSize: '14px', padding: '12px' }}>📞 Call Now</a>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '14px', padding: '12px' }}>💬 WhatsApp</a>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}