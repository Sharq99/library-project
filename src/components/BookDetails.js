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
        <div >
            <img className="image-specs" src={book.image} alt={"Book: "+book.title}></img>
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
            <h1>{"Book Gener/s: " + bookGenres}</h1>
            <h1>{"Book Availability: " + checkAvailability()}</h1>
            <h1>{"Currently Borrowed By: "}</h1>
            <MemberList key ={members._id} members={members}/>
        </div>
    );
}

export default BookDetails;