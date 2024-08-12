import { ConfigProvider, theme as antdTheme } from 'antd';
import { Suspense, useState } from 'react';

import RenderRouter from './routes';
import { AppContext } from './hooks/useAppContext';

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">('light');
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
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
  );
};

export default App;
