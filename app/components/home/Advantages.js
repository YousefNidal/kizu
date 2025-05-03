export default function Advantages() {
    return (
      <section id="advantages" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Преимущества атомной энергетики
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Экологичность',
                content: 'Нулевые выбросы парниковых газов'
              },
              {
                title: 'Эффективность',
                content: '1 кг урана = 100 тонн угля'
              },
              {
                title: 'Надежность',
                content: 'Круглосуточная работа 365 дней в году'
              },
              {
                title: 'Безопасность',
                content: 'Современные системы защиты'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }