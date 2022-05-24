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
    } catch (error) {
      console.error(error);
    }
  };

  createBook = async (book) => {
    try {
      const response = await axios.post("https://library-borrow-system.herokuapp.com/api/books", book);
      this.books.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  returnBook = async (bookId, memberId) => {
    console.log("bookId: " + bookId);
    console.log("memberId: " + memberId);
    const book = this.books.find((b) => b._id === bookId);
    book.available = true;

    try {
      await axios.put(`https://library-borrow-system.herokuapp.com/api/books/${bookId}/return/${memberId}`);
    } catch (error) {
      console.error(error);
    }
  };

  bookborrowed = (bookId, memberId) => {
    const book = this.books.find((b) => b._id === bookId);
    book.borrowedBy.push(memberId);
  };
}

const bookStore = new BookStore();
bookStore.fetchBook();

export default bookStore;
