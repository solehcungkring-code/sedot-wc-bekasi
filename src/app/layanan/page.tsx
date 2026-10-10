import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Layanan Sedot WC & Saluran Mampet - Asih Jaya',
  description: 'Daftar layanan lengkap Sedot WC Bekasi, mulai dari pelancaran WC mampet, sedot septic tank, hingga sedot limbah industri restoran.',
};

export default function Layanan() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center section-title">Layanan Kami</h1>
        
        <div className="services-grid" style={{ marginBottom: '60px' }}>
          <div className="service-card">
            <Image src="/images/sedot-wc-rumah.jpg" alt="Sedot WC Rumah" width={400} height={250} className="service-img" />
            <div className="service-content">
              <h3>Sedot WC / Septic Tank</h3>
              <p>Layanan utama kami untuk mengosongkan septic tank yang penuh di perumahan maupun perkantoran. Dikerjakan cepat, bersih, tanpa bau menyengat.</p>
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Sedot%20WC%20%2F%20Septic%20Tank.%20Mohon%20informasi%20harga%20dan%20jadwal%20layanan." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full btn-pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>

          <div className="service-card">
            <Image src="/images/Sedot_Pipa_Mampet.jpg" alt="Pelancaran Saluran Mampet" width={400} height={250} className="service-img" />
            <div className="service-content">
              <h3>Pelancaran Saluran Mampet</h3>
              <p>Pipa pembuangan air, wastafel, atau got yang tersumbat lemak/kotoran bisa kami lancarkan kembali tanpa harus membongkar pipa secara paksa.</p>
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Pelancaran%20Saluran%20Mampet.%20Mohon%20informasi%20harga%20dan%20jadwal%20layanan." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full btn-pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>

          <div className="service-card">
            <Image src="/images/sedot_wc_Industri_Pabrik.jpg" alt="Sedot Limbah Pabrik & Industri" width={400} height={250} className="service-img" />
            <div className="service-content">
              <h3>Sedot Limbah Industri & Restoran</h3>
              <p>Layanan khusus untuk pengangkutan limbah cair non-B3, pengosongan grease trap restoran, dan limbah sisa produksi pabrik.</p>
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Sedot%20Limbah%20Industri%20%26%20Restoran.%20Mohon%20informasi%20harga%20dan%20jadwal%20layanan." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full btn-pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>

          <div className="service-card">
            <Image src="/images/sedot_wc_gedung_perkantoran.jpg" alt="Perawatan Gedung" width={400} height={250} className="service-img" />
            <div className="service-content">
              <h3>Perawatan Sanitasi Gedung</h3>
              <p>Layanan berkala untuk memastikan sistem sanitasi dan pembuangan pada apartemen, hotel, atau gedung perkantoran selalu dalam kondisi optimal.</p>
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Perawatan%20Sanitasi%20Gedung.%20Mohon%20informasi%20harga%20dan%20jadwal%20layanan." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-full btn-pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>
        </div>

        <div className="cta-section bg-primary rounded-img text-center" style={{ padding: '40px 20px' }}>
          <h2>Butuh Layanan Cepat?</h2>
          <p style={{ marginBottom: '20px' }}>Hubungi teknisi kami untuk mendapatkan estimasi biaya dan waktu pengerjaan.</p>
          <a href="tel:+6281389793708" className="btn btn-secondary">Hubungi: +62 813-8979-3708</a>
        </div>
      </div>
    </div>
  );
}
