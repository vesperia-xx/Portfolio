import { NextResponse } from 'next/server';

const LOCALE_COOKIE = 'NEXT_LOCALE';

// Devuelve el idioma preferido a partir de la cookie manual o de
// Accept-Language. Se compara por idioma base para aceptar `es-CL`, `es-419`,
// `es-ES`, etc., que el detector nativo de Next no reconoce.
function preferredLocale(request) {
  const stored = request.cookies.get(LOCALE_COOKIE)?.value?.toLowerCase();

  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  const header = request.headers.get('accept-language') || '';

  const tags = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const quality = params.find((param) => param.trim().startsWith('q='));

      return {
        tag: tag.trim().toLowerCase(),
        q: quality ? Number.parseFloat(quality.split('=')[1]) : 1,
      };
    })
    .filter(({ tag, q }) => tag && Number.isFinite(q) && q > 0)
    .sort((a, b) => b.q - a.q);

  const prefersSpanish = tags.some(({ tag }) => tag === 'es' || tag.startsWith('es-'));

  return prefersSpanish ? 'es' : 'en';
}

export function proxy(request) {
  const { locale, pathname } = request.nextUrl;

  // Con i18n activo, `/es` puede llegar al proxy normalizado como `/`.
  // El locale evita redirigir en bucle.
  if (locale !== 'en' || pathname !== '/' || preferredLocale(request) !== 'es') {
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = '/es';

  return NextResponse.redirect(url);
}

export const config = {
  matcher: '/',
};
