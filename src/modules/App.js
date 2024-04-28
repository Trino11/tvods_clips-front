import './App.css';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

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
    <Router>
      <div className='App'>
        <main>
          <p className='p-2'>v.{window.tvodsconfig.VERSION} - {window.tvodsconfig.NATIVE_APP ? 'app nativa' : 'navegador'}</p>
        </main>
      </div>
    </Router>
  );
}

export default App;
