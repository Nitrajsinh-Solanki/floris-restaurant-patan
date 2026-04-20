'use client';
import { useState } from 'react';

type MenuItem = { name: string; price: string; qty?: string; note?: string };
type MenuCategory = { id: string; label: string; icon: string; items: MenuItem[] };

const menuCategories: MenuCategory[] = [
  {
    id: 'paneer',
    label: 'Paneer Specials',
    icon: '🧀',
    items: [
      { name: 'Sp. Floris Paneer', price: '₹240', qty: '350g', note: '⭐ Signature' },
      { name: 'Sp. Paneer Chingari', price: '₹240', qty: '350g' },
      { name: 'Sp. Paneer Lakhnavi', price: '₹220', qty: '350g' },
      { name: 'Sp. Paneer Banjara', price: '₹210', qty: '350g' },
      { name: 'Paneer Laziz', price: '₹210', qty: '350g' },
      { name: 'Paneer Tikka Masala', price: '₹210', qty: '350g' },
      { name: 'Paneer Butter Masala', price: '₹190', qty: '300g' },
      { name: 'Paneer Angara', price: '₹190', qty: '300g' },
      { name: 'Paneer Toofani', price: '₹199', qty: '300g' },
      { name: 'Shahi Paneer', price: '₹190', qty: '300g' },
      { name: 'Palak Paneer / Matar Paneer', price: '₹180', qty: '300g' },
      { name: 'Paneer Kolhapuri', price: '₹199', qty: '300g' },
    ],
  },
  {
    id: 'veg',
    label: 'Veg Main Course',
    icon: '🥘',
    items: [
      { name: 'Sp. Veg. Floris', price: '₹220', qty: '350g', note: '⭐ Signature' },
      { name: 'Veg. Angara', price: '₹185', qty: '350g' },
      { name: 'Veg. Toofani', price: '₹180', qty: '350g' },
      { name: 'Veg. Tawa Masala', price: '₹180', qty: '350g' },
      { name: 'Veg. Kadai / Handi / Balti', price: '₹190', qty: '300g' },
      { name: 'Navratan Korma (Sweet)', price: '₹199', qty: '300g' },
      { name: 'Mushroom Masala', price: '₹190', qty: '300g' },
      { name: 'Chana Masala', price: '₹140', qty: '300g' },
      { name: 'Mix Veg.', price: '₹150', qty: '300g' },
      { name: 'Lasaniya Bataka', price: '₹140', qty: '300g' },
      { name: 'Dum Aloo (Punjabi)', price: '₹130', qty: '300g' },
      { name: 'Sev Tomato', price: '₹140', qty: '300g' },
    ],
  },
  {
    id: 'chinese',
    label: 'Chinese',
    icon: '🍜',
    items: [
      { name: 'Dragon Paneer Dry', price: '₹230', qty: '350g', note: '🔥 Hot' },
      { name: 'Paneer Chilli Dry/Gravy', price: '₹220', qty: '350g' },
      { name: 'Veg. Spring Roll', price: '₹210', qty: '350g' },
      { name: 'Paneer 65', price: '₹210', qty: '350g' },
      { name: 'Paneer Manchurian', price: '₹199', qty: '350g' },
      { name: 'Veg. Manchurian Dry/Gravy', price: '₹190', qty: '350g' },
      { name: 'Chinese Bhel', price: '₹190', qty: '350g' },
      { name: 'Schezwan Noodles', price: '₹190', qty: '350g' },
      { name: 'Veg. Hakka Noodles', price: '₹190', qty: '350g' },
      { name: 'Manchurian Fried Rice', price: '₹180', qty: '300g' },
      { name: 'Mushroom Fried Rice', price: '₹185', qty: '300g' },
      { name: 'Schezwan Fried Rice', price: '₹170', qty: '300g' },
    ],
  },
  {
    id: 'soups',
    label: 'Soups',
    icon: '🍲',
    items: [
      { name: 'Veg. Mushroom Soup', price: '₹130', qty: '200ml', note: '⭐ Premium' },
      { name: 'Veg. Manchurian Soup', price: '₹130', qty: '200ml' },
      { name: 'Minestrone Soup', price: '₹120', qty: '200ml' },
      { name: 'Veg. Manchow Soup', price: '₹120', qty: '200ml' },
      { name: 'Veg. Hot & Sour Soup', price: '₹120', qty: '200ml' },
      { name: 'Cheese Corn Soup', price: '₹110', qty: '200ml' },
      { name: 'Lemon Coriander Soup', price: '₹110', qty: '200ml' },
      { name: 'Cream of Tomato Soup', price: '₹95', qty: '200ml' },
      { name: 'Veg. Sweet Corn Soup', price: '₹95', qty: '200ml' },
    ],
  },
  {
    id: 'sandwich',
    label: 'Sandwich & Fries',
    icon: '🥪',
    items: [
      { name: 'Cheese Grilled Sandwich', price: '₹110', qty: '150g' },
      { name: 'Cheese Sandwich', price: '₹90', qty: '150g' },
      { name: 'Veg. Grilled Sandwich', price: '₹100', qty: '150g' },
      { name: 'Veg. Sandwich', price: '₹70', qty: '150g' },
      { name: 'Peri Peri French Fries', price: '₹100', qty: '100g', note: '🔥 Spicy' },
      { name: 'French Fries', price: '₹90', qty: '100g' },
      { name: 'Bread Butter Jam', price: '₹50', qty: '130g' },
      { name: 'Bread Butter', price: '₹40', qty: '120g' },
    ],
  },
  {
    id: 'breads',
    label: 'Breads & Naan',
    icon: '🫓',
    items: [
      { name: 'Cheese Chilly Garlic Naan', price: '₹120', qty: '1 Pc', note: '⭐ Best' },
      { name: 'Cheese Garlic Naan', price: '₹110', qty: '1 Pc' },
      { name: 'Garlic Naan', price: '₹90', qty: '1 Pc' },
      { name: 'Cheese Naan / Stuff Naan', price: '₹90', qty: '1 Pc' },
      { name: 'Lachha Paratha', price: '₹45', qty: '1 Pc' },
      { name: 'Butter Naan', price: '₹50', qty: '1 Pc' },
      { name: 'Plain Naan', price: '₹45', qty: '1 Pc' },
      { name: 'Butter Tandoori Roti', price: '₹23', qty: '1 Pc' },
      { name: 'Butter Chapati', price: '₹20', qty: '1 Pc' },
    ],
  },
  {
    id: 'rice',
    label: 'Rice & Biryani',
    icon: '🍚',
    items: [
      { name: 'Handi Dum Biryani (with raita)', price: '₹199', qty: '300g', note: '⭐ Signature' },
      { name: 'Hyderabadi Biryani (with raita)', price: '₹190', qty: '300g' },
      { name: 'Veg. Biryani (with raita)', price: '₹170', qty: '300g' },
      { name: 'Kaju Pulao', price: '₹190', qty: '300g' },
      { name: 'Kashmiri Pulao (Sweet)', price: '₹170', qty: '300g' },
      { name: 'Veg. Pulao', price: '₹150', qty: '300g' },
      { name: 'Jeera Rice', price: '₹110', qty: '250g' },
      { name: 'Steam Rice', price: '₹95', qty: '250g' },
      { name: 'Plain Rice', price: '₹90', qty: '250g' },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    icon: '🍹',
    items: [
      { name: 'Mint Mojito', price: '₹120', qty: '200ml', note: '🌿 Fresh' },
      { name: 'Blue Lagoon', price: '₹120', qty: '200ml' },
      { name: 'Strawberry Punch', price: '₹120', qty: '200ml' },
      { name: 'Fruit Punch', price: '₹130', qty: '200ml' },
      { name: 'Pineapple Blossom', price: '₹130', qty: '200ml' },
      { name: 'Oreo Cookies Shake', price: '₹110', qty: '200ml' },
      { name: 'Cold Coffee', price: '₹90', qty: '200ml' },
      { name: 'Sp. Floris Lassi', price: '₹100', qty: '200ml' },
      { name: 'Fresh Lemon Soda', price: '₹65', qty: '200ml' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '🍨',
    items: [
      { name: 'Gulab Jamun', price: '₹50', qty: '4 Pcs' },
      { name: 'Rajbhog Ice Cream', price: '₹55', qty: '100ml' },
      { name: 'Kaju Draksh Ice Cream', price: '₹55', qty: '100ml' },
      { name: 'Badam Carnival Ice Cream', price: '₹55', qty: '100ml' },
      { name: 'American Nuts Ice Cream', price: '₹55', qty: '100ml' },
      { name: 'Butter Scotch Ice Cream', price: '₹50', qty: '100ml' },
      { name: 'Vanilla Ice Cream', price: '₹50', qty: '100ml' },
    ],
  },
];

export default function MenuSection() {
  const [activeId, setActiveId] = useState('paneer');
  const active = menuCategories.find(c => c.id === activeId)!;

  return (
    <section id="menu" style={{
      background: '#FDF8F0',
      padding: '100px 0',
      position: 'relative',
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Explore Our Flavours</span>
          <h2 className="section-title">
            Our <span>Menu</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
              <div style={{ width: 8, height: 8, background: '#7D1A2B', transform: 'rotate(45deg)' }} />
              <div style={{ width: 60, height: 2, background: '#C9952C' }} />
            </div>
          </div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            A curated selection of pure vegetarian delights — from North Indian classics to Indo-Chinese fusion
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10,
          justifyContent: 'center',
          marginBottom: 48,
        }}>
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px',
                background: activeId === cat.id ? '#7D1A2B' : '#FFFFFF',
                color: activeId === cat.id ? '#FFFFFF' : '#7A6555',
                border: `1.5px solid ${activeId === cat.id ? '#7D1A2B' : 'rgba(201,149,44,0.25)'}`,
                borderRadius: 100,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                letterSpacing: '0.3px',
              }}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Active Category Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          marginBottom: 28,
          padding: '16px 24px',
          background: 'linear-gradient(135deg, #7D1A2B 0%, #5C1220 100%)',
          borderRadius: 8,
        }}>
          <span style={{ fontSize: '28px' }}>{active.icon}</span>
          <div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.4rem', fontWeight: 700,
              color: '#FFFFFF',
            }}>{active.label}</h3>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans' }}>
              {active.items.length} items available
            </span>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '9px 18px',
              background: '#C9952C', color: '#1A0F08',
              borderRadius: 4, fontSize: '13px', fontWeight: 700,
              fontFamily: 'DM Sans, sans-serif',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              🪑 Reserve Table
            </a>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {active.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(201,149,44,0.15)',
                borderRadius: 8,
                padding: '18px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(125,26,43,0.3)';
                (e.currentTarget as HTMLElement).style.background = '#FDF8F0';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,149,44,0.15)';
                (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{
                    display: 'inline-block',
                    width: 10, height: 10,
                    borderRadius: 2,
                    border: '1.5px solid #2E7D32',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px', fontWeight: 600,
                    color: '#1A0F08',
                  }}>{item.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 18 }}>
                  {item.qty && (
                    <span style={{ fontSize: '11px', color: '#7A6555', fontFamily: 'DM Sans' }}>{item.qty}</span>
                  )}
                  {item.note && (
                    <span style={{
                      fontSize: '11px', color: '#C9952C',
                      fontFamily: 'DM Sans', fontWeight: 600,
                    }}>{item.note}</span>
                  )}
                </div>
              </div>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.1rem', fontWeight: 700,
                color: '#7D1A2B',
                marginLeft: 12,
                flexShrink: 0,
              }}>{item.price}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center', marginTop: 48,
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(201,149,44,0.08) 0%, rgba(125,26,43,0.05) 100%)',
          borderRadius: 12,
          border: '1px solid rgba(201,149,44,0.2)',
        }}>
          <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.3rem', color: '#7A6555', marginBottom: 20 }}>
            Can't decide? Let us help you build the perfect meal.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/91XXXXXXXXXX" className="btn-primary" style={{ fontSize: '14px' }}>
              💬 Order on WhatsApp
            </a>
            <a href="tel:+91XXXXXXXXXX" className="btn-gold" style={{ fontSize: '14px' }}>
              📞 Call to Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}