'use client';

const quickLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#menu', label: 'Our Menu' },
  { href: '#lunch-offers', label: 'Thali Offers' },
  { href: '#banquet', label: 'Banquet Hall' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Reserve Table' },
];

const menuHighlights = [
  'Paneer Specials',
  'Veg Main Course',
  'Chinese Starters',
  'Biryani & Rice',
  'Punjabi Thali',
  'Unlimited Meal',
  'Beverages & Lassi',
  'Desserts',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(160deg, #0F0807 0%, #1A0F08 50%, #2E1A10 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top ornamental border */}
      <div style={{
        height: 4,
        background: 'linear-gradient(to right, transparent, #C9952C 30%, #7D1A2B 50%, #C9952C 70%, transparent)',
      }} />

      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9952C' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* CTA Banner */}
        <div style={{
          background: 'rgba(201,149,44,0.08)',
          borderBottom: '1px solid rgba(201,149,44,0.15)',
          padding: '40px 24px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'Playfair Display', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700, color: '#FFFFFF', marginBottom: 8,
          }}>
            Ready to Dine? <span style={{ color: '#C9952C', fontStyle: 'italic' }}>Book Your Table</span> Today
          </h3>
          <p style={{
            fontFamily: 'Cormorant Garamond', fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.55)', marginBottom: 24,
          }}>
            Pure vegetarian dining at its finest — Patan's most trusted restaurant & banquet
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-gold" style={{ fontSize: '14px' }}>🪑 Reserve a Table</a>
            <a href="#banquet" className="btn-outline" style={{ fontSize: '14px' }}>🎉 Book Banquet</a>
            <a href="https://wa.me/91XXXXXXXXXX" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px',
              background: '#25D366', color: '#fff',
              borderRadius: 4, fontFamily: 'DM Sans',
              fontSize: '14px', fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              💬 Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '64px 24px 40px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 48,
        }}
        className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'Playfair Display', fontSize: '2rem',
                fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px',
                marginBottom: 2,
              }}>FLORIS</div>
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '0.7rem', fontWeight: 400,
                color: '#C9952C', letterSpacing: '5px',
                textTransform: 'uppercase',
              }}>Restaurant & Banquet</div>
            </div>

            <p style={{
              fontFamily: 'DM Sans', fontSize: '13px',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.8,
              marginBottom: 24, maxWidth: 280,
            }}>
              Patan's premier pure vegetarian restaurant and banquet destination. Crafting memorable dining experiences with authentic flavours since day one.
            </p>

            {/* Address */}
            <div style={{ marginBottom: 24 }}>
              <p style={{
                fontFamily: 'DM Sans', fontSize: '12px',
                color: 'rgba(255,255,255,0.4)', lineHeight: 1.7,
              }}>
                📍 1st Floor, Mashruwala Complex,<br />
                Patan–Chanasma Highway Rd,<br />
                Opp. New Circuit House,<br />
                Patan, Gujarat 384265
              </p>
            </div>

            {/* Hours */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,149,44,0.15)',
              borderRadius: 8, padding: '16px',
            }}>
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 600, color: '#C9952C', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>Opening Hours</p>
              {[
                { label: 'Lunch', time: '11:00 AM – 3:30 PM' },
                { label: 'Dinner', time: '6:30 PM – 10:30 PM' },
                { label: 'Days', time: '7 Days a Week' },
              ].map(h => (
                <div key={h.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{h.label}</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 700,
              color: '#C9952C', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: 24,
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    fontFamily: 'DM Sans', fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9952C'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    <span style={{ color: '#C9952C', fontSize: '10px' }}>✦</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 700,
              color: '#C9952C', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: 24,
            }}>Our Menu</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {menuHighlights.map(item => (
                <li key={item}>
                  <a href="#menu" style={{
                    fontFamily: 'DM Sans', fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#C9952C'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    <span style={{ color: '#7D1A2B', fontSize: '10px' }}>●</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 700,
              color: '#C9952C', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: 24,
            }}>Contact Us</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              <a href="tel:+91XXXXXXXXXX" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 16px',
                background: 'rgba(125,26,43,0.2)',
                border: '1px solid rgba(125,26,43,0.3)',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(125,26,43,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(125,26,43,0.2)'; }}
              >
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>CALL US</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>+91 XXXXXXXXXX</span>
                </div>
              </a>

              <a href="https://wa.me/91XXXXXXXXXX" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 16px',
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.2)',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.2)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)'; }}
              >
                <span style={{ fontSize: '20px' }}>💬</span>
                <div>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>WHATSAPP ORDER</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 600, color: '#25D366' }}>+91 XXXXXXXXXX</span>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Floris+Restaurant+Banquet+Patan+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 16px',
                  background: 'rgba(66,133,244,0.1)',
                  border: '1px solid rgba(66,133,244,0.2)',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '20px' }}>🗺️</span>
                <div>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>FIND US</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 600, color: '#4285F4' }}>Open in Google Maps</span>
                </div>
              </a>
            </div>

            {/* Google Rating Badge */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,149,44,0.2)',
              borderRadius: 8, padding: '16px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, #4285F4, #34A853)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: '16px', flexShrink: 0,
              }}>G</div>
              <div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {Array.from({length: 5}).map((_, i) => <span key={i} style={{ fontSize: '14px' }}>⭐</span>)}
                </div>
                <span style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>5.0 · Google Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          maxWidth: 1200, margin: '0 auto',
        }}>
          <p style={{
            fontFamily: 'DM Sans', fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © {year} Floris Restaurant & Banquet, Patan, Gujarat. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'DM Sans', fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            🍃 100% Pure Vegetarian · 📍 Patan, Gujarat 384265
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}