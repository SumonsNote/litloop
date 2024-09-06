import { getAllBooks } from "@/db/queries";
import BookList from "../ui/books/BookList";
const BookListPage = async () => {
  const books = await getAllBooks();

  return <BookList books={books} />;
};

export default BookListPage;
