export default function Timeline() {
    const events = [
      {
        year: '1954',
        title: 'Первая АЭС',
        description: 'Обнинская АЭС в СССР - первая в мире атомная электростанция'
      },
      {
        year: '1956',
        title: 'Колдер-Холл',
        description: 'Первая промышленная АЭС в Великобритании'
      },
      {
        year: '1979',
        title: 'Три-Майл Айленд',
        description: 'Первая серьезная авария на АЭС'
      },
      {
        year: '1986',
        title: 'Чернобыль',
        description: 'Крупнейшая авария в истории атомной энергетики'
      },
      {
        year: '2011',
        title: 'Фукусима',
        description: 'Авария вызванная цунами'
      },
      {
        year: '2023',
        title: 'Инновации',
        description: 'Разработка реакторов IV поколения'
      }
    ];
  
    return (
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 w-1 bg-gray-200 h-full"></div>
        {events.map((event, index) => (
          <div key={index} className="md:flex mb-8">
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="text-blue-600 font-bold text-lg">{event.year}</div>
                <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }