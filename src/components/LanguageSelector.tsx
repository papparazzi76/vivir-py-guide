import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';

const FLAGS = {
  es: '🇪🇸',
  en: '🇺🇸',
  pt: '🇧🇷',
  de: '🇩🇪',
};

const NAMES = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  de: 'Deutsch',
};

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 pr-8 text-sm font-medium cursor-pointer hover:bg-white/20 transition-colors"
      >
        {(Object.keys(FLAGS) as Language[]).map((lang) => (
          <option key={lang} value={lang}>
            {FLAGS[lang]} {NAMES[lang]}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};
