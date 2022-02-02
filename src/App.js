import './App.scss';
import { Header } from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';
import Sitecontent from './Components/Sitecontent/Sitecontent';

function App() {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Sitecontent />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router >
 
  );
}
 
export default App;
