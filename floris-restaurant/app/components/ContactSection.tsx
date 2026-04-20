'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', time: '', guests: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🍽️ *Table Reservation – Floris Restaurant*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nNotes: ${formData.notes}`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      background: '#FDF8F0',
      padding: '100px 0',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Find & Reserve</span>
          <h2 className="section-title">
            Visit <span>Floris</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
        }}
        className="contact-grid"
        >
          {/* Left: Info + Map */}
          <div>
            {/* Quick CTA Buttons */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
              <a href="tel:+91XXXXXXXXXX" style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '16px 20px',
                background: '#7D1A2B', color: '#FFFFFF',
                borderRadius: 8, textDecoration: 'none',
                fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 700,
                transition: 'all 0.2s',
                boxShadow: '0 8px 24px rgba(125,26,43,0.25)',
                minWidth: 140,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#5C1220'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#7D1A2B'; }}
              >
                📞 Call Now
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" style={{
                flex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '16px 20px',
                background: '#25D366', color: '#FFFFFF',
                borderRadius: 8, textDecoration: 'none',
                fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 700,
                transition: 'all 0.2s',
                boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
                minWidth: 140,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1DA851'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#25D366'; }}
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Address */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(201,149,44,0.2)',
              borderRadius: 12,
              padding: '28px',
              marginBottom: 24,
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display', fontSize: '1.2rem',
                fontWeight: 700, color: '#1A0F08', marginBottom: 16,
              }}>📍 Our Location</h3>

              {[
                { icon: '🏠', label: 'Address', value: '1st Floor, Mashruwala Complex, Patan–Chanasma Highway Rd, Opp. New Circuit House, Patan, Gujarat 384265' },
                { icon: '🕐', label: 'Lunch Hours', value: '11:00 AM – 3:30 PM' },
                { icon: '🌙', label: 'Dinner Hours', value: '6:30 PM – 10:30 PM' },
                { icon: '📅', label: 'Days Open', value: 'Open 7 Days a Week' },
              ].map(info => (
                <div key={info.label} style={{
                  display: 'flex', gap: 12, marginBottom: 14,
                  paddingBottom: 14,
                  borderBottom: '1px solid rgba(201,149,44,0.1)',
                }}>
                  <span style={{ fontSize: '18px', flexShrink: 0, marginTop: 2 }}>{info.icon}</span>
                  <div>
                    <span style={{
                      fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 700,
                      color: '#C9952C', textTransform: 'uppercase', letterSpacing: '1px',
                      display: 'block', marginBottom: 2,
                    }}>{info.label}</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: '14px', color: '#1A0F08' }}>{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed */}
            <div style={{
              borderRadius: 12, overflow: 'hidden',
              border: '1px solid rgba(201,149,44,0.2)',
              boxShadow: '0 8px 24px rgba(26,15,8,0.1)',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6!2d72.1244!3d23.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRmxvcmlzIFJlc3RhdXJhbnQ!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Floris Restaurant & Banquet Location"
              />
            </div>
          </div>

          {/* Right: Table Reservation Form */}
          <div>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(201,149,44,0.2)',
              borderRadius: 16,
              padding: '40px 36px',
              boxShadow: '0 8px 32px rgba(26,15,8,0.08)',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display', fontSize: '1.6rem',
                fontWeight: 700, color: '#1A0F08', marginBottom: 8,
              }}>
                Book a Table
              </h3>
              <p style={{
                fontFamily: 'Cormorant Garamond', fontSize: '1.05rem',
                color: '#7A6555', marginBottom: 28,
              }}>
                Reserve your table in advance — sent directly via WhatsApp.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '56px', marginBottom: 16 }}>🎉</div>
                  <h4 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: '#7D1A2B', marginBottom: 8 }}>
                    Reservation Request Sent!
                  </h4>
                  <p style={{ fontFamily: 'DM Sans', color: '#7A6555', fontSize: '14px', lineHeight: 1.6 }}>
                    Your table request has been sent via WhatsApp. Our team will confirm your reservation shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: 20, padding: '10px 24px',
                      background: 'rgba(125,26,43,0.08)',
                      color: '#7D1A2B', border: '1px solid rgba(125,26,43,0.2)',
                      borderRadius: 6, cursor: 'pointer',
                      fontFamily: 'DM Sans', fontWeight: 600, fontSize: '13px',
                    }}
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Your Name*</label>
                      <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Phone*</label>
                      <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Date*</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Time</label>
                      <select name="time" value={formData.time} onChange={handleChange}>
                        <option value="">Select Time</option>
                        <optgroup label="Lunch">
                          {['11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Dinner">
                          {['6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Number of Guests*</label>
                    <select name="guests" value={formData.guests} onChange={handleChange}>
                      <option value="">Select guests</option>
                      {['1-2 Guests','3-4 Guests','5-6 Guests','7-10 Guests','10+ Guests'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 600, color: '#7A6555', display: 'block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '1px' }}>Special Notes</label>
                    <textarea name="notes" placeholder="Dietary requirements, special occasion, seating preferences..." value={formData.notes} onChange={handleChange} rows={3} style={{ resize: 'vertical' }} />
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{
                      background: 'linear-gradient(135deg, #7D1A2B 0%, #5C1220 100%)',
                      color: '#FFFFFF',
                      padding: '15px',
                      borderRadius: 8,
                      fontSize: '15px',
                      fontWeight: 700,
                      fontFamily: 'DM Sans',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'all 0.25s ease',
                      letterSpacing: '0.3px',
                      boxShadow: '0 8px 24px rgba(125,26,43,0.3)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                  >
                    🪑 Book Table via WhatsApp
                  </button>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href="tel:+91XXXXXXXXXX" style={{
                      flex: 1, textAlign: 'center', padding: '12px',
                      background: 'rgba(125,26,43,0.06)',
                      border: '1px solid rgba(125,26,43,0.15)',
                      borderRadius: 6, color: '#7D1A2B',
                      fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 600,
                      textDecoration: 'none',
                    }}>📞 Call Directly</a>
                    <a href="https://wa.me/91XXXXXXXXXX" style={{
                      flex: 1, textAlign: 'center', padding: '12px',
                      background: 'rgba(37,211,102,0.08)',
                      border: '1px solid rgba(37,211,102,0.25)',
                      borderRadius: 6, color: '#1DA851',
                      fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 600,
                      textDecoration: 'none',
                    }}>💬 WhatsApp Order</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}