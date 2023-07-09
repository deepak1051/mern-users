import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import Footer from './components/Footer';
import SingleUser from './components/SingleUser';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SingleUser />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<UpdateUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
