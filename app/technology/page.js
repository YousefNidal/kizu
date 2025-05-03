export default function Technology() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Технологии ядерных реакторов</h1>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Типы реакторов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "PWR (ВВЭР)",
                power: "1000-1600 МВт",
                features: ["Вода под давлением", "Обогащение урана 3-5%", "КПД 33-35%"],
                countries: ["США", "Франция", "Китай"]
              },
              {
                type: "BWR",
                power: "800-1400 МВт",
                features: ["Кипящая вода", "Прямой цикл", "КПД 32-34%"],
                countries: ["Япония", "Швеция", "Германия"]
              },
              {
                type: "РБМК",
                power: "1000-1500 МВт",
                features: ["Графитовый замедлитель", "Канальный тип", "Возможность перегрузки на ходу"],
                countries: ["Россия", "Литва (закрыт)"]
              }
            ].map((reactor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{reactor.type}</h3>
                <p className="font-semibold mb-2">Мощность: {reactor.power}</p>
                <div className="mb-4">
                  <p className="font-semibold">Особенности:</p>
                  <ul className="list-disc pl-6">
                    {reactor.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-semibold">Эксплуатируется в:</p>
                <p>{reactor.countries.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Топливный цикл</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Передняя часть цикла</h3>
                <ul className="list-decimal pl-6 space-y-2">
                  <li>Добыча урана (U3O8)</li>
                  <li>Конверсия в UF6</li>
                  <li>Обогащение (центрифугирование)</li>
                  <li>Изготовление ТВЭЛов</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Задняя часть цикла</h3>
                <ul className="list-decimal pl-6 space-y-2">
                  <li>Выдержка в бассейне 3-5 лет</li>
                  <li>Переработка (PUREX процесс)</li>
                  <li>Изоляция отходов (остекловывание)</li>
                  <li>Хранение в геологических формациях</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Инновационные разработки</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Реакторы на быстрых нейтронах (БН)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Использование плутония-239</li>
                <li>Жидкометаллическое охлаждение (натрий, свинец)</li>
                <li>Замкнутый топливный цикл</li>
                <li>Россия: БН-800 (Белоярская АЭС), БН-1200 (в разработке)</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Малые модульные реакторы (SMR)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold">Преимущества:</p>
                  <ul className="list-disc pl-6">
                    <li>Мощность 50-300 МВт</li>
                    <li>Заводское изготовление</li>
                    <li>Подземное размещение</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Проекты:</p>
                  <ul className="list-disc pl-6">
                    <li>NuScale (США)</li>
                    <li>РИТМ-200 (Россия)</li>
                    <li>CAREM (Аргентина)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }