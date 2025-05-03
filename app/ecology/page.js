export default function Ecology() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Экология и атомная энергетика</h1>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Сравнение выбросов</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Источник</th>
                  <th className="pb-2">CO₂ (г/кВт·ч)</th>
                  <th className="pb-2">Твердые частицы</th>
                  <th className="pb-2">Токсичные отходы</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    source: "АЭС",
                    co2: 12,
                    particles: "Нет",
                    waste: "Радиоактивные отходы"
                  },
                  {
                    source: "Угольные ТЭС",
                    co2: 820,
                    particles: "Высокие",
                    waste: "Зола, SO₂, NOx"
                  },
                  {
                    source: "Солнечные панели",
                    co2: 45,
                    particles: "Низкие",
                    waste: "Тяжёлые металлы"
                  }
                ].map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">{item.source}</td>
                    <td className="py-3 font-semibold">{item.co2}</td>
                    <td className="py-3">{item.particles}</td>
                    <td className="py-3">{item.waste}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Обращение с отходами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Низкоактивные",
                volume: "90%",
                handling: "Цементирование и приповерхностное хранение"
              },
              {
                type: "Среднеактивные",
                volume: "7%",
                handling: "Битумирование и подземные хранилища"
              },
              {
                type: "Высокоактивные",
                volume: "3%",
                handling: "Остекловывание и геологические хранилища"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{item.type} отходы</h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">{item.volume}</p>
                <p className="text-gray-600">{item.handling}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Экологические преимущества</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Сокращение выбросов</h3>
                <ul className="list-disc pl-6">
                  <li>Одна АЭС замещает 3 млн тонн угля в год</li>
                  <li>Предотвращает выброс 10 млн тонн CO₂</li>
                  <li>Снижение кислотных дождей</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Землепользование</h3>
                <ul className="list-disc pl-6">
                  <li>Плотность энергии в 100 раз выше чем у солнечных станций</li>
                  <li>Требует в 400 раз меньше площади чем ветряные электростанции</li>
                  <li>Возможность использовать отработавшие шахты для хранения</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }