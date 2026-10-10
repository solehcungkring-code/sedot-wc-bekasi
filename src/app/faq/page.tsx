import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pertanyaan Umum (FAQ) Sedot WC - Asih Jaya',
  description: 'Jawaban untuk pertanyaan umum seputar jasa sedot WC, biaya, proses pemesanan, dan area layanan di Bekasi.',
};

export default function FAQ() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="text-center section-title">Pertanyaan Umum (FAQ)</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Apakah layanan Asih Jaya bisa dipanggil hari ini juga?</h3>
            <p>Ya, kami mengutamakan kecepatan. Anda bisa memanggil kami kapan saja, dan teknisi kami akan meluncur ke lokasi Anda secepat mungkin sesuai kesepakatan waktu.</p>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Berapa lama proses penyedotan WC atau perbaikan saluran?</h3>
            <p>Rata-rata proses pengerjaan memakan waktu 30 hingga 60 menit, tergantung pada tingkat kesulitan dan volume tangki/saluran di lokasi.</p>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Apakah melayani perbaikan tanpa harus bongkar lantai?</h3>
            <p>Betul. Untuk masalah saluran mampet, kami menggunakan mesin bertekanan khusus (spiral/vakum) sehingga dalam sebagian besar kasus, masalah dapat diatasi tanpa perlu membongkar lantai.</p>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Apakah area layanan hanya di Bekasi saja?</h3>
            <p>Fokus utama kami adalah seluruh wilayah Bekasi (Kota & Kabupaten). Namun kami juga bisa melayani area perbatasan seperti sebagian Jakarta Timur dan Bogor dengan konfirmasi terlebih dahulu.</p>
          </div>

          <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '10px', color: 'var(--primary)' }}>Bagaimana cara pembayarannya?</h3>
            <p>Pembayaran dilakukan setelah pekerjaan selesai (bayar di tempat). Anda bisa membayar secara tunai kepada teknisi kami atau melalui transfer bank.</p>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Punya pertanyaan lain yang belum terjawab?</p>
          <a href="https://wa.me/6281389793708?text=Halo%20Asih%20Jaya%2C%20saya%20punya%20pertanyaan%20mengenai%20layanan%20Anda.%20Bisa%20dibantu%3F" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Tanyakan Langsung via WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
