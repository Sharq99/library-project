import { observer } from 'mobx-react';
import booksStore from '../stores/memberStore';
import BorrowedBookItem from './BorrowedBookItem';

function BorrowedBooksList({ borrowedBooks }){
    const booksList = borrowedBooks.map((book) => <BorrowedBookItem key={book._id} book={book} />);
    
    return(
        <div>
            <div className='mem-list MPage'>{booksList}</div>
        </div>
    );
}

export default observer(BorrowedBooksList);