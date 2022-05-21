import bookStore from '../stores/bookStore';
//import MemberInfo from './MemberInfo'
import { Route, Routes, Link } from 'react-router-dom';

function BookItem({ book }){

    return(
        <div className='bookitem-specs'>
            <img className='image-specs' src={book.image} alt={book.title}/>
            <h5>{book.title}</h5>
        </div>
    );
}

export default BookItem;