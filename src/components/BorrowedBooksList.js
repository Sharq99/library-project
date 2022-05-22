import { observer } from 'mobx-react';
import booksStore from '../stores/memberStore';
import BorrowedBookItem from './BorrowedBookItem';

function BorrowedBooksList({ borrowedBooks, member }){
    // console.log("borred: "+ borrowedBooks);
    // const books = borrowedBooks.map(bID => booksStore.books.find(book => bID === book._id));
    // const booksList = books.map((book) => <BorrowedBookItem key={book._id} book={book} member={member} />);
    const booksList = borrowedBooks.map((book) => <BorrowedBookItem key={book._id} book={book} member={member}/>);
    
    return(
        <div>
            <div className='mem-list MPage'>{booksList}</div>
        </div>
    );
}

export default observer(BorrowedBooksList);