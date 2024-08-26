import { ConfigProvider, theme as antdTheme } from 'antd';
import { Suspense, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import RenderRouter from './routes';
import { AppContext } from './hooks/useAppContext';
import { queryClient } from './queries/query-client';

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">('light');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
 <AppContext.Provider value={{
      theme,
      setTheme,
      collapsed,
      setCollapsed
    }}>
      <ConfigProvider
        componentSize="middle"
        theme={{
          token: { colorPrimary: '#13c2c2' },
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
      >
        <Suspense fallback={null}>
          <RenderRouter />
        </Suspense>
      </ConfigProvider>
    </AppContext.Provider>
    </QueryClientProvider>
   
  );
};

export default App;
