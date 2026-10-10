import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          <Image src="/images/logo.png" alt="Asih Jaya Logo" width={150} height={50} style={{ objectFit: 'contain' }} />
        </Link>
        <nav className="nav-desktop">
          <Link href="/">Beranda</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/area-layanan">Area Layanan</Link>
          <Link href="/tentang">Tentang Kami</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <div className="header-cta">
          <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20mendapatkan%20informasi%20mengenai%20layanan%20sedot%20WC%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Chat WA</a>
        </div>
      </div>
    </header>
  );
}
