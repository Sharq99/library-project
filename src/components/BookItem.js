import { Link } from 'react-router-dom';

function BookItem({ book }){
    return(
        <div className='bookitem-specs'>
            <Link to={`/book-details/${book.slug}`} className='bItem-specs'>
                <img className='image-specs' src={book.image} alt={book.title}/>
                <h5>{book.title}</h5>
            </Link>
        </div>
    );
}

export default BookItem;