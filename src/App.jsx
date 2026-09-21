import { useState } from 'react'
import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const siteTitle = 'Мой React-сайт'
  const userName = 'Студент'

  // Мини-задания 1 и 2: переключатель варианта сетки (по умолчанию — базовый макет из методички)
  const [variant, setVariant] = useState('default')

  return (
    <Layout siteTitle={siteTitle} variant={variant}>
      <Header title={siteTitle} userName={userName} />
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
      <MainContent>
        <h1>Добро пожаловать!</h1>
        <p>Это пример макета на CSS Grid с React-компонентами (JS версия).</p>
        <ul>
          <li>Grid-области задаются через <code>grid-template-areas</code>.</li>
          <li>Контент передаётся через <code>children</code> (аналог слотов).</li>
          <li>Данные передаются через <code>props</code>.</li>
        </ul>

        {/* Мини-задание 3: другой контент в MainContent */}
        <h2>Дополнительный блок</h2>
        <p>
          Этот абзац и следующий список — демонстрация того, что MainContent
          не знает заранее, что ему передадут: он просто рендерит {'{children}'}.
        </p>
        <ul>
          <li>Пункт первый</li>
          <li>Пункт второй</li>
          <li>Пункт третий</li>
        </ul>

        {/* Переключатель мини-заданий 1 и 2 */}
        <div className="variant-switcher">
          <p>Мини-задания (переключение вариантов сетки):</p>
          <button onClick={() => setVariant('default')} disabled={variant === 'default'}>
            Стандартный макет
          </button>
          <button onClick={() => setVariant('swapped')} disabled={variant === 'swapped'}>
            Сайдбар и контент местами
          </button>
          <button onClick={() => setVariant('gutter')} disabled={variant === 'gutter'}>
            С пустой колонкой
          </button>
        </div>
      </MainContent>
      <Footer year={new Date().getFullYear()} />
    </Layout>
  )
}

export default App
