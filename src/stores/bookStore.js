import { makeAutoObservable } from "mobx";
import axios from "axios";

class BookStore {
    
    constructor() {
        makeAutoObservable(this);
      }

    books = [];

    fetchBook = async () => {
        try {
            const response = await axios.get("https://library-borrow-system.herokuapp.com/api/books");
            this.books = response.data;
            console.log("Books: "+JSON.stringify(this.books));
        } catch (error) {
            console.error(error);
        }
    }

    generateID = (length) => {
        const characters ='abcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    createBook = async (book) => {
        const s1 = book.title.toLowerCase();
        const s2 = s1.replaceAll(':', '');
        const result = s2.replaceAll(' ', '-');

        book._id = "62853a01d8ec5d3d4a29fa9"+this.generateID(1);
        console.log("id: "+book._id);
        book.slug = result;
        console.log("slug: "+book.slug);

        console.log("Book: "+JSON.stringify(book));

        try{
          const response = await axios.post("https://library-borrow-system.herokuapp.com/api/books", book);
          this.books.push(response.data);
        }catch(error){
          console.error(error);
        }
      };

    returnBook = async (bookId, memberId) => {
        // const book = this.books.find(b => b._id === bookID);
        // book.available = true;
        // const removedbook = book.borrowedBy.filter((bID => bID !== memberID));
        // book.borrowedBy = removedbook;

        try {
            await axios.put(`https://library-borrow-system.herokuapp.com/api/books/${bookId}/return/${memberId}`);
        } catch (error) {
            console.error(error);
        }
    }

}

const bookStore = new BookStore();
bookStore.fetchBook();

export default bookStore;