'use client';

// ===== SERVICE OPTIONS =====
const services = [
  { icon: '🚶', label: 'Dine-In', desc: 'Enjoy a full restaurant experience at our table' },
  { icon: '📦', label: 'Takeaway', desc: 'Carry your favourite food home fresh' },
  { icon: '🛵', label: 'Delivery', desc: 'We deliver to your doorstep' },
  { icon: '🚗', label: 'Drive-Through', desc: 'Quick pick-up without leaving your car' },
  { icon: '📲', label: 'No-Contact Delivery', desc: 'Safe, hygienic doorstep delivery' },
  { icon: '🪑', label: 'Kerbside Pickup', desc: 'We bring your order right to your vehicle' },
];

export function ServiceOptions() {
  return (
    <section id="services" style={{
      background: '#FDF8F0',
      padding: '100px 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">How We Serve You</span>
          <h2 className="section-title">
            Service <span>Options</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Six convenient ways to enjoy Floris — pick what works best for you
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {services.map((s, i) => (
            <div key={s.label} style={{
              background: '#FFFFFF',
              border: '1px solid rgba(201,149,44,0.15)',
              borderRadius: 12,
              padding: '32px 28px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
              animationDelay: `${i * 0.08}s`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#7D1A2B';
              el.style.borderColor = '#7D1A2B';
              el.style.transform = 'translateY(-6px)';
              el.style.boxShadow = '0 20px 48px rgba(125,26,43,0.2)';
              const icon = el.querySelector('.svc-icon') as HTMLElement;
              const title = el.querySelector('.svc-title') as HTMLElement;
              const desc = el.querySelector('.svc-desc') as HTMLElement;
              if (icon) { icon.style.background = 'rgba(201,149,44,0.2)'; }
              if (title) title.style.color = '#FFFFFF';
              if (desc) desc.style.color = 'rgba(255,255,255,0.7)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#FFFFFF';
              el.style.borderColor = 'rgba(201,149,44,0.15)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
              const icon = el.querySelector('.svc-icon') as HTMLElement;
              const title = el.querySelector('.svc-title') as HTMLElement;
              const desc = el.querySelector('.svc-desc') as HTMLElement;
              if (icon) icon.style.background = 'rgba(125,26,43,0.08)';
              if (title) title.style.color = '#1A0F08';
              if (desc) desc.style.color = '#7A6555';
            }}
            >
              <div className="svc-icon" style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(125,26,43,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', margin: '0 auto 16px',
                transition: 'background 0.3s',
              }}>{s.icon}</div>
              <h3 className="svc-title" style={{
                fontFamily: 'Playfair Display', fontSize: '1.1rem',
                fontWeight: 700, color: '#1A0F08',
                marginBottom: 8, transition: 'color 0.3s',
              }}>{s.label}</h3>
              <p className="svc-desc" style={{
                fontFamily: 'DM Sans', fontSize: '13px',
                color: '#7A6555', lineHeight: 1.6,
                transition: 'color 0.3s',
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PARKING SECTION =====
const parkingTypes = [
  { icon: '🏢', label: 'Parking Garage', desc: 'Covered, safe parking facility' },
  { icon: '🅿️', label: 'Parking Lot', desc: 'Open parking lot — well-lit and spacious' },
  { icon: '🛣️', label: 'Street Parking', desc: 'Free street parking right outside' },
  { icon: '🏪', label: 'On-Site Parking', desc: 'Dedicated parking on our premises' },
];

export function ParkingSection() {
  return (
    <section id="parking" style={{
      background: 'linear-gradient(135deg, #1A0F08 0%, #2E1A10 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9952C' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 64, alignItems: 'center',
        }}
        className="parking-grid"
        >
          <div>
            <span style={{
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600,
              letterSpacing: '3px', textTransform: 'uppercase',
              color: '#C9952C', marginBottom: 12, display: 'block',
            }}>No Parking Worries</span>
            <h2 style={{
              fontFamily: 'Playfair Display', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700, color: '#FFFFFF', marginBottom: 16, lineHeight: 1.2,
            }}>
              Free Parking<br />
              <span style={{ color: '#C9952C', fontStyle: 'italic' }}>Always Available</span>
            </h2>
            <p style={{
              fontFamily: 'Cormorant Garamond', fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.6)', lineHeight: 1.7,
            }}>
              Come hungry, not stressed. We offer four types of free parking so you can focus entirely on enjoying your meal.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
          }}>
            {parkingTypes.map(p => (
              <div key={p.label} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,149,44,0.2)',
                borderRadius: 10,
                padding: '24px 20px',
                display: 'flex', alignItems: 'flex-start', gap: 16,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(201,149,44,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,149,44,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,149,44,0.2)';
              }}
              >
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: 4 }}>{p.label}</h4>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .parking-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

// ===== GALLERY SECTION =====
const galleryPlaceholders = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  label: ['Paneer Specials', 'Biryani Corner', 'Thali Platter', 'Sizzler Plate', 'Banquet Hall', 'Chinese Starters', 'Desserts', 'Mocktails', 'Restaurant Interior'][i],
  aspect: [4/3, 3/4, 1, 4/3, 16/9, 3/4, 1, 4/3, 3/4][i],
}));

export function GallerySection() {
  return (
    <section id="gallery" style={{
      background: '#FFFFFF',
      padding: '100px 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">
            Gallery & <span>Ambience</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A glimpse into the Floris dining experience
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}
        className="gallery-grid"
        >
          {galleryPlaceholders.map((g, i) => (
            <div key={g.id} style={{
              position: 'relative',
              paddingBottom: i % 3 === 1 ? '120%' : '75%',
              background: `linear-gradient(135deg, 
                hsl(${10 + i * 15}, 30%, ${88 + (i % 3) * 3}%) 0%, 
                hsl(${35 + i * 8}, 40%, ${80 + (i % 4) * 4}%) 100%)`,
              borderRadius: 8,
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(201,149,44,0.15)',
              gridRow: i % 3 === 1 ? 'span 2' : 'span 1',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'scale(1.02)';
              el.style.boxShadow = '0 16px 40px rgba(26,15,8,0.2)';
              const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'scale(1)';
              el.style.boxShadow = 'none';
              const overlay = el.querySelector('.gallery-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}
            >
              {/* Placeholder visual */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 8,
              }}>
                <span style={{ fontSize: '36px', opacity: 0.4 }}>
                  {['🍛','🍚','🍽','🔥','🎊','🍜','🍨','🍹','🪑'][i]}
                </span>
                <span style={{
                  fontFamily: 'DM Sans', fontSize: '11px',
                  color: 'rgba(0,0,0,0.35)', fontWeight: 500,
                  letterSpacing: '1px', textTransform: 'uppercase',
                }}>Add Photo</span>
              </div>

              {/* Hover overlay */}
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(26,15,8,0.8) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'flex-end',
                padding: '20px',
              }}>
                <span style={{
                  fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 600,
                  color: '#FFFFFF',
                }}>{g.label}</span>
              </div>

              {/* Watermark badge */}
              <div style={{
                position: 'absolute', top: 10, left: 10,
                background: 'rgba(125,26,43,0.8)',
                color: '#fff', fontSize: '10px',
                fontFamily: 'DM Sans', fontWeight: 600,
                padding: '3px 10px', borderRadius: 100,
                letterSpacing: '0.5px',
              }}>FLORIS</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{
            fontFamily: 'Cormorant Garamond', fontSize: '1.1rem',
            color: '#7A6555', marginBottom: 16,
          }}>
            📸 Replace the placeholders with your actual restaurant & food photos
          </p>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary" style={{ fontSize: '14px' }}>
            💬 Follow us on WhatsApp for updates
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ===== REVIEWS SECTION =====
export function ReviewsSection() {
  return (
    <section id="reviews" style={{
      background: 'linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 100%)',
      padding: '100px 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Guest Feedback</span>
          <h2 className="section-title">
            What Our <span>Guests</span> Say
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
        </div>

        {/* Google Rating Card */}
        <div style={{
          maxWidth: 480,
          margin: '0 auto 48px',
          background: '#FFFFFF',
          borderRadius: 16,
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 16px 48px rgba(26,15,8,0.1)',
          border: '1px solid rgba(201,149,44,0.2)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ fontSize: '28px' }}>⭐</span>
            ))}
          </div>
          <div style={{
            fontFamily: 'Playfair Display', fontSize: '5rem',
            fontWeight: 800, color: '#7D1A2B', lineHeight: 1,
            marginBottom: 8,
          }}>5.0</div>
          <p style={{
            fontFamily: 'DM Sans', fontSize: '16px',
            fontWeight: 600, color: '#1A0F08', marginBottom: 4,
          }}>Google Rating</p>
          <p style={{
            fontFamily: 'DM Sans', fontSize: '13px',
            color: '#7A6555',
          }}>Based on verified reviews</p>

          <div style={{ height: 1, background: 'rgba(201,149,44,0.2)', margin: '24px 0' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, #4285F4, #34A853)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: '14px',
            }}>G</div>
            <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: '#7A6555' }}>
              Verified on Google Maps
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=Floris+Restaurant+Banquet+Patan+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 20,
              padding: '10px 24px',
              background: 'rgba(125,26,43,0.08)',
              color: '#7D1A2B',
              borderRadius: 6,
              fontFamily: 'DM Sans',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: '1px solid rgba(125,26,43,0.15)',
            }}
          >
            View on Google Maps →
          </a>
        </div>

        {/* Leave Review CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond', fontSize: '1.25rem',
            color: '#7A6555', marginBottom: 20,
          }}>
            Loved dining at Floris? Share your experience with others!
          </p>
          <a
            href="https://maps.google.com/?q=Floris+Restaurant+Banquet+Patan+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '14px' }}
          >
            ⭐ Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}