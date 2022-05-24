import BookList from './BookList';
import AddBookModal from './AddBookModal';

function BookPage(){
    return(
        <div className="BookPage">
            <div>
                <h1>⚜ Books ⚜</h1>
                <div className="addBook-specs">
                    <AddBookModal />
                </div>
            </div>
            <BookList />
        </div>
        
    );
}

export default BookPage;