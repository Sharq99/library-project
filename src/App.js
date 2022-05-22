import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MemberPage from './components/MemberPage';
import BookPage from './components/BookPage';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import MemberInfo from './components/MemberInfo';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member-page" element={<MemberPage />} />
          <Route path="/book-page" element={<BookPage/>} />
          <Route path="/member-info/:memberSlug" element={<MemberInfo />} />
          <Route path="/book-details/:bookSlug" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
