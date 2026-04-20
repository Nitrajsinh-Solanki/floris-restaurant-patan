'use client';
import { useState } from 'react';

const occasions = [
  { icon: '🎂', label: 'Birthday Celebrations' },
  { icon: '💍', label: 'Engagements' },
  { icon: '👨‍👩‍👧', label: 'Family Gatherings' },
  { icon: '🏢', label: 'Corporate Events' },
  { icon: '🎓', label: 'Graduation Parties' },
  { icon: '🙏', label: 'Religious Functions' },
  { icon: '🎊', label: 'Anniversary Dinners' },
  { icon: '🤝', label: 'Business Meetings' },
];

const highlights = [
  { icon: '🍽️', title: 'Customised Menus', desc: 'Tailor the menu to your occasion and guest preferences' },
  { icon: '🚗', title: 'Ample Parking', desc: 'Free parking for all guests — garage, lot & street' },
  { icon: '📍', title: 'Prime Location', desc: 'Easy to find on Patan–Chanasma Highway, opp. Circuit House' },
  { icon: '🌿', title: 'Pure Vegetarian', desc: 'A fully pure veg venue — trusted by families across Patan' },
];

export default function BanquetSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', guests: '', occasion: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🎉 *Banquet Inquiry – Floris Restaurant*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nGuests: ${formData.guests}\nOccasion: ${formData.occasion}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="banquet" style={{
      background: '#FFFFFF',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '45%', height: '100%',
        background: 'linear-gradient(160deg, #FDF8F0 0%, #F5EDE0 100%)',
        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}
        className="banquet-grid"
        >
          {/* Left Column */}
          <div>
            <span className="section-label">Events & Celebrations</span>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Celebrate Every<br />
              <span>Moment</span> With Us
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond', fontSize: '1.2rem',
              color: '#7A6555', lineHeight: 1.8, marginBottom: 32,
            }}>
              Our elegant banquet venue is the ideal setting for your most cherished celebrations. Whether it's an intimate family gathering or a large corporate event, Floris offers a warm, welcoming space with personalised hospitality.
            </p>

            {/* Occasions Grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36,
            }}>
              {occasions.map(o => (
                <div key={o.label} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 16px',
                  background: '#FDF8F0',
                  border: '1px solid rgba(201,149,44,0.2)',
                  borderRadius: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#7D1A2B';
                  (e.currentTarget as HTMLElement).style.borderColor = '#7D1A2B';
                  const span = (e.currentTarget as HTMLElement).querySelector('span:last-child') as HTMLElement;
                  if (span) span.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#FDF8F0';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,149,44,0.2)';
                  const span = (e.currentTarget as HTMLElement).querySelector('span:last-child') as HTMLElement;
                  if (span) span.style.color = '#1A0F08';
                }}
                >
                  <span style={{ fontSize: '18px' }}>{o.icon}</span>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 500, color: '#1A0F08',
                    transition: 'color 0.2s',
                  }}>{o.label}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {highlights.map(h => (
                <div key={h.title} style={{ display: 'flex', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44,
                    background: 'rgba(125,26,43,0.08)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>{h.icon}</div>
                  <div>
                    <h4 style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 700, color: '#1A0F08', marginBottom: 2 }}>{h.title}</h4>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '13px', color: '#7A6555' }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column – Inquiry Form */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #7D1A2B 0%, #5C1220 100%)',
              borderRadius: 16,
              padding: '40px 36px',
              boxShadow: '0 24px 64px rgba(26,15,8,0.2)',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display', fontSize: '1.6rem',
                fontWeight: 700, color: '#FFFFFF', marginBottom: 8,
              }}>
                Book Your Banquet
              </h3>
              <p style={{
                fontFamily: 'Cormorant Garamond', fontSize: '1rem',
                color: 'rgba(255,255,255,0.6)', marginBottom: 28,
              }}>
                Fill in the details and we'll get back to you within hours.
              </p>

              {submitted ? (
                <div style={{
                  textAlign: 'center', padding: '40px 20px',
                }}>
                  <div style={{ fontSize: '48px', marginBottom: 16 }}>🎉</div>
                  <h4 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: '#fff', marginBottom: 8 }}>
                    Inquiry Sent!
                  </h4>
                  <p style={{ fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                    Our team will reach you on WhatsApp shortly to confirm your booking.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { name: 'name', placeholder: 'Your Name*', type: 'text' },
                    { name: 'phone', placeholder: 'Phone Number*', type: 'tel' },
                    { name: 'date', placeholder: '', type: 'date' },
                    { name: 'guests', placeholder: 'Number of Guests*', type: 'number' },
                  ].map(f => (
                    <input
                      key={f.name}
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1.5px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: 6,
                        padding: '13px 16px',
                        fontSize: '14px',
                        fontFamily: 'DM Sans',
                      }}
                    />
                  ))}

                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1.5px solid rgba(255,255,255,0.2)',
                      color: formData.occasion ? '#fff' : 'rgba(255,255,255,0.5)',
                      borderRadius: 6,
                      padding: '13px 16px',
                      fontSize: '14px',
                      fontFamily: 'DM Sans',
                      width: '100%',
                    }}
                  >
                    <option value="" style={{ color: '#000' }}>Select Occasion</option>
                    {occasions.map(o => (
                      <option key={o.label} value={o.label} style={{ color: '#000' }}>{o.icon} {o.label}</option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    placeholder="Any special requirements or message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1.5px solid rgba(255,255,255,0.2)',
                      color: '#fff',
                      borderRadius: 6,
                      padding: '13px 16px',
                      fontSize: '14px',
                      fontFamily: 'DM Sans',
                      resize: 'vertical',
                      width: '100%',
                    }}
                  />

                  <button
                    onClick={handleSubmit}
                    style={{
                      background: '#C9952C',
                      color: '#1A0F08',
                      padding: '14px',
                      borderRadius: 6,
                      fontSize: '15px',
                      fontWeight: 700,
                      fontFamily: 'DM Sans',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#E4B554'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9952C'; }}
                  >
                    💬 Send Banquet Inquiry on WhatsApp
                  </button>

                  <p style={{
                    textAlign: 'center',
                    fontFamily: 'DM Sans', fontSize: '12px',
                    color: 'rgba(255,255,255,0.4)',
                  }}>
                    Or call us directly: <a href="tel:+91XXXXXXXXXX" style={{ color: '#C9952C' }}>+91-XXXXXXXXXX</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .banquet-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}