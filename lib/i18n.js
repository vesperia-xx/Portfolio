import { useRouter } from 'next/router';
import en from '@/content/en';
import es from '@/content/es';

export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'es'];

// El CV sigue el idioma de la página: los reclutadores internacionales ven la
// versión inglesa y los hispanohablantes, la española.
const CV_FILES = {
  en: '/cv-ricardo-aguilera-en.pdf',
  es: '/cv-ricardo-aguilera.pdf',
};

const dictionaries = { en, es };

// El locale vive en la URL, así que el router es la única fuente de verdad:
// no hace falta contexto ni estado local, y no hay riesgo de desajustes.
export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || DEFAULT_LOCALE;

  return {
    locale,
    cvHref: CV_FILES[locale] || CV_FILES[DEFAULT_LOCALE],
    t: dictionaries[locale] || dictionaries[DEFAULT_LOCALE],
  };
}
