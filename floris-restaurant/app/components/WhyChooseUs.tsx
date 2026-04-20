'use client';

const reasons = [
  {
    icon: '🍃',
    title: 'Pure Vegetarian',
    desc: 'A completely pure veg kitchen — no compromise, ever. Safe and trusted by thousands of families.',
    color: '#2E7D32',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Friendly Dining',
    desc: 'A warm, welcoming atmosphere designed for families, couples, and groups of all sizes.',
    color: '#7D1A2B',
  },
  {
    icon: '🅿️',
    title: 'Free Parking',
    desc: 'Ample free parking — garage, lot, and street. Never stress about where to park.',
    color: '#1565C0',
  },
  {
    icon: '🛵',
    title: 'Delivery Available',
    desc: 'Enjoy our food at home with no-contact delivery, kerbside pickup, and takeaway.',
    color: '#E65100',
  },
  {
    icon: '📅',
    title: 'Reservations Accepted',
    desc: 'Plan ahead and reserve your table for a seamless, guaranteed dining experience.',
    color: '#6A1B9A',
  },
  {
    icon: '🛣️',
    title: 'Highway Prime Location',
    desc: 'Conveniently situated on the Patan–Chanasma Highway, opposite the New Circuit House.',
    color: '#C9952C',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{
      background: '#FFFFFF',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,149,44,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Why Dine With Us</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            The <span>Floris</span> Promise
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Six reasons why Floris is Patan's most loved vegetarian dining destination
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              style={{
                background: '#FDF8F0',
                border: '1px solid rgba(201,149,44,0.15)',
                borderRadius: 12,
                padding: '36px 32px',
                transition: 'all 0.35s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 48px rgba(26,15,8,0.12)';
                el.style.borderColor = 'rgba(201,149,44,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(201,149,44,0.15)';
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: `linear-gradient(to right, ${r.color}, transparent)`,
                opacity: 0.6,
              }} />

              <div style={{
                width: 56, height: 56,
                borderRadius: 12,
                background: `${r.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px',
                marginBottom: 20,
              }}>
                {r.icon}
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#1A0F08',
                marginBottom: 10,
              }}>{r.title}</h3>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#7A6555',
                lineHeight: 1.7,
              }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}