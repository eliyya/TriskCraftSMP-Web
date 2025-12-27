//src/app/components/layout.jsx
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


export const metadata = {
  title: 'Triskcraft SMP',
  description: 'SMP dedicado a Minecraft Tecnico, Redstone y Decoracion.',
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='bg-white dark:bg-gray-900 '>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}