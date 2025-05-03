export default function Future() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Будущее атомной энергетики</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Реакторы IV поколения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              type: "ВВЭР-ТОИ",
              country: "Россия",
              features: [
                "Мощность 1300 МВт",
                "КПД 39%",
                "60 лет срок службы",
                "Пассивные системы безопасности"
              ],
              status: "В эксплуатации с 2022"
            },
            {
              type: "APR-1400",
              country: "Южная Корея",
              features: [
                "Мощность 1400 МВт",
                "Цифровая система управления",
                "Сейсмоустойчивость 7 баллов",
                "16-месячный топливный цикл"
              ],
              status: "Экспорт в ОАЭ"
            },
            {
              type: "EPR",
              country: "Франция",
              features: [
                "Мощность 1650 МВт",
                "4 системы аварийного охлаждения",
                "Двойная защитная оболочка",
                "КПД 37%"
              ],
              status: "Строится в Финляндии"
            }
          ].map((reactor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{reactor.type}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {reactor.country}
                </span>
              </div>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                {reactor.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">{reactor.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Термоядерные исследования</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">ITER проект</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Строительство во Франции с 2010</li>
                <li>Бюджет €20+ млрд</li>
                <li>Цель: Q ≥ 10 (10x энергии на выходе)</li>
                <li>Плазменный объём 840 м³</li>
                <li>Первая плазма планируется в 2025</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">SPARC (MIT)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Компактный токамак</li>
                <li>Высокотемпературные сверхпроводники</li>
                <li>Цель: Q ≥ 2 к 2025</li>
                <li>Потенциальная мощность 100 МВт</li>
                <li>Коммерциализация к 2030</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Глобальные тренды</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Страны-лидеры</h3>
              <ul className="list-disc pl-6">
                <li>Китай: 24 блока в строительстве</li>
                <li>Россия: 36 действующих реакторов</li>
                <li>Франция: 75% энергии от АЭС</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Новые рынки</h3>
              <ul className="list-disc pl-6">
                <li>Бангладеш (Руппур АЭС)</li>
                <li>Египет (Эль-Дабаа)</li>
                <li>Турция (Аккую)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Технологии-2025</h3>
              <ul className="list-disc pl-6">
                <li>Цифровые двойники реакторов</li>
                <li>ИИ для управления нагрузкой</li>
                <li>3D-печать компонентов</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}