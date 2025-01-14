'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import apiClient from "../../../utils/api";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: string;
  image: string;
}

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan do kontrolowania modala
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          const response = await apiClient.get(`/books/${id}/`);
          setBook(response.data);
        } catch (error) {
          console.error('Error fetching book:', error);
        }
      };
      fetchBookDetails();
    }
  }, [id]);  

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    const item = cart.find((item: { book: { id: number } }) => item.book.id === book?.id);

    if (item) {
      item.quantity += 1;
    } else {
      cart.push({ book, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Otwórz modal po dodaniu książki do koszyka
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToCart = () => {
    router.push('/cart');
  };

  if (!book) {
    return <div>Loading book...</div>;
  }

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-6xl secondary-color rounded-lg shadow-lg p-8">
        {/* Sekcja z detalami książki */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Obrazek książki */}
          <div className="flex-shrink-0">
            <img
              src={book.image}
              alt={book.title}
              className="w-full lg:w-96 h-auto object-contain rounded shadow"
            />
          </div>

          {/* Informacje o książce */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
            <p className="text-lg accent-text mb-2">Author: <span className="font-semibold">{book.author}</span></p>
            <p className="accent-text text-base mb-6">{book.description}</p>
            <p className="text-2xl font-bold text-green-700 mb-6">{book.price} PLN</p>
            <button onClick={addToCart} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Add to cart
            </button>
          </div>
        </div>
        {/* Sekcja komentarzy */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="border rounded p-4 bg-gray-50 shadow">
            <p className="text-gray-600 italic">The comment section is under preparation.
            </p>
          </div>
        </div>
        {/* Modal z powiadomieniem o dodaniu książki */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="secondary-color p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-xl font-bold mb-4">The book has been added to the cart</h2>
              <div className="flex gap-4 items-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-20 h-32 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p>{book.price} zł</p>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={goToCart}
                  className="bg-blue-500 accent-text px-6 py-2 rounded hover:bg-blue-600 transition"
                >
                  Go to cart
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 accent-text px-6 py-2 rounded hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPage;
