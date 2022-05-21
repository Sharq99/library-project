import membersStore from '../stores/memberStore';
import { Link, Routes, Route } from 'react-router-dom';
import BorrowedBooksList from './BorrowedBooksList';
import { useParams } from 'react-router-dom';

function MemberInfo(){
    // if you have member id {use this}
    const memberSlug = useParams().memberSlug;
    const member = membersStore.members.find(mb => mb.slug === memberSlug);
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);
    const borrowedBooks = member.currentlyBorrowedBooks;
    

    const borrowBook = () => {
        alert("Book Borrowed");
    }

    return(
        <div>
            <h1>Hello, I am Member Info</h1>
            <h1>{result}</h1>
            <h1>{member.membership}</h1>
            <h3>Borrowed Book</h3>
            <BorrowedBooksList key={borrowedBooks} borrowedBooks={borrowedBooks}/>
            <button onClick={() => borrowBook()}>Borrow Book</button>
        </div>
    );
}

export default MemberInfo;