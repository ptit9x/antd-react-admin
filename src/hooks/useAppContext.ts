import { createContext, useContext } from 'react';

export interface AppContextProps {
  theme: 'light' | 'dark';
  collapsed: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setCollapsed: (collapsed: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  theme: 'light',
  collapsed: false,
  setTheme: () => {},
  setCollapsed: () => {},
});
AppContext.displayName = 'ApplicationContext';

export const useAppContext = () => useContext(AppContext);
