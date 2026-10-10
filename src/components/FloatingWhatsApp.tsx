import Link from 'next/link';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <div className="mobile-bottom-nav">
      <Link href="/" className="nav-item">
        <img src="https://img.icons8.com/ios/24/1e293b/home.png" alt="Home" />
        <span>Home</span>
      </Link>
      <Link href="/layanan" className="nav-item">
        <img src="https://img.icons8.com/ios/24/1e293b/truck.png" alt="Layanan" />
        <span>Layanan</span>
      </Link>
      <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20butuh%20bantuan%20darurat%20untuk%20masalah%20saluran%2FWC.%20Mohon%20respon%20segera." target="_blank" rel="noopener noreferrer" className="nav-item nav-item-wa">
        <img src="https://img.icons8.com/ios/24/16a34a/whatsapp.png" alt="WhatsApp" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
