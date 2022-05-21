import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MemberPage from './components/MemberPage';
import BookPage from './components/BookPage';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import MemberInfo from './components/MemberInfo';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member-page" element={<MemberPage />} />
          <Route path="/book-page" element={<BookPage/>} />
          <Route path="/member-info/:memberSlug" element={<MemberInfo />} />
      </Routes>
    </div>
  );
}

export default App;
