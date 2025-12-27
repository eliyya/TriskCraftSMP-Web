// components/Footer.js
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaTiktok, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-colorsecundaro text-black dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:space-x-20 space-x-6 mb-4">
            <Link href="/" className="hover:text-gray-300 transition-colors">Inicio</Link>

            <Link href="/Nosotros" className="hover:text-gray-300 mx-4 transition-colors">Nosotros</Link>

            <Link href="/Proyectos" className="hover:text-gray-300 mx-4 transition-colors">Proyectos</Link>

            <Link href="/Miembros" className="hover:text-gray-300 mx-4 transition-colors">Miembros</Link>

        </div>

        <div className="flex justify-center space-x-8 md:space-x-16 mb-4">
          <a
            href="https://www.youtube.com/@Triskcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} className="w-8 h-8 text-zinc-900 hover:text-triskyellow hover:scale-105 transition-colors duration-200" />
            </a>
          <a
            href="https://www.tiktok.com/@triskraftsmp?_t=8jfGgknsH7L&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={32} className="w-8 h-8 text-zinc-900 hover:text-triskyellow hover:scale-105 transition-colors duration-200" />
            </a>
          <a
            href="https://discord.com/invite/VJQJRZehTG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={32} className="w-8 h-8 text-zinc-900 hover:text-triskyellow hover:scale-105 transition-colors duration-200" />
            </a>
          <a
            href="https://x.com/TriskcraftSMP?t=Z_KsCeOccGY27ZJKZZjBhg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaTwitter className="w-8 h-8 text-zinc-900 hover:text-triskyellow hover:scale-105 transition-colors duration-200" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556143652619&sfnsn=scwspwa&mibextid=RUbZ1f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} className="w-8 h-8 text-zinc-900 hover:text-triskyellow hover:scale-105 transition-colors duration-200" />

          </a>
        </div>

        <div className="text-center text-black dark:text-white text-sm">
            <p>&copy; {new Date().getFullYear()} Triskcraft. Todos los derechos reservados.</p>
            <p>
            Sitio diseñado y desarrollado por <a href="https://github.com/TheVugx" target="_blank" rel="noopener noreferrer">Vugx</a>.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;