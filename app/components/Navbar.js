import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Главная', href: '/' },
    { name: 'О проекте', href: '/about' },
    { name: 'Технологии', href: '/technology' },
    { name: 'Безопасность', href: '/safety' },
    { name: 'Экология', href: '/ecology' },
    { name: 'История', href: '/history' },
    { name: 'Будущее', href: '/future' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Атомная Энергетика
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                  hover:border-blue-500 hover:text-white transition-colors
                  border-transparent text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}