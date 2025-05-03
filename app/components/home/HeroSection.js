export default function HeroSection() {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Атомная Энергетика - Чистая Энергия Будущего
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Исследуйте мир безопасной и эффективной ядерной энергии
          </p>
          <div className="flex justify-center gap-4">
            <a href="#advantages" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Узнать больше
            </a>
            <a href="/contact" className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Контакты
            </a>
          </div>
        </div>
      </div>
    );
  }