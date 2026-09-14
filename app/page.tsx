export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Елена · Клининг
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Профессиональная уборка квартир в Москве
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Поддерживающая • Генеральная • После ремонта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">от</p>
                <p className="text-3xl font-bold text-indigo-600">3 000 ₽</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">рейтинг</p>
                <p className="text-3xl font-bold text-yellow-500">⭐ 5.0</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition shadow-lg hover:shadow-xl"
            >
              Заказать уборку
            </a>
            <p className="text-sm text-gray-500 mt-4">
              📍 Профсоюзная • Академическая • Выезд по всей Москве
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Услуги и цены
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Профессиональная уборка с собственными средствами. Возможен выезд в день заказа
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Поддерживающая уборка
              </h3>
              <p className="text-gray-600 mb-4">
                Регулярная поддержка чистоты в квартире
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• 1-комнатная: <span className="font-semibold">~3 000 ₽</span></p>
                <p>• 2-комнатная: <span className="font-semibold">~4 000 ₽</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Генеральная уборка
              </h3>
              <p className="text-gray-600 mb-4">
                Глубокая уборка всех зон квартиры
              </p>
              <div className="text-sm text-gray-700">
                <p>Цена рассчитывается индивидуально</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                После ремонта
              </h3>
              <p className="text-gray-600 mb-4">
                Уборка строительной пыли и загрязнений
              </p>
              <div className="text-sm text-gray-700">
                <p>Цена рассчитывается индивидуально</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              💰 Минимальный заказ: <span className="font-semibold text-gray-900">3 500 ₽</span>
              <br />
              🧴 Все средства для уборки включены в стоимость
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="px-4 py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">Рейтинг 5.0</h3>
              <p className="text-sm text-gray-600">
                Только положительные отзывы от клиентов
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Команда 2–5 человек</h3>
              <p className="text-sm text-gray-600">
                Опытные специалисты с подтвержденной квалификацией
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">🧴</div>
              <h3 className="font-bold text-gray-900 mb-2">Свои средства</h3>
              <p className="text-sm text-gray-600">
                Профессиональная химия и инвентарь включены
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">В день заказа</h3>
              <p className="text-sm text-gray-600">
                Возможен выезд в тот же день при наличии окна
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Как это работает
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Свяжитесь со мной</h3>
                <p className="text-gray-600">
                  Напишите через Авито или форму связи. Опишите тип уборки и площадь квартиры
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Расчет стоимости</h3>
                <p className="text-gray-600">
                  Я рассчитаю точную стоимость и согласую удобное время визита
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Уборка</h3>
                <p className="text-gray-600">
                  Приезжаю со всеми средствами и выполняю работу качественно и в срок
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Наслаждайтесь чистотой</h3>
                <p className="text-gray-600">
                  После уборки остаетесь довольны результатом и при желании заказываете снова
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="px-4 py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Что говорят о работе Елены
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4">
                «Очень довольна качеством работы! Елена убрала квартиру идеально, все блестит. 
                Пришла вовремя, работала быстро и аккуратно.»
              </p>
              <p className="text-sm text-gray-500">— Мария, 2-комнатная</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4">
                «Делала больше, чем обещала! Не только основную уборку, но и дополнительные мелочи. 
                Очень приятно работать с профессионалом.»
              </p>
              <p className="text-sm text-gray-500">— Анна, генеральная уборка</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 mb-4">
                «После ремонта осталось много строительной пыли. Елена справилась отлично, 
                квартира теперь как новая. Рекомендую!»
              </p>
              <p className="text-sm text-gray-500">— Дмитрий, после ремонта</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="px-4 py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы к идеальной чистоте?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Свяжитесь со мной для расчета стоимости и записи на уборку
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Район работы</p>
                  <p className="opacity-90">Профсоюзная, Академическая, выезд по всей Москве</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold">Связь</p>
                  <p className="opacity-90">Напишите в Авито для быстрого ответа</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold">Быстрый выезд</p>
                  <p className="opacity-90">Возможна уборка в день обращения</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.avito.ru/moskva/predlozheniya_uslug/kliner_na_uborku_kvartir_4239905678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg hover:shadow-xl"
          >
            Написать на Авито
          </a>
          
          <p className="text-sm opacity-75 mt-6">
            Или оставьте заявку удобным способом — я отвечу в течение часа
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2024 Елена · Клининг | Профессиональная уборка квартир в Москве
          </p>
          <p className="text-xs mt-2 opacity-75">
            Демонстрационный сайт для представления услуг на Авито
          </p>
        </div>
      </footer>
    </main>
  );
}
