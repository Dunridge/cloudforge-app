import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import EmailInput from './components/EmailInput';
import DraftQuotes from './components/DraftQuotes';
import SentQuotes from './components/SentQuotes';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from 'react-toastify';
import EmailsList from './components/EmailsList';
import EmailTextInput from './components/EmailTextInput';

function App() {
  return (
    <Router>
      <div className='app flex bg-gray-100 h-screen'>
        <Sidebar />
        <div className='w-full h-screen'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />

            <Route path="/email-input" element={<EmailInput />}>
              <Route path="emails-list" element={<EmailsList />} />
              <Route path="emailtext-input" element={<EmailTextInput />} />
            </Route>

            <Route path="/draft-quotes" element={<DraftQuotes />} />
            <Route path="/sent-quotes" element={<SentQuotes />} />
          </Routes>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </Router>
  );
}

export default App;
