import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import "./i18n";
import Footer from './components/footer'

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  ru: { nativeName: 'Russian' }
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng)
              setCounter(count + 1);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <i>{t('counter', { count })}</i>
      </p>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('description.part2')}
      </a>
      <Footer t={t} />
    </div>
  );
}

export default App;
