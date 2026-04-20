'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.setProperty('--parallax', `${y * 0.35}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1A0F08 0%, #3D1018 40%, #5C1220 70%, #7D1A2B 100%)',
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,149,44,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(125,26,43,0.4) 0%, transparent 50%)
        `,
      }} />

      {/* Pattern Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9952C' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.6,
      }} />

      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '10%', right: '8%',
        width: 320, height: 320,
        border: '1px solid rgba(201,149,44,0.2)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '15%', right: '11%',
        width: 220, height: 220,
        border: '1px solid rgba(201,149,44,0.1)',
        borderRadius: '50%',
      }} />

      {/* Gold corner ornament */}
      <div style={{
        position: 'absolute', top: 80, left: 24,
        width: 120, height: 120,
        borderTop: '2px solid rgba(201,149,44,0.5)',
        borderLeft: '2px solid rgba(201,149,44,0.5)',
      }} />
      <div style={{
        position: 'absolute', bottom: 60, right: 24,
        width: 120, height: 120,
        borderBottom: '2px solid rgba(201,149,44,0.5)',
        borderRight: '2px solid rgba(201,149,44,0.5)',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px',
        position: 'relative', zIndex: 2,
        width: '100%',
      }}>
        <div style={{ maxWidth: 720 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(201,149,44,0.15)',
            border: '1px solid rgba(201,149,44,0.4)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 28,
            animation: 'fadeIn 0.6s ease forwards',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9952C', display: 'inline-block' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px', fontWeight: 600,
              color: '#E4B554', letterSpacing: '2px', textTransform: 'uppercase',
            }}>100% Pure Vegetarian · Patan, Gujarat</span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: 24,
            animation: 'fadeInUp 0.8s ease 0.1s both',
          }}>
            Patan's Premium<br />
            <span style={{ color: '#C9952C', fontStyle: 'italic' }}>Pure Veg</span> Restaurant<br />
            & Banquet Destination
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 560,
            animation: 'fadeInUp 0.8s ease 0.2s both',
          }}>
            Where every meal is a celebration — from soulful Punjabi thalis to elegant banquet experiences, crafted with love on the Patan–Chanasma Highway.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 14,
            marginBottom: 48,
            animation: 'fadeInUp 0.8s ease 0.3s both',
          }}>
            <a href="#contact" className="btn-gold" style={{ fontSize: '14px', padding: '14px 28px' }}>
              🪑 Book a Table
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary" style={{ fontSize: '14px', padding: '14px 28px', background: '#25D366' }}>
              📦 Order Now
            </a>
            <a href="#menu" className="btn-outline" style={{ fontSize: '14px', padding: '14px 28px' }}>
              🍽 View Menu
            </a>
            <a href="#banquet" className="btn-outline" style={{ fontSize: '14px', padding: '14px 28px' }}>
              🎉 Book Banquet
            </a>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 24,
            animation: 'fadeInUp 0.8s ease 0.4s both',
          }}>
            {[
              { icon: '⭐', label: '5.0 Google Rating' },
              { icon: '🍃', label: 'Pure Vegetarian' },
              { icon: '🚗', label: 'Free Parking' },
              { icon: '🛵', label: 'Home Delivery' },
            ].map(b => (
              <div key={b.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: '16px' }}>{b.icon}</span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px', fontWeight: 500,
                  color: 'rgba(255,255,255,0.72)',
                }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(201,149,44,0.6), transparent)' }} />
      </div>

      {/* Hours Banner */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(201,149,44,0.12)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(201,149,44,0.25)',
        padding: '14px 24px',
        display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap',
      }}>
        {[
          { label: 'Lunch', time: '11:00 AM – 3:30 PM' },
          { label: 'Dinner', time: '6:30 PM – 10:30 PM' },
          { label: 'Open', time: 'Daily · 7 Days a Week' },
        ].map(h => (
          <div key={h.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: '#C9952C', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>{h.label}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(201,149,44,0.5)' }} />
            <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '15px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{h.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}