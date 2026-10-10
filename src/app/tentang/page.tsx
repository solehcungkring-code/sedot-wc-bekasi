import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Kami - Sedot WC Asih Jaya',
  description: 'Profil Asih Jaya, penyedia jasa sedot WC profesional dan pelancaran saluran mampet terpercaya di wilayah Bekasi.',
};

export default function TentangKami() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center section-title">Tentang Asih Jaya</h1>
        
        <div className="area-content">
          <div className="area-text">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Mitra Sanitasi Terpercaya Anda</h2>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              <strong>Asih Jaya</strong> didirikan dengan satu tujuan sederhana: memberikan solusi cepat, bersih, dan profesional untuk masalah sanitasi masyarakat di Bekasi dan sekitarnya.
            </p>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              Mulai dari keluhan WC mampet di rumah, pemeliharaan septic tank berkala, hingga penanganan limbah restoran dan pabrik, kami telah dipercaya oleh ratusan pelanggan berkat komitmen kami terhadap kualitas layanan.
            </p>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              Didukung oleh tenaga teknisi ahli yang berpengalaman serta armada truk tangki yang terawat, kami menjamin setiap masalah saluran Anda dapat teratasi tanpa meninggalkan bau tidak sedap atau keribetan yang tidak perlu.
            </p>
            
            <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
              <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20mendapatkan%20informasi%20mengenai%20layanan%20sedot%20WC%20yang%20tersedia." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Hubungi Kami</a>
              <a href="/layanan" className="btn btn-secondary">Lihat Layanan</a>
            </div>
          </div>
          <div className="area-image">
            <Image src="/images/sedot_wc_Servis_Berkala.jpg" alt="Tim Asih Jaya" width={500} height={400} className="rounded-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
