import membersStore from '../stores/memberStore';
import bookStore from '../stores/bookStore';
import { Route, Routes, Link } from 'react-router-dom';

function BorrowedBookItem({ book, member }){

    const returnBook = () => {
        bookStore.returnBook(book._id, member._id);
        alert("Book Returned");
    }

    return(
        <div className='bookitem-specs'>
            <img className='image-specs' src={book.image} alt={book.title}/>
            <h5 className='font-specs'>{book.title}</h5>
            <button className='rtn-btn' onClick={() => returnBook()}>Return Book</button>
        </div>
    );
}

export default BorrowedBookItem;