import Image from 'next/image';
import Link from 'next/link';
import './page.css';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>WC Mampet atau Septic Tank Penuh?</h1>
            <p>Asih Jaya siap membantu menuntaskan masalah sanitasi di wilayah Bekasi dengan cepat, bersih, dan profesional.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20menanyakan%20harga%20jasa%20sedot%20WC%20untuk%20wilayah%20Bekasi." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp hero-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>Chat WhatsApp</span>
              </a>
              <a href="tel:+6281389793708" className="btn btn-primary hero-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4.07c-.55 0-1 .45-1 1 0 9.39 7.63 17.02 17.01 17.02.55 0 1-.45 1-1v-3.54c-.01-.55-.46-1-1.07-1z"/>
                </svg>
                <span>Telepon Sekarang</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/images/hero.png" alt="Armada Sedot WC Bekasi" width={600} height={400} priority className="rounded-img" />
          </div>
        </div>
      </section>

      {/* KEUNGGULAN SECTION */}
      <section className="features bg-surface section">
        <div className="container">
          <h2 className="text-center section-title">Mengapa Memilih Kami?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/1e3a8a/delivery-time.png" alt="Respons Cepat" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h3>Respons Cepat</h3>
              <p>Tim kami siap meluncur ke lokasi Anda secepat mungkin setelah pemesanan dikonfirmasi.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/1e3a8a/worker-male.png" alt="Tenaga Profesional" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h3>Tenaga Profesional</h3>
              <p>Dikerjakan oleh teknisi berpengalaman yang ahli menangani segala jenis masalah saluran dan WC.</p>
            </div>
            <div className="feature-card">
              <img src="https://img.icons8.com/ios/96/1e3a8a/truck.png" alt="Armada Terawat" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h3>Armada Terawat</h3>
              <p>Kami menggunakan armada truk tangki yang bersih dan mesin sedot bertekanan tinggi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN SECTION */}
      <section className="services section">
        <div className="container">
          <h2 className="text-center section-title">Layanan Kami</h2>
          <div className="services-grid">
            <div className="service-card">
              <Image src="/images/sedot-wc-rumah.jpg" alt="Sedot WC Rumah" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Sedot WC / Septic Tank</h3>
                <p>Pengosongan septic tank perumahan yang penuh agar kembali berfungsi normal tanpa bau menyengat.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Sedot%20WC%20%2F%20Septic%20Tank.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
            <div className="service-card">
              <Image src="/images/Sedot_Pipa_Mampet.jpg" alt="Pelancaran Saluran Mampet" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Saluran Mampet</h3>
                <p>Menangani wastafel, got, atau pipa pembuangan yang tersumbat kotoran tanpa bongkar paksa.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Saluran%20Mampet.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
            <div className="service-card">
              <Image src="/images/sedot_wc_Industri_Pabrik.jpg" alt="Sedot Limbah Pabrik" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Limbah Industri & Pabrik</h3>
                <p>Penyedotan limbah cair untuk skala industri, pengosongan limbah sisa produksi dengan aman.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Limbah%20Industri%20%26%20Pabrik.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
            <div className="service-card">
              <Image src="/images/sedot_wc_Servis_Berkala.jpg" alt="Servis Berkala" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Servis & Perawatan Berkala</h3>
                <p>Pemeliharaan sanitasi rutin untuk mencegah mampet mendadak, pengurasan total septic tank.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Servis%20%26%20Perawatan%20Berkala.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
            <div className="service-card">
              <Image src="/images/sedot_wc_gedung_perkantoran.jpg" alt="Sedot WC Gedung" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Sanitasi Gedung & Apartemen</h3>
                <p>Layanan profesional untuk sistem saluran dan sanitasi di perkantoran dan gedung bertingkat.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Sanitasi%20Gedung%20%26%20Apartemen.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
            <div className="service-card">
              <Image src="/images/sedot_wc_hotel_restoran.jpg" alt="Grease Trap Restoran" width={400} height={250} className="service-img" />
              <div className="service-content">
                <h3>Grease Trap Restoran & Hotel</h3>
                <p>Penyedotan lemak dan sisa kotoran dapur untuk menjaga kebersihan saluran area komersial Anda.</p>
                <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20tertarik%20dengan%20layanan%20Grease%20Trap%20Restoran%20%26%20Hotel.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full btn-pesan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <Link href="/layanan" className="btn btn-secondary">Pelajari Semua Layanan Lebih Lanjut</Link>
          </div>
        </div>
      </section>

      {/* CARA KERJA SECTION */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="text-center section-title">Cara Kerja Sederhana</h2>
          <div className="steps-grid">
            <div className="step-item">
              <img src="https://img.icons8.com/ios/96/1e3a8a/phone.png" alt="Hubungi Kami" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h4>Hubungi Kami</h4>
              <p>Chat via WA atau telepon untuk konsultasi keluhan Anda.</p>
            </div>
            <div className="step-item">
              <img src="https://img.icons8.com/ios/96/1e3a8a/marker.png" alt="Tentukan Lokasi" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h4>Tentukan Lokasi</h4>
              <p>Tim akan menuju ke lokasi Anda di area Bekasi dan sekitarnya.</p>
            </div>
            <div className="step-item">
              <img src="https://img.icons8.com/ios/96/1e3a8a/ok.png" alt="Pengerjaan Selesai" style={{ width: '64px', height: '64px', marginBottom: '15px' }} />
              <h4>Pengerjaan Selesai</h4>
              <p>Masalah tuntas, WC/saluran kembali lancar tanpa bau.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI SECTION */}
      <section className="testimonials bg-surface section">
        <div className="container">
          <h2 className="text-center section-title">Apa Kata Pelanggan Kami?</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Sangat puas dengan pelayanan Asih Jaya. WC mampet di rumah langsung lancar dalam hitungan menit. Teknisi ramah dan kerjanya bersih!"</p>
              <h4>- Bapak Budi, Bekasi Barat</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Respons sangat cepat! Malam-malam septic tank penuh, saya hubungi via WA dan paginya tim langsung datang. Harganya juga transparan."</p>
              <h4>- Ibu Siti, Tambun</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Sudah berlangganan untuk perawatan grease trap restoran kami. Selalu tepat waktu dan hasilnya maksimal. Sangat direkomendasikan!"</p>
              <h4>- Bpk. Anton (Pemilik Restoran), Cikarang</h4>
            </div>
          </div>
        </div>
      </section>

      {/* AREA LAYANAN SECTION */}
      <section className="area section">
        <div className="container">
          <div className="area-content">
            <div className="area-text">
              <h2>Area Layanan Prioritas: Bekasi</h2>
              <p>Sebagai penyedia jasa lokal, kami fokus memberikan pelayanan terbaik dan tercepat untuk seluruh wilayah <strong>Bekasi</strong> dan sekitarnya. Baik itu untuk perumahan, perkantoran, restoran, maupun pabrik.</p>
              <ul className="area-list">
                <li>✅ Kota Bekasi</li>
                <li>✅ Bekasi Barat & Timur</li>
                <li>✅ Bekasi Selatan & Utara</li>
                <li>✅ Pondok Gede & Jatiasih</li>
                <li>✅ Tambun & Cibitung</li>
                <li>✅ Cikarang</li>
              </ul>
            </div>
            <div className="area-image">
              <Image src="/images/sedot_wc_gedung_perkantoran.jpg" alt="Sedot WC Area Bekasi" width={500} height={350} className="rounded-img" />
            </div>
          </div>
        </div>
      </section>

      {/* MAPS SECTION */}
      <section className="maps bg-surface section">
        <div className="container">
          <h2 className="text-center section-title">Lokasi Jangkauan Kami</h2>
          <div className="maps-container" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03531478546!2d106.91891964177431!3d-6.28424268153097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sBekasi%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="400" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* CTA PENUTUP */}
      <section className="cta-section bg-primary">
        <div className="container text-center">
          <h2 className="cta-title">Jangan Tunggu Sampai Meluap!</h2>
          <p className="cta-desc">Segera atasi masalah WC atau saluran Anda hari ini juga.</p>
          <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20memesan%20jasa%20sedot%20WC.%20Mohon%20informasi%20harga%20dan%20jadwal%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp cta-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.24-8.16 8.24zm4.49-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
            </svg>
            <span>Chat WhatsApp Sekarang</span>
          </a>
        </div>
      </section>
    </>
  );
}
