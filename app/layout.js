import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Атомная Энергетика',
  description: 'Сайт об атомной энергетике',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2023 Атомная Энергетика. Все права защищены.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}