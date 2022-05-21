import membersStore from '../stores/memberStore';
import { Route, Routes, Link } from 'react-router-dom';

function BorrowedBookItem({ book }){

    const returnBook = () => {
        alert("Book Returned");
    }
    
    return(
        <div>
            <h1>{book}</h1>
            <button onClick={() => returnBook()}>Return Book</button>
        </div>
    );
}

export default BorrowedBookItem;