export default function Safety() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Безопасность атомной энергетики</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Многоуровневая защита</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Физические барьеры</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Топливная матрица (керамическая форма топлива)</li>
              <li>Герметичная оболочка тепловыделяющих элементов (циркониевый сплав)</li>
              <li>Стальной корпус реактора толщиной 15-25 см</li>
              <li>Гермооболочка из предварительно напряжённого бетона толщиной 1.2-2.4 м</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Системы безопасности</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Система аварийного охлаждения активной зоны (ECCS)</li>
              <li>Пассивные системы отвода остаточного тепла</li>
              <li>Ловушка расплава (core catcher)</li>
              <li>Двойные защитные оболочки</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Исторические аварии</h2>
        
        <div className="space-y-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Чернобыль (1986)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold">Причины:</p>
                <ul className="list-disc pl-6">
                  <li>Конструктивные недостатки РБМК</li>
                  <li>Нарушение регламента эксплуатации</li>
                  <li>Положительный паровой коэффициент реактивности</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Последствия:</p>
                <ul className="list-disc pl-6">
                  <li>Выброс 5.3 EBq радиоактивных веществ</li>
                  <li>Эвакуация 116 тыс. человек</li>
                  <li>30km зона отчуждения</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Фукусима (2011)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold">Хронология:</p>
                <ul className="list-disc pl-6">
                  <li>Землетрясение магнитудой 9.0</li>
                  <li>Цунами высотой 15 м</li>
                  <li>Потеря электроснабжения</li>
                  <li>Расплавление активной зоны в 3 реакторах</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Уроки:</p>
                <ul className="list-disc pl-6">
                  <li>Усиление защиты от стихийных бедствий</li>
                  <li>Мобильные источники питания</li>
                  <li>Улучшенные системы вентиляции</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Современные стандарты</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">Современные АЭС соответствуют требованиям "пост-фукусимским" стандартам:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Пассивные системы</h4>
              <ul className="list-disc pl-6">
                <li>Гравитационное охлаждение</li>
                <li>Естественная конвекция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Защита от внешних воздействий</h4>
              <ul className="list-disc pl-6">
                <li>Сейсмическая устойчивость до 9 баллов</li>
                <li>Защита от падения самолётов</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Управление</h4>
              <ul className="list-disc pl-6">
                <li>Цифровые системы контроля</li>
                <li>Автоматическое глушение реактора</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}