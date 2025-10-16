import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../state/store";
import { useEffect, useState } from "react";
import type { Book } from "../types/openLibrary";
import { editBook } from "../state/books/BookSlice";

export default function EditBookForm() {
  //Extract the id from the query params
  const { id } = useParams<{ id: string }>();

  //We have to find the book the user clicked throught the id, but for that we need to know the books.
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();
  //Now we can find the book
  const book = books.find((b) => b.lending_edition_s === id);

  //create states at level component
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author_name);
      setYear(
        book.first_publish_year ? book.first_publish_year.toString() : ""
      );
    }
  }, [book]);

  if (!book) {
    return (
      <>
        <h1>Book not found</h1>
        <button onClick={() => navigate("/books")}>Go Back</button>
      </>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBook: Book = {
        key: book.key,
        title: title,
        author_name: author,
        first_publish_year: year ? parseInt(year) : undefined,
        lending_edition_s: book.lending_edition_s
    }

    dispatch(editBook(updatedBook))
    navigate('/books')

    
  };

  return (
    <>
      <h1>Edit Book Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 mt-10">
          <input
            className="border-none bg-gray-50 p-4"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-5 justify-center">
          <button type="submit" className="mt-5">
            Save Changes
          </button>
          <button type="button" onClick={() => navigate('/books')} className="mt-5">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
