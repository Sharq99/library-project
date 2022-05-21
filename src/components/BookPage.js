import bookStore from '../stores/bookStore';
import BookList from './BookList';
import AddBookModal from './AddBookModal';

function BookPage(){
    return(
        <div>
            <div className="MPage">
                <h1>Books</h1>
                <div className='addBook-specs'>
                    <AddBookModal/>
                </div>
            </div>
            <BookList/>
        </div>
    );
}

export default BookPage;