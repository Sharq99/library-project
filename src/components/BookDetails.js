import bookStore from '../stores/bookStore';
//import BorrowedBooksList from './BorrowedBooksList';
import { useParams } from 'react-router-dom';
import membersStore from '../stores/memberStore';
import MemberList from './MemberList';

function BookDetails(){
    const bookSlug = useParams().bookSlug;
    const book = bookStore.books.find(B => B.slug === bookSlug);
    const bookGenres = book.genres;
    const bookBorrowedBy = book.borrowedBy; 
    const members = bookBorrowedBy.map(bID => membersStore.members.find(mem => bID === mem._id));

    const checkAvailability = () => {
        if(book.available === true) {
            return "Availabile";
        } else {
            return "Not Availabile";
        }
    }

    return(
        <div className='bookDetail'>
            <img className="image-specs" src={book.image} alt={"Book: "+book.title}></img>
            <h3>{book.title}</h3>
            <h3>{book.author}</h3>
            <h3>{"Book Gener/s: " + bookGenres}</h3>
            <h3>{"Book Availability: " + checkAvailability()}</h3>
            <h3 className='CBB-list'>{"Currently Borrowed By: "}</h3>
            <MemberList key ={members._id} members={members}/>
        </div>
    );
}

export default BookDetails;