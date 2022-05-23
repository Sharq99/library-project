import { observer } from 'mobx-react';
import booksStore from '../stores/memberStore';
import BorrowedBookItem from './BorrowedBookItem';

function BorrowedBooksList({ borrowedBooks, member }){
    // console.log("Borrowed Books: "+ typeof borrowedBooks);
    // const books = borrowedBooks.filter(bID => booksStore.books.find(book => bID === book._id));
    // console.log("boooks: "+books);
    // const booksList = books.map((book) => <BorrowedBookItem key={book._id} book={book} member={member} />);
    const booksList = borrowedBooks.map((book) => <BorrowedBookItem key={book._id} book={book} member={member}/>);
    
    return(
        <div>
            <div className='memInfobook-list MPage'>{booksList}</div>
        </div>
    );
}

export default observer(BorrowedBooksList);