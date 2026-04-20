'use client';

const thalis = [
  {
    name: 'Fix Punjabi Thali',
    price: 190,
    badge: 'Daily Value',
    badgeColor: '#2E7D32',
    items: [
      'Paneer Main Course',
      'Veg Main Course',
      'Dal Fry',
      'Jeera Rice',
      'Roasted Papad',
      'Butter Milk',
      '3 Butter Tandoori / 4 Butter Chapati',
      'Sweet',
      'Onion, Lemon & Pickle',
    ],
    highlight: false,
  },
  {
    name: 'Deluxe Punjabi Thali',
    price: 210,
    badge: 'Most Popular',
    badgeColor: '#7D1A2B',
    items: [
      'Tomato Soup',
      'Paneer Main Course',
      'Veg Main Course',
      'Dal Fry',
      'Jeera Rice',
      'Roasted Papad',
      'Butter Milk',
      '3 Butter Tandoori / 4 Butter Chapati',
      'Sweet',
      'Onion, Lemon & Pickle',
    ],
    highlight: true,
  },
  {
    name: 'Super Deluxe Thali',
    price: 230,
    badge: 'Premium',
    badgeColor: '#C9952C',
    items: [
      'Tomato Soup',
      'Veg. Manchurian Dry (3 pcs)',
      'Paneer Main Course',
      'Veg Main Course',
      'Dal Fry',
      'Jeera Rice',
      'Roasted Papad',
      'Butter Milk',
      '3 Butter Tandoori / 4 Butter Chapati',
      'Sweet',
      'Ice Cream',
      'Onion, Lemon & Pickle',
    ],
    highlight: false,
  },
];

const unlimitedItems = [
  'Any One Soup', 'Green Salad', 'Veg. Manchurian Dry',
  'Paneer Main Course', 'Veg Main Course', 'Dal Fry',
  'Jeera Rice', 'Roasted Papad', 'Butter Milk',
  'Butter Tandoori / Butter Chapati', 'Sweet', 'Ice Cream (One Time)',
];

export default function LunchOffers() {
  return (
    <section id="lunch-offers" style={{
      background: 'linear-gradient(160deg, #1A0F08 0%, #3D1018 50%, #5C1220 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,149,44,0.08) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -100,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(125,26,43,0.3) 0%, transparent 60%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: '#C9952C', marginBottom: 12, display: 'block',
          }}>Lunch Specials</span>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, color: '#FFFFFF', marginBottom: 16,
          }}>
            Punjabi Thali <span style={{ color: '#C9952C', fontStyle: 'italic' }}>Feast</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#C9952C', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
          <p style={{
            fontFamily: 'Cormorant Garamond', fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.6)', maxWidth: 500, margin: '0 auto',
          }}>
            Available at lunch time only. Pack lunch also available for offices & homes.
          </p>
        </div>

        {/* Thali Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24, marginBottom: 48,
        }}>
          {thalis.map((t) => (
            <div key={t.name} style={{
              background: t.highlight
                ? 'linear-gradient(135deg, rgba(201,149,44,0.15) 0%, rgba(125,26,43,0.2) 100%)'
                : 'rgba(255,255,255,0.05)',
              border: t.highlight ? '2px solid rgba(201,149,44,0.5)' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: '32px 28px',
              position: 'relative',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              {/* Badge */}
              <span style={{
                position: 'absolute', top: -14, left: 24,
                background: t.badgeColor, color: '#fff',
                fontSize: '11px', fontWeight: 700,
                padding: '4px 14px', borderRadius: 100,
                fontFamily: 'DM Sans', letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>{t.badge}</span>

              {/* Price */}
              <div style={{ marginBottom: 20, marginTop: 8 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                  <span style={{
                    fontFamily: 'Playfair Display', fontSize: '3rem',
                    fontWeight: 800, color: '#FFFFFF', lineHeight: 1,
                  }}>₹{t.price}</span>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)', marginBottom: 6,
                  }}>per person</span>
                </div>
                <h3 style={{
                  fontFamily: 'Playfair Display', fontSize: '1.15rem',
                  fontWeight: 600, color: '#C9952C', marginTop: 4,
                }}>{t.name}</h3>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(201,149,44,0.2)', marginBottom: 20 }} />

              {/* Items */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#C9952C', fontSize: '14px', flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.78)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 24,
                padding: '12px',
                background: t.highlight ? '#C9952C' : 'rgba(201,149,44,0.2)',
                color: t.highlight ? '#1A0F08' : '#C9952C',
                borderRadius: 6,
                fontFamily: 'DM Sans',
                fontSize: '14px',
                fontWeight: 700,
                transition: 'all 0.2s',
                textDecoration: 'none',
                border: '1px solid rgba(201,149,44,0.3)',
              }}>
                Book This Thali
              </a>
            </div>
          ))}
        </div>

        {/* Unlimited Banner */}
        <div style={{
          background: 'rgba(201,149,44,0.1)',
          border: '1.5px solid rgba(201,149,44,0.4)',
          borderRadius: 16,
          padding: '40px 36px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="unlimited-grid"
        >
          <div>
            <span style={{
              display: 'inline-block',
              background: '#C9952C', color: '#1A0F08',
              fontSize: '11px', fontWeight: 700,
              padding: '4px 14px', borderRadius: 100,
              fontFamily: 'DM Sans', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: 16,
            }}>⭐ Best Value</span>
            <h3 style={{
              fontFamily: 'Playfair Display', fontSize: '2.2rem',
              fontWeight: 800, color: '#FFFFFF', marginBottom: 8, lineHeight: 1.1,
            }}>
              Unlimited<br />
              <span style={{ color: '#C9952C', fontStyle: 'italic' }}>Lunch / Dinner</span>
            </h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 12 }}>
              <span style={{
                fontFamily: 'Playfair Display', fontSize: '3.5rem',
                fontWeight: 800, color: '#FFFFFF', lineHeight: 1,
              }}>₹349</span>
              <span style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                per person
              </span>
            </div>
            <p style={{
              fontFamily: 'DM Sans', fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 24,
            }}>⚠️ Minimum 3 persons required</p>
            <a href="tel:+91XXXXXXXXXX" className="btn-gold" style={{ fontSize: '14px' }}>
              📞 Book Unlimited Meal
            </a>
          </div>

          <div>
            <p style={{
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600,
              color: '#C9952C', letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: 16,
            }}>What's Included</p>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px',
            }}>
              {unlimitedItems.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#C9952C', fontSize: '12px' }}>✦</span>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '12px',
                    color: 'rgba(255,255,255,0.75)',
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .unlimited-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}