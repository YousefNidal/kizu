'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreement: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Контакты</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Форма обратной связи</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Сообщение</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
                onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
              />
              <label className="ml-2 text-sm text-gray-600">
                Согласен с политикой обработки персональных данных
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Отправить сообщение
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Контактная информация</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">
                119017 Москва,<br/>
                ул. Большая Ордынка, 24<br/>
                Бизнес-центр "Ордынский Плаза"
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">
                +7 (495) 123-45-67<br/>
                (пн-пт 9:00-18:00)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Экстренные контакты</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Пресс-служба: press@atom-energy.ru</li>
                <li>Техподдержка: support@atom-energy.ru</li>
                <li>Чрезвычайные ситуации: emergency@atom-energy.ru</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Telegram</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">YouTube</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">VK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}