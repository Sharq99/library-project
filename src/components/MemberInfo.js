import membersStore from '../stores/memberStore';
import BorrowedBooksList from './BorrowedBooksList';
import { useParams } from 'react-router-dom';
import BorrowBookModal from './BorrowBookModal';
import { observer } from 'mobx-react';

function MemberInfo(){
    const memberSlug = useParams().memberSlug;
    const member = membersStore.members.find(mb => mb.slug === memberSlug);
    let m1 = member.firstName;
    let m2 = member.lastName;
    let result = m1.concat(" ",m2);
    const borrowedBooks = member.currentlyBorrowedBooks;
    
    return(
        <div className='memINFO'>
            <h1>{result}</h1>
            <h1>{member.membership.toUpperCase()}</h1>
            <h3>Borrowed Book</h3>
            <BorrowedBooksList borrowedBooks={borrowedBooks} member={member}/>
            <BorrowBookModal key={borrowedBooks} borrowedBooks={borrowedBooks} member={member} />    
        </div>
    );
}

export default MemberInfo;