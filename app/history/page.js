export default function History() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">История атомной энергетики</h1>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Хронология развития</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Год</th>
                  <th className="pb-2">Событие</th>
                  <th className="pb-2">Значение</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    year: "1938",
                    event: "Открытие деления урана",
                    details: "Отто Ган и Фриц Штрассманн обнаруживают ядерное деление"
                  },
                  {
                    year: "1942",
                    event: "Чикагская поленница-1",
                    details: "Первый искусственный ядерный реактор под руководством Энрико Ферми"
                  },
                  {
                    year: "1954",
                    event: "Обнинская АЭС",
                    details: "Первая в мире промышленная АЭС мощностью 5 МВт"
                  },
                  {
                    year: "1956",
                    event: "Колдер-Холл",
                    details: "Первая британская АЭС (50 МВт)"
                  },
                  {
                    year: "1979",
                    event: "Три-Майл Айленд",
                    details: "Частичное расплавление активной зоны в США"
                  }
                ].map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-semibold">{item.year}</td>
                    <td className="py-3">{item.event}</td>
                    <td className="py-3 text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
  
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Советские достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Атомный ледокол "Ленин"</h3>
              <ul className="list-disc pl-6">
                <li>Первый в мире атомный надводный корабль (1959)</li>
                <li>2 реактора ОК-150 мощностью 90 МВт</li>
                <li>Обеспечил навигацию по Севморпути</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">БН-350</h3>
              <ul className="list-disc pl-6">
                <li>Первый промышленный реактор на быстрых нейтронах (1973)</li>
                <li>Мощность 150 МВт (эл.) + 1000 МВт (тепл.)</li>
                <li>Опреснение воды для Казахстана</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Современная Россия</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Росатом сегодня</h3>
                <ul className="list-disc pl-6">
                  <li>36 энергоблоков в эксплуатации</li>
                  <li>Доля в мировой ядерной энергетике - 20%</li>
                  <li>Проекты в 12 странах</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Строящиеся проекты</h3>
                <ul className="list-disc pl-6">
                  <li>АЭС "Аккую" (Турция) - 4 блока ВВЭР-1200</li>
                  <li>Белорусская АЭС - 2 блока ВВЭР-1200</li>
                  <li>Плавучая АЭС "Академик Ломоносов"</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }