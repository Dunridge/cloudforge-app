import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import EmailInput from './components/EmailInput';
import DraftQuotes from './components/DraftQuotes';
import SentQuotes from './components/SentQuotes';

function App() {
  return (
    <Router>
      <div className='app flex bg-gray-100 h-screen'>
        <Sidebar />
        <div className='pt-[40px] pl-[30px]'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/email-input" element={<EmailInput />} />
            <Route path="/draft-quotes" element={<DraftQuotes />} />
            <Route path="/sent-quotes" element={<SentQuotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
