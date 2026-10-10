import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Sedot WC Bekasi Terpercaya - Asih Jaya',
  description: 'Layanan jasa Sedot WC Bekasi, pelancaran WC mampet, dan sedot septic tank. Area prioritas Bekasi dan sekitarnya. Hubungi +62 813-8979-3708 sekarang.',
  keywords: 'Sedot WC Bekasi, WC Mampet Bekasi, Sedot Septic Tank, Saluran Air Tersumbat Bekasi, Jasa Sedot WC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
