import { observer } from 'mobx-react';
import bookStore from '../stores/bookStore';
import BorrowedBookItem from './BorrowedBookItem';

function BorrowedBooksList({ borrowedBooks, member }){
    const books = borrowedBooks.map(bID => bookStore.books.find(book => bID === book._id));
    const booksList = books.map((book) => <BorrowedBookItem key={book._id} book={book} member={member} />);
    // const booksList = borrowedBooks.map((book) => <BorrowedBookItem key={book._id} book={book} member={member}/>);
    
    return(
        <div>
            <div className='memInfobook-list MPage'>{booksList}</div>
        </div>
    );
}

export default observer(BorrowedBooksList);