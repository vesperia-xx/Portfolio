import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const listeners = new Set();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// El script inline de _document ya aplicó la clase antes del primer paint,
// así que leer el DOM es la fuente de verdad y evitamos parpadeos.
function getSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot() {
  return false;
}

function applyTheme(theme, { persist = true } = {}) {
  const isDark = theme === 'dark';
  const root = document.documentElement;

  root.classList.toggle('dark', isDark);
  root.style.colorScheme = theme;

  if (persist) {
    try {
      window.localStorage.setItem('theme', theme);
    } catch (error) {
      // Almacenamiento no disponible (modo privado): seguimos sin persistir.
    }
  }

  notify();
}

export function ThemeProvider({ children }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Solo seguimos al sistema mientras el usuario no haya elegido un tema.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      if (window.localStorage.getItem('theme')) return;
      applyTheme(event.matches ? 'dark' : 'light', { persist: false });
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(isDark ? 'light' : 'dark');
  }, [isDark]);

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
