import { observer } from 'mobx-react';
import bookStore from '../stores/bookStore';
import BookItem from './BookItem';
import { useState } from 'react';

function BookList(){
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");

    const booksList = bookStore.books
        .filter(
            (book) => book.title.toLowerCase().includes(query.toLowerCase()) && book.genres.includes(genre)
        )
        .map((book) => <BookItem key={book._id} book={book} />);
    
    return(
        <div>
            <div className='sb-specs'>
                <input className='search-bar'
                  type="search"
                  placeholder="Search Book"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => setQuery(e.target.value)}
                />
            </div>
           
            <div className='sb-specs'>
                Genre Type:
                <select 
                    className='genre-specs'
                    aria-label="Default select example"
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="" selected>All</option>
                    <option value="Action">Action</option>
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

             <div className="booklist-specs">{booksList}</div> {/* className='mem-list MPage' */}
        </div>
    );
}

export default observer(BookList);