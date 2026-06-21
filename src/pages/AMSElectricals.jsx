import { useState, useEffect } from "react";
import ownerImage from "../images/ams.jpeg";
const APPLIANCES = [
  {
    name: "Mixer Grinder",
    img: "https://kitchenmart.co.in/cdn/shop/files/01_232656ea-d565-4718-9de1-6107d6965899_1600x.webp?v=1762591852",
    fallback: "https://kitchenmart.co.in/cdn/shop/files/01_232656ea-d565-4718-9de1-6107d6965899_1600x.webp?v=1762591852",
    desc: "All brands service and spare parts available",
    color: "#FFF3EE"
  },
  {
    name: "Wet Grinder",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsEBOMgfW9oRk3NttDJxoFI00PLk0Vb_fMjJ88trkQ&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgsEBOMgfW9oRk3NttDJxoFI00PLk0Vb_fMjJ88trkQ&s=10",
    desc: "All brands service and spare parts available",
    color: "#EEF3FF"
  },
  {
    name: "Gas Stove",
    img: "https://sunshineindia.com/cdn/shop/files/WhatsAppImage2026-05-19at5.50.15PM_7dced397-ae63-473c-8546-76cd1a5b57a7.jpg?v=1779342154&width=1946",
    fallback: "https://sunshineindia.com/cdn/shop/files/WhatsAppImage2026-05-19at5.50.15PM_7dced397-ae63-473c-8546-76cd1a5b57a7.jpg?v=1779342154&width=1946",
    desc: "2 / 3 / 4 Burner and all spares available",
    color: "#F0FFF4"
  },
  {
    name: "Water Heater",
    img: "https://www.vguard.in/uploads/subcategory/pebble-smart.jpg",
    fallback: "https://www.vguard.in/uploads/subcategory/pebble-smart.jpg",
    desc: "Storage / Instant Geyser",
    color: "#FFFBEE"
  },
  {
    name: "Iron Box",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiihjVnfzmfMEC5C7Yrmvfx0DO6DIN0PbtJPWrz5f-g&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiihjVnfzmfMEC5C7Yrmvfx0DO6DIN0PbtJPWrz5f-g&s=10",
    desc: "All brands service and spare parts available",
    color: "#F0F8FF"
  },
  {
    name: "Pressure Cooker",
    img: "https://kitchenmart.co.in/cdn/shop/products/prestige-popular-aluminium-pressure-cooker-1-5-litre-8901365100386-prestige-popular-1-5l-1065-4620932251738_1600x.jpg?v=1607126319",
    fallback: "https://kitchenmart.co.in/cdn/shop/products/prestige-popular-aluminium-pressure-cooker-1-5-litre-8901365100386-prestige-popular-1-5l-1065-4620932251738_1600x.jpg?v=1607126319",
    desc: "All brands service and spare parts available",
    color: "#FFF0F5"
  },
  {
    name: "Commercial Gas Stoves",
    img: "https://velanstore.com/cdn/shop/files/Screenshot-2024-07-29-at-12.09.44_E2_80_AFPM.png?v=1754386509",
    fallback: "https://velanstore.com/cdn/shop/files/Screenshot-2024-07-29-at-12.09.44_E2_80_AFPM.png?v=1754386509",
    desc: "Service and all spare parts available",
    color: "#F0FAFF"
  },
  {
    name: "Ceiling Fan",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/4/303947198/YL/FD/NA/148165670/industrial-ceiling-fan-500x500.jpg",
    fallback: "https://5.imimg.com/data5/SELLER/Default/2023/4/303947198/YL/FD/NA/148165670/industrial-ceiling-fan-500x500.jpg",
    desc: "Repair & Coil Winding",
    color: "#FFF8EE",
    badge: "Specialist"
  },
  {
    name: "Tower Fan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aEeEzjkPSsQpHtjaVuvnHKSgsJY0pDd-55WbwtHnJA&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aEeEzjkPSsQpHtjaVuvnHKSgsJY0pDd-55WbwtHnJA&s=10",
    desc: "All brands service and spare parts available",
    color: "#FFF8EE"
  },
  {
    name: "Kitchen Exhaust Fan",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBE3o8rbAKEefseK-l7_wTW_kWyXXYTdZuTxI2X1hbA&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBE3o8rbAKEefseK-l7_wTW_kWyXXYTdZuTxI2X1hbA&s=10",
    desc: "All brands service and spare parts available",
    color: "#FFF8EE"
  },
  {
    name: "Kettle",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwiGSlAP-m-MqbAQ5PLbwHOGkpvEN7CWlRscVnOJ7vA&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwiGSlAP-m-MqbAQ5PLbwHOGkpvEN7CWlRscVnOJ7vA&s=10",
    desc: "All brands service and spare parts available",
    color: "#FFF8EE"
  },
  {
    name: "Electric Rice Cooker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpbehL-0Vh4pBiSTMg9KwKgwYAV3gOgsyvoeTFKIMLQ&s=10",
    fallback: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpbehL-0Vh4pBiSTMg9KwKgwYAV3gOgsyvoeTFKIMLQ&s=10",
    desc: "All brands service and spare parts available",
    color: "#FFF8EE"
  },
];

const SERVICES = [
  { icon: "🔧", title: "Repair & Service", desc: "Expert repair for all home appliances with genuine spare parts and skilled technicians" },
  { icon: "🛠️", title: "Spare Parts", desc: "Wide range of original and compatible spare parts available for all major brands" },
  { icon: "🌀", title: "Fan Coil Winding", desc: "Specialist ceiling fan motor coil winding and rewinding — restored to factory performance" },
  { icon: "⚡", title: "Quick Turnaround", desc: "Most repairs completed same day or within 24 hours for your convenience" },
];

const BRANDS = ["Preethi", "Crompton", "Bajaj", "Bosch", "Philips", "Butterfly", "Prestige", "Havells", "Panasonic", "Orient", "Ultra", "Usha", "V-Guard", "Khaitan"];

const MAP_LINK = "https://maps.app.goo.gl/nrpggAfU2DYTW7Zp8";

function ApplianceCard({ a }) {
  const [imgSrc, setImgSrc] = useState(a.img);
  return (
    <div className="appliance-card" style={{ background: a.color || "#fff" }}>
      {a.badge && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "#FF6B35", color: "#fff",
          fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
          padding: "3px 8px", borderRadius: 20,
          textTransform: "uppercase"
        }}>{a.badge}</div>
      )}
      <div style={{ position: "relative", height: 120, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        <img
          src={imgSrc}
          alt={a.name}
          onError={() => setImgSrc(a.fallback)}
          style={{
            maxHeight: 110, maxWidth: "100%", objectFit: "contain",
            transition: "transform 0.3s ease",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))"
          }}
          className="appliance-img"
        />
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17, color: "#0D1B2A" }}>
        {a.name}
      </div>
      <div style={{ fontSize: 12, color: "#8A9BB0", marginTop: 3 }}>{a.desc}</div>
    </div>
  );
}

export default function AMSElectricals() {
  const [activeService, setActiveService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#F7F4EF", color: "#0D1B2A", minHeight: "100vh", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-link { color: #F7F4EF; text-decoration: none; font-size: 14px; font-weight: 500; opacity: 0.82; transition: opacity 0.2s; }
        .nav-link:hover { opacity: 1; color: #FF6B35; }

         .owner-grid {
    display: grid;
    grid-template-columns: 320px 1fr; 
  }

  html {
  scroll-behavior: smooth;
}

  @media (max-width: 768px) {
    .owner-grid {
      grid-template-columns: 1fr !important;
      text-align: center;
    }

    .owner-grid h2 {
      font-size: 36px !important;
    }
  }

  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media (max-width: 540px) {
  .hero-title { font-size: 38px !important; }
  .appliances-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .services-grid { grid-template-columns: 1fr !important; }
  .nav-links { display: none !important; }
  .hero-section-mobile-pad { padding: 130px 20px 60px !important; }
  .top-bar-email { display: none !important; }
  .ceiling-fan-grid { grid-template-columns: 1fr !important; }
  .contact-grid { grid-template-columns: 1fr !important; }
  .stats-grid { grid-template-columns: 1fr !important; }
  .owner-grid { grid-template-columns: 1fr !important; text-align: center; }
  .hero-cta-row { flex-direction: column !important; }
  .hero-tags { flex-direction: column !important; gap: 10px !important; }
}

        .service-card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 24px;
          border: 1.5px solid #e8e4dc;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .service-card:hover { border-color: #FF6B35; transform: translateY(-4px); box-shadow: 0 12px 32px rgba(255,107,53,0.13); }

        .appliance-card {
          border-radius: 14px;
          padding: 20px 14px 16px;
          border: 1.5px solid #e8e4dc;
          text-align: center;
          transition: all 0.22s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .appliance-card:hover { border-color: #FF6B35; box-shadow: 0 8px 28px rgba(255,107,53,0.13); transform: translateY(-3px); }
        .appliance-card:hover .appliance-img { transform: scale(1.07); }

        .brand-pill {
          background: #fff;
          border: 1.5px solid #e8e4dc;
          border-radius: 50px;
          padding: 8px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #0D1B2A;
          display: inline-block;
          transition: all 0.2s;
          cursor: default;
        }
        .brand-pill:hover { background: #FF6B35; color: #fff; border-color: #FF6B35; }

        .cta-btn {
          background: #FF6B35; color: #fff; border: none;
          border-radius: 10px; padding: 14px 32px;
          font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.2s; text-decoration: none; display: inline-block;
        }
        .cta-btn:hover { background: #e55a26; transform: translateY(-1px); }

        .cta-btn-outline {
          background: transparent; color: #FF6B35;
          border: 2px solid #FF6B35; border-radius: 10px;
          padding: 12px 28px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
          text-decoration: none; display: inline-block;
        }
        .cta-btn-outline:hover { background: #FF6B35; color: #fff; }

        .section-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase; color: #FF6B35;
        }
        .section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800; color: #0D1B2A; line-height: 1.1;
        }

        .contact-input {
          width: 100%; padding: 12px 16px;
          border: 1.5px solid #e8e4dc; border-radius: 10px;
          font-size: 14px; font-family: 'Inter', sans-serif;
          background: #fff; color: #0D1B2A;
          transition: border-color 0.2s; outline: none;
        }
        .contact-input:focus { border-color: #FF6B35; }

        @keyframes float-up { 0%{transform:translateY(0)} 50%{transform:translateY(-8px)} 100%{transform:translateY(0)} }
        .float-badge { animation: float-up 3.2s ease-in-out infinite; }
        .float-badge-2 { animation: float-up 3.2s ease-in-out infinite; animation-delay: 1.4s; }
        .float-badge-3 { animation: float-up 3.2s ease-in-out infinite; animation-delay: 0.7s; }

        @keyframes spin-fan { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .spin-fan { animation: spin-fan 6s linear infinite; transform-origin: center; }

       @media (max-width: 900px) {
  .services-grid { grid-template-columns: 1fr 1fr !important; }
  .appliances-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .stats-grid { grid-template-columns: 1fr !important; }
  .contact-grid { grid-template-columns: 1fr !important; }
  .ceiling-fan-grid { grid-template-columns: 1fr !important; }
  .hero-badges { display: none !important; }
}
        @media (max-width: 540px) {
          .hero-title { font-size: 44px !important; }
          .appliances-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* Top Contact Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          background: "#FF6B35",
          color: "#fff",
          padding: "8px 14px",
          fontSize: "12px",
          fontWeight: "500",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          overflow: "hidden",
          gap: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
        }}
      >
        <div>
          📞 +91 98659 47816
        </div>

        <div>
          ✉️ amselectricals1@gmail.com
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px", transition: "all 0.3s ease",
        position: "fixed",
        top: "40px",
        left: 0,
        right: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 9, background: "#FF6B35",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, color: "#fff"
          }}>⚡</div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16, color: "#F7F4EF", letterSpacing: 0.3, lineHeight: 1.1 }}>
              A.M.S Electricals
            </div>
            <div style={{ fontSize: 10, color: "#8A9BB0", letterSpacing: 0.5 }}>Salem · Since 1998</div>
          </div>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 28 }}>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#appliances">Appliances</a>
          <a className="nav-link" href="#brands">Brands</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a href={MAP_LINK} target="_blank" rel="noreferrer" style={{
            background: "#FF6B35", color: "#fff", textDecoration: "none",
            padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600
          }}>📍 Find Us</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="hero-section-mobile-pad"
        style={{
          background: "linear-gradient(140deg, #0A1520 0%, #0D1B2A 55%, #14263A 100%)",
          minHeight: "100vh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "150px 40px 90px",   // ← kept as default; mobile class overrides it
          position: "relative", overflow: "hidden"
        }}>
        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.035,
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }} />

        {/* Big bolt bg */}
        <div style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", opacity: 0.055 }}>
          <svg width="420" height="420" viewBox="0 0 100 100">
            <polygon points="58,4 32,52 52,52 42,96 68,44 48,44" fill="#FFD23F" />
          </svg>
        </div>

        {/* Floating badges */}
        <div className="float-badge hero-badges" style={{
          position: "absolute", right: "10%", top: "18%",
          background: "rgba(255,107,53,0.13)", border: "1px solid rgba(255,107,53,0.32)",
          borderRadius: 14, padding: "14px 20px", backdropFilter: "blur(8px)"
        }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 34, fontWeight: 900, color: "#FF6B35", lineHeight: 1 }}>23+</div>
          <div style={{ fontSize: 11, color: "#8A9BB0", letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2 }}>Years Experience</div>
        </div>

        <div className="float-badge-2 hero-badges" style={{
          position: "absolute", right: "24%", top: "74%",
          background: "rgba(255,210,63,0.1)", border: "1px solid rgba(255,210,63,0.22)",
          borderRadius: 14, padding: "14px 20px", backdropFilter: "blur(8px)"
        }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 34, fontWeight: 900, color: "#FFD23F", lineHeight: 1 }}>2000+</div>
          <div style={{ fontSize: 11, color: "#8A9BB0", letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2 }}>Happy Customers</div>
        </div>

        <div className="float-badge-3 hero-badges" style={{
          position: "absolute", right: "7%", top: "62%",
          background: "rgba(60,200,120,0.09)", border: "1px solid rgba(60,200,120,0.2)",
          borderRadius: 14, padding: "14px 20px", backdropFilter: "blur(8px)"
        }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, color: "#4CD898", lineHeight: 1 }}>Ceiling Fan Specialist</div>
          <div style={{ fontSize: 11, color: "#8A9BB0", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Coil Winding Expert</div>
        </div>

        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 22 }}>
            <span style={{
              background: "rgba(255,107,53,0.14)", border: "1px solid rgba(255,107,53,0.32)",
              borderRadius: 50, padding: "7px 18px",
              fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", color: "#FF6B35"
            }}>⚡ Salem's Trusted Home Appliance Service Center</span>
          </div>

          <h1 className="hero-title" style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 900, fontSize: 80, lineHeight: 0.92,
            color: "#F7F4EF", marginBottom: 8, letterSpacing: -1
          }}>
            A.M.S<br />
            <span style={{ color: "#FF6B35" }}>ELECTRICALS</span><br />
            <span style={{ fontSize: "0.48em", fontWeight: 600, color: "#8A9BB0", letterSpacing: 1.5 }}>
              SPARES &amp; SERVICE
            </span>
          </h1>

          {/* Owner badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 50, padding: "8px 16px 8px 8px", marginTop: 22, marginBottom: 24
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%", background: "#FF6B35",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff"
            }}>MS</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#F7F4EF" }}>Mohamed Shajahan A</div>
              <div style={{ fontSize: 11, color: "#8A9BB0" }}>Owner · 23 Years Experience</div>
            </div>
          </div>

          <p style={{ fontSize: 18, color: "#8A9BB0", maxWidth: 500, lineHeight: 1.7, marginBottom: 36 }}>
            Expert repairs & genuine spare parts for all home appliances. Specialists in ceiling fan repair &amp; coil winding — right here in Salem.
          </p>

          <div className="hero-cta-row" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="cta-btn" href="#contact">Book a Service ⚡</a>
            <a className="cta-btn-outline" href={MAP_LINK} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>

          <div className="hero-tags" style={{ marginTop: 52, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            {["Genuine Spare Parts", "Same-Day Service", "Ceiling Fan Specialist", "All Brands Serviced"].map((tag, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: i === 2 ? "#FFD23F" : "#FF6B35" }} />
                <span style={{ fontSize: 13, color: "#8A9BB0", fontWeight: 500 }}>{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,20 L1440,60 L0,60 Z" fill="#F7F4EF" />
          </svg>
        </div>
      </section>

      {/* ── CEILING FAN SPECIALTY BANNER ── */}
      <section style={{ background: "#0D1B2A", padding: "0" }}>
        <div style={{
          maxWidth: 1400, margin: "0 auto",
          display: "flex", alignItems: "center", gap: 32,
          padding: "28px 40px", flexWrap: "wrap"
        }}>
          <div style={{
            width: 56, height: 56, background: "rgba(255,210,63,0.12)",
            border: "2px solid rgba(255,210,63,0.3)", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
            <svg className="spin-fan" width="30" height="30" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="6" fill="#FFD23F" />
              <ellipse cx="20" cy="36" rx="16" ry="6" fill="#FF6B35" transform="rotate(-15 20 36)" />
              <ellipse cx="60" cy="44" rx="16" ry="6" fill="#FF6B35" transform="rotate(-15 60 44)" />
              <ellipse cx="36" cy="62" rx="16" ry="6" fill="#FF6B35" transform="rotate(75 36 62)" />
              <ellipse cx="44" cy="18" rx="16" ry="6" fill="#FF6B35" transform="rotate(75 44 18)" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#FFD23F", letterSpacing: 0.5 }}>
              Ceiling Fan Specialist — Repair & Coil Winding
            </div>
            <div style={{ color: "#8A9BB0", fontSize: 14, marginTop: 4 }}>
              Expert motor coil winding, rewinding, and complete ceiling fan restoration. All brands. All models.
            </div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["Motor Rewinding", "Capacitor Replacement", "Bearing Service", "Speed Controller Fix"].map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,210,63,0.08)", border: "1px solid rgba(255,210,63,0.18)",
                borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#FFD23F", fontWeight: 500
              }}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OWNER BIO ── */}
      <section
        style={{
          padding: "90px 40px",
          background: "#fff"
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            // gridTemplateColumns: "320px 1fr",
            gap: "50px",
            alignItems: "center"
          }}
          className="owner-grid"
        >
          {/* Owner Photo */}
          <div style={{ textAlign: "center" }}>
            <img
              src={ownerImage}
              alt="Mohamed Shajahan"
              style={{
                width: "100%",
                maxWidth: "320px",
                height: "380px",
                objectFit: "cover",
                borderRadius: "20px",
                border: "4px solid #FF6B35",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)"
              }}
            />

            <div
              style={{
                marginTop: "15px",
                background: "#FF6B35",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                fontWeight: "600"
              }}
            >
              Mohamed Shajahan
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <p
              className="section-label"
              style={{ marginBottom: "10px" }}
            >
              Meet The Owner
            </p>

            <h2
              className="section-title"
              style={{
                fontSize: "48px",
                marginBottom: "20px"
              }}
            >
              Mohamed Shajahan A
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                color: "#6B7A90",
                marginBottom: "20px"
              }}
            >
              With more than 23 years of experience in home appliance repair and
              electrical services, Mohamed Shajahan has built A.M.S Electricals into
              one of Salem's trusted home appliance service centers. His expertise ranges
              from mixer grinders and washing machines to advanced ceiling fan motor
              coil winding and restoration.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.9",
                color: "#6B7A90",
                marginBottom: "25px"
              }}
            >
              Known for honest service, genuine spare parts, and customer-first
              support, he has helped thousands of households keep their appliances
              running efficiently.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px"
              }}
            >
              <div
                style={{
                  background: "#FFF3EE",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontWeight: "600"
                }}
              >
                🏆 23+ Years Experience
              </div>

              <div
                style={{
                  background: "#EEF7FF",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontWeight: "600"
                }}
              >
                ⚡ 5000+ Repairs
              </div>

              <div
                style={{
                  background: "#F0FFF4",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  fontWeight: "600"
                }}
              >
                🔧 Ceiling Fan Specialist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "80px 40px", background: "#F7F4EF" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 10 }}>What We Do</p>
            <h2 className="section-title" style={{ fontSize: 48 }}>Our Services</h2>
            <p style={{ color: "#8A9BB0", marginTop: 12, fontSize: 16, maxWidth: 460, margin: "12px auto 0" }}>
              Complete home appliance care — from routine servicing to complex repairs
            </p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card" onClick={() => setActiveService(activeService === i ? null : i)}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 21, marginBottom: 8, color: "#0D1B2A" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6B7A90", lineHeight: 1.65 }}>{s.desc}</p>
                <div style={{
                  marginTop: 18, height: 3,
                  width: activeService === i ? "100%" : "30px",
                  background: i === 2 ? "#FFD23F" : "#FF6B35",
                  borderRadius: 2, transition: "width 0.35s ease"
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLIANCES ── */}
      <section id="appliances" style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 10 }}>We Service</p>
            <h2 className="section-title" style={{ fontSize: 48 }}>All Home Appliances</h2>
            <p style={{ color: "#8A9BB0", marginTop: 12, fontSize: 16, maxWidth: 460, margin: "12px auto 0" }}>
              Bring in any appliance — we have the parts and expertise to fix it right
            </p>
          </div>
          <div className="appliances-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {APPLIANCES.map((a, i) => (
              <ApplianceCard key={i} a={a} />
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, color: "#8A9BB0", fontSize: 14 }}>
            + Many more appliances. If you don't see yours, just call us.
          </p>
        </div>
      </section>

      {/* ── CEILING FAN DEEP SECTION ── */}
      <section style={{ padding: "80px 40px", background: "#0D1B2A", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 10, color: "#FFD23F" }}>Our Specialty</p>
            <h2 className="section-title" style={{ fontSize: 48, color: "#F7F4EF" }}>Ceiling Fan Experts</h2>
            <p style={{ color: "#8A9BB0", marginTop: 12, fontSize: 16, maxWidth: 500, margin: "12px auto 0" }}>
              23 years of ceiling fan repair — from blade replacement to full motor coil rewinding
            </p>
          </div>

          <div className="ceiling-fan-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
            {/* Left: image */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "2px solid rgba(255,210,63,0.2)" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqFtvbsInh3Ju7G5mHh0XxJX7-V0bpzrb_dLnBXVv0A&s=10"
                  alt="Ceiling fan"
                  onError={e => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqFtvbsInh3Ju7G5mHh0XxJX7-V0bpzrb_dLnBXVv0A&s=10"}
                  style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{
                position: "absolute", bottom: -16, right: -16,
                background: "#FFD23F", borderRadius: 12, padding: "14px 20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
              }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 900, color: "#0D1B2A", lineHeight: 1 }}>23+</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0D1B2A", letterSpacing: 1 }}>YEARS EXPERT</div>
              </div>
            </div>

            {/* Right: features */}
            <div>
              {[
                { icon: "🌀", title: "Motor Coil Winding & Rewinding", desc: "Professional coil winding for all ceiling fan motors. Restore your fan to original RPM and efficiency." },
                { icon: "⚙️", title: "Bearing Replacement", desc: "Noisy or wobbly fan? We replace worn bearings to make your fan run silently again." },
                { icon: "🔌", title: "Capacitor & Speed Control Fix", desc: "Single-speed, multi-speed, and regulator-controlled fans all serviced." },
                { icon: "🪛", title: "Complete Fan Overhaul", desc: "Full strip-down, cleaning, part replacement, and reassembly — like brand new." },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16, marginBottom: 22,
                  background: "rgba(255,255,255,0.04)", borderRadius: 12,
                  padding: "16px 18px", border: "1px solid rgba(255,255,255,0.07)"
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17, color: "#FFD23F", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#8A9BB0", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section id="brands" style={{ padding: "72px 40px", background: "#F7F4EF" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 10 }}>Authorized Service</p>
            <h2 className="section-title" style={{ fontSize: 48 }}>Brands We Service</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {BRANDS.map((b, i) => (
              <span key={i} className="brand-pill">{b}</span>
            ))}
            <span className="brand-pill" style={{ borderStyle: "dashed" }}>& many more…</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "0", background: "#F7F4EF" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto 0", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderRadius: 0, overflow: "hidden" }}>
          {[
            { num: "23+", label: "Years in Business", note: "Serving Salem since 1998", accent: false },
            { num: "5000+", label: "Appliances Repaired", note: "Fans, Washers, Grinders & more", accent: true },
            { num: "100%", label: "Genuine Parts", note: "Only authentic spare parts used", accent: false },
          ].map((stat, i) => (
            <div key={i} style={{
              background: stat.accent ? "#FF6B35" : "#0D1B2A",
              padding: "44px 36px", textAlign: "center"
            }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: 64,
                fontWeight: 900, color: stat.accent ? "#fff" : "#FF6B35", lineHeight: 1
              }}>{stat.num}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: stat.accent ? "#fff" : "#F7F4EF", marginTop: 8 }}>{stat.label}</div>
              <div style={{ fontSize: 13, color: stat.accent ? "rgba(255,255,255,0.72)" : "#8A9BB0", marginTop: 5 }}>{stat.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <p className="section-label" style={{ marginBottom: 10 }}>Reach Out</p>
            <h2 className="section-title" style={{ fontSize: 48 }}>Find & Contact Us</h2>
            <p style={{ color: "#8A9BB0", marginTop: 12, fontSize: 16 }}>
              Salem, Tamil Nadu — visit us or send your appliance for service
            </p>
          </div>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>

            {/* Info */}
            <div>
              <div style={{ background: "#0D1B2A", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#FF6B35", marginBottom: 24 }}>
                  Visit or Call Us
                </h3>

                {/* Owner */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)",
                  borderRadius: 10, padding: "12px 14px", marginBottom: 22
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", background: "#FF6B35",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff", flexShrink: 0
                  }}>MS</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#F7F4EF", fontSize: 15 }}>Mohamed Shajahan</div>
                    <div style={{ fontSize: 12, color: "#FF6B35" }}>Owner · 23 Years Experience</div>
                  </div>
                </div>

                {[
                  { icon: "📍", label: "Address", val: "Near Anna Statue, Mamangam Main Road, Jagirrettipatty, Salem - 636302" },
                  { icon: "🕘", label: "Hours", val: "Mon – Sat: 9:00 AM – 9:30 PM" },
                  { icon: "⚡", label: "Emergency", val: "Sunday service available on request" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: "#8A9BB0", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 15, color: "#F7F4EF", fontWeight: 500 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map button */}
              <a href={MAP_LINK} target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "#FF6B35", borderRadius: 14, padding: "20px 24px",
                textDecoration: "none", transition: "background 0.2s"
              }}
                onMouseOver={e => e.currentTarget.style.background = "#e55a26"}
                onMouseOut={e => e.currentTarget.style.background = "#FF6B35"}>
                <span style={{ fontSize: 30 }}>🗺️</span>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>
                    Open in Google Maps
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.78)", marginTop: 2 }}>
                    Get turn-by-turn directions to our shop
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "rgba(255,255,255,0.6)", fontSize: 20 }}>→</div>
              </a>
            </div>

            {/* Form */}
            <div style={{ background: "#F7F4EF", borderRadius: 16, padding: 32, border: "1.5px solid #e8e4dc" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: "#0D1B2A", marginBottom: 22 }}>
                Send a Service Request
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7A90", letterSpacing: 0.5, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Name</label>
                  <input className="contact-input" type="text" placeholder="Enter your full name" style={{ background: "#fff" }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7A90", letterSpacing: 0.5, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Phone Number</label>
                  <input className="contact-input" type="tel" placeholder="Your mobile number" style={{ background: "#fff" }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7A90", letterSpacing: 0.5, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Appliance</label>
                  <select className="contact-input" style={{ cursor: "pointer", background: "#fff" }}>
                    <option value="">Select appliance…</option>
                    {APPLIANCES.map(a => <option key={a.name}>{a.name}</option>)}
                    <option>Ceiling Fan — Coil Winding</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#6B7A90", letterSpacing: 0.5, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Describe the Issue</label>
                  <textarea className="contact-input" rows={4} placeholder="What's wrong with your appliance?" style={{ resize: "vertical", background: "#fff" }} />
                </div>
                <button className="cta-btn" style={{ width: "100%", textAlign: "center", marginTop: 4, fontSize: 16 }}>
                  Send Request ⚡
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="tel:+919876543210"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "28px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 999
        }}
      >
        📞
      </a>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A1520", padding: "36px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, background: "#FF6B35",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18
            }}>⚡</div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, color: "#F7F4EF" }}>
              A.M.S Electricals Spares &amp; Service
            </span>
          </div>
          <p style={{ color: "#8A9BB0", fontSize: 13, marginBottom: 4 }}>
            Home Appliance Service Center · Owned by <span style={{ color: "#F7F4EF", fontWeight: 500 }}>Mohamed Shajahan</span> · Salem, Tamil Nadu
          </p>
          <p style={{ color: "#4A5A70", fontSize: 12, marginBottom: 16 }}>
            Ceiling Fan Specialist · Coil Winding Expert · 23+ Years
          </p>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "16px 0" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {["#services", "#appliances", "#brands", "#contact"].map((href, i) => (
              <a key={i} href={href} style={{ color: "#4A5A70", fontSize: 12, textDecoration: "none", textTransform: "capitalize" }}>
                {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
              </a>
            ))}
            <a href={MAP_LINK} target="_blank" rel="noreferrer" style={{ color: "#FF6B35", fontSize: 12, textDecoration: "none" }}>📍 Google Maps</a>
          </div>
          <p style={{ color: "#2A3A50", fontSize: 11, marginTop: 16 }}>
            © 2026 A.M.S Electricals Spares and Service. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
