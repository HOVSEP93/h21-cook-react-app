import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import ThemeSelector from './components/theme-selector/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import Pages from './pages/Pages';

function App() {
  const { mode } = useTheme();
  return (
    <Fragment>
      <div className={`App ${mode}`}>
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
          <Pages />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
