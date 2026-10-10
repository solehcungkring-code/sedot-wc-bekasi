import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-surface section">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="text-primary">Asih Jaya</h3>
          <p>Jasa Sedot WC dan Pelancaran Saluran Mampet profesional, cepat, dan bersih. Membantu menuntaskan masalah sanitasi di wilayah Bekasi dan sekitarnya.</p>
        </div>
        <div className="footer-col">
          <h4>Layanan</h4>
          <ul>
            <li><Link href="/layanan/sedot-wc">Sedot WC</Link></li>
            <li><Link href="/layanan/wc-mampet">WC Mampet</Link></li>
            <li><Link href="/layanan/sedot-septic-tank">Sedot Septic Tank</Link></li>
            <li><Link href="/layanan/saluran-tersumbat">Saluran Tersumbat</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/area-layanan">Area Layanan</Link></li>
            <li><Link href="/tentang">Tentang Kami</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontak Kami</h4>
          <p><strong>WhatsApp:</strong> <br/><a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20konsultasi%20mengenai%20masalah%20WC%2Fseptic%20tank.%20Mohon%20bantuannya." target="_blank" rel="noopener noreferrer">+62 813-8979-3708</a></p>
          <p><strong>Telepon:</strong> <br/><a href="tel:+6281389793708">+62 813-8979-3708</a></p>
          <p><strong>Area Prioritas:</strong> Bekasi, Jawa Barat</p>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Asih Jaya - Sedot WC Bekasi. All rights reserved.</p>
      </div>
    </footer>
  );
}
