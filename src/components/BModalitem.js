import membersStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";

function BModalitem({ book, member, handleClose }) {
  const borrowBook = (event) => {
    const platinum = 5 - member.currentlyBorrowedBooks.length;
    const gold = 3 - member.currentlyBorrowedBooks.length;
    const silver = 2 - member.currentlyBorrowedBooks.length;

    if (book.available !== false) {
      if (member.currentlyBorrowedBooks.length >= 5) {alert("You cant Borrow Any More Books");
      } else {
            if (member.membership === "platinum" && platinum <= 5 && platinum !== 0) {
                membersStore.borrowBook(book._id, member._id);
                bookStore.bookborrowed(book._id, member._id);
            } else if (member.membership === "gold" && gold <= 3 && gold !== 0) {
                membersStore.borrowBook(book._id, member._id);
                bookStore.bookborrowed(book._id, member._id);
            } else if (member.membership === "silver" && silver <= 2 && silver !== 0) {
                membersStore.borrowBook(book._id, member._id);
                bookStore.bookborrowed(book._id, member._id);
            } else {alert("You Reached Your Borrowing Limit");}}
    } else {alert("OOOPS!!!!!!! Book Not Available");}
    event.preventDefault();
    handleClose();
    };

    const checkAvailability = () => {
        if(book.available === true) {
            return "Availabile";
        } else {
            return "Not Availabile";
        }
    }
  return (
    <div className="bookitem-specs">
      <img className="image-specs" src={book.image} alt={book.title} />
      <h5 className="font-specs">{book.title}</h5>
      <h6 className="font-specs">{"("+checkAvailability()+")"}</h6>
      <button className="br-btn" onClick={(event) => borrowBook(event)}>Borrow Book</button>
    </div>
  );
}

export default BModalitem;
