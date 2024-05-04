import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { HashRouter, BrowserRouter } from 'react-router-dom';

import Main from './Main/Main.tsx';


const isNative = () => {
  // const urlParams = new URLSearchParams(window.location.search);
  // return urlParams.get('app');
  return navigator.userAgent.includes('Electron');
}

window.tvodsconfig = {
  MANIFEST_URL: 'https://cdn.trinohost.com/webdavshare/tmods/manifest.json',
  VERSION: '0.0.6',
  NATIVE_APP: isNative(),
};

document.title += (" | " + (window.tvodsconfig.NATIVE_APP ? 'app nativa' : 'navegador'));

function App() {
  return (
    <div className='App'>
      {
        (window.tvodsconfig.NATIVE_APP)
          ?
          <HashRouter>
            <Main />
          </HashRouter>
          :
          <BrowserRouter>
            <Main />
          </BrowserRouter>
      }

      <p className='fixed right-1 bottom-0'>v.{window.tvodsconfig.VERSION} - {window.tvodsconfig.NATIVE_APP ? 'app nativa' : 'navegador'} - {window.tvodsconfig.DEV ? 'desarrollo' : 'production'}</p>
    </div>
  );
}

export default App;
