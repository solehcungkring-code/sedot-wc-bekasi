import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Area Layanan Sedot WC Bekasi & Sekitarnya - Asih Jaya',
  description: 'Asih Jaya melayani jasa sedot WC dan pelancaran saluran mampet di seluruh wilayah Bekasi, Cibitung, Tambun, dan Cikarang.',
};

export default function AreaLayanan() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center section-title">Area Layanan Prioritas</h1>
        
        <div className="area-content" style={{ marginBottom: '40px' }}>
          <div className="area-image">
            <Image src="/images/sedot_wc_hotel_restoran.jpg" alt="Armada Beroperasi di Bekasi" width={600} height={400} className="rounded-img" />
          </div>
          <div className="area-text">
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              Sebagai penyedia jasa lokal, Asih Jaya berfokus memberikan pelayanan terbaik dan waktu respons tercepat untuk seluruh wilayah <strong>Bekasi dan sekitarnya</strong>. 
              Armada kami tersebar di beberapa titik untuk memastikan teknisi dapat segera meluncur ke lokasi Anda.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              <ul className="area-list" style={{ display: 'flex', flexDirection: 'column' }}>
                <li>✅ Kota Bekasi</li>
                <li>✅ Bekasi Barat</li>
                <li>✅ Bekasi Timur</li>
                <li>✅ Bekasi Selatan</li>
                <li>✅ Bekasi Utara</li>
                <li>✅ Jatiasih</li>
              </ul>
              <ul className="area-list" style={{ display: 'flex', flexDirection: 'column' }}>
                <li>✅ Pondok Gede</li>
                <li>✅ Rawalumbu</li>
                <li>✅ Mustika Jaya</li>
                <li>✅ Tambun (Selatan & Utara)</li>
                <li>✅ Cibitung</li>
                <li>✅ Cikarang</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '40px', padding: '40px', backgroundColor: 'var(--surface)', borderRadius: '12px' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Lokasi Anda Tidak Tercantum?</h2>
          <p style={{ marginBottom: '20px' }}>Jangan khawatir, silakan hubungi kami untuk memastikan ketersediaan layanan di wilayah Anda.</p>
          <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20ingin%20menanyakan%20ketersediaan%20layanan%20jasa%20sedot%20WC%20untuk%20wilayah%20saya." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Tanya Admin via WA</a>
        </div>
      </div>
    </div>
  );
}
