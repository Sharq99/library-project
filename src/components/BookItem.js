import { Link } from 'react-router-dom';

function BookItem({ book }){
    const bDetails = () => {
        <Link to={`/book-details/${book.slug}`}></Link>
    }

    return(
        <div className='bookitem-specs'>
            <Link to={`/book-details/${book.slug}`}>
                <img className='image-specs' src={book.image} alt={book.title}/>
                <h5 className='font-specs'>{book.title}</h5>
                {/* <button onClick={() => bDetails()}>Details</button> */}
            </Link>
        </div>
    );
}

export default BookItem;