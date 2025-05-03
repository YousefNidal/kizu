export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">О проекте</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Наша миссия</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Этот проект создан для предоставления полной, научно обоснованной информации об атомной энергетике. 
            Мы стремимся преодолеть распространённые мифы и предрассудки, предоставляя:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Технические характеристики современных реакторов</li>
            <li>Сравнительный анализ безопасности разных типов энергии</li>
            <li>Данные о реальном экологическом воздействии</li>
            <li>Информацию о перспективных разработках</li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Источники данных</h3>
            <ul className="list-disc pl-6">
              <li>МАГАТЭ (IAEA) - Международное агентство по атомной энергии</li>
              <li>Всемирная ядерная ассоциация (WNA)</li>
              <li>Национальные отчеты по безопасности АЭС</li>
              <li>Рецензируемые научные публикации</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Команда проекта</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Махди Юсиф Нидаль",
              role: "Ядерный физик",
              bio: "15 лет опыта в Росатоме, специалист по реакторам на быстрых нейтронах"
            },
            {
              name: "Махди Амир Нидаль",
              role: "Эколог",
              bio: "Эксперт по радиационной безопасности и воздействию на экосистемы"
            },
            
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Методология</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Принципы работы</h3>
              <ul className="list-decimal pl-6 space-y-2">
                <li>Проверка данных через 3 независимых источника</li>
                <li>Консультации с отраслевыми экспертами</li>
                <li>Открытая политика исправления ошибок</li>
                <li>Регулярное обновление информации</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Партнёры</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Национальный исследовательский ядерный университет</li>
                <li>Институт проблем безопасного развития атомной энергетики РАН</li>
                <li>Международное агентство по возобновляемой энергии (IRENA) kuka</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}