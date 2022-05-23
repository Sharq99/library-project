import { observer } from 'mobx-react';
import bookStore from '../stores/bookStore';
import { useState } from 'react';
import BModalitem from './BModalitem';

function BModalList({ member, handleClose }){
    const [genre, setGenre] = useState("");

    const booksList = bookStore.books
        .filter((book) => book.genres.includes(genre)).map((book) => <BModalitem key={book._id} book={book} member={member} handleClose={handleClose}/>);

    
    return(
        <div>           
            <div className='sb-specs'>
                Genre Type:
                <select 
                    className='genre-specs'
                    aria-label="Default select example"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Action" selected>Action</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Romance">Romance</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Biography">Biography</option>
                    <option value="Business">Business</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Crime">Crime</option>
                    <option value="Mystery">Mystery</option>
                </select>
            </div>
             <div className="booklist-specs">{booksList}</div>
        </div>
    );
}

export default observer(BModalList);