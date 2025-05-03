import Card from './components/Card';
import HeroSection from './components/home/HeroSection';
import Stats from './components/home/Stats';
import Advantages from './components/home/Advantages';
import Timeline from './components/Timeline';

export const dynamic = 'force-dynamic'

export default function Home() {
  
  const cardsData = [
    {
      id: 1,
      title: 'Что такое атомная энергия?',
      shortDesc: 'Основы ядерной энергетики',
      fullDesc: 'Атомная энергия - это энергия, выделяемая при делении или синтезе атомных ядер. В атомных электростанциях используется процесс деления ядер урана-235 или плутония-239. При этом выделяется огромное количество тепловой энергии, которая преобразуется в электрическую.',
    },
    {
      id: 2,
      title: 'Принцип работы АЭС',
      shortDesc: 'Как работает атомная станция',
      fullDesc: 'Атомная электростанция работает по следующему принципу: 1) В реакторе происходит управляемая цепная реакция деления ядер урана. 2) Выделяющееся тепло нагревает воду в первом контуре. 3) Нагретая вода передает тепло воде второго контура через теплообменник. 4) Пар из второго контура вращает турбину, соединенную с генератором, который производит электричество.',
    },
    {
      id: 3,
      title: 'Преимущества АЭС',
      shortDesc: 'Плюсы атомной энергетики',
      fullDesc: '1) Высокая энергоэффективность: небольшое количество топлива производит огромное количество энергии. 2) Низкие выбросы CO2: практически не contributes к парниковому эффекту. 3) Независимость от погодных условий в отличие от солнечных и ветряных станций. 4) Стабильность энергоснабжения.',
    },
  ];

  return (
    <>
      <HeroSection />
      <Stats />
      
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Основы атомной энергетики
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              shortDesc={card.shortDesc}
              fullDesc={card.fullDesc}
            />
          ))}
        </div>
      </section>

      <Advantages />
      
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            История атомной энергетики
          </h2>
          <Timeline />
        </div>
      </section>
    </>
  );
}