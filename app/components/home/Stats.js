export default function Stats() {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">437</div>
            <div className="text-gray-600">АЭС в мире</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
            <div className="text-gray-600">Мировой электроэнергии</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">Выбросов CO₂</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
            <div className="text-gray-600">Лет опыта</div>
          </div>
        </div>
      </div>
    );
  }