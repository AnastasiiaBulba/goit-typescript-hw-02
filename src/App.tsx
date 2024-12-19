import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import fetchImages from "./services/api";
import { ImageType } from "./types/common.types";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!searchQuery) return;
    const loadImage = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalImages(data.total);
      } catch (error) {
        setError("Error fetching images.");
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    loadImage();
  }, [searchQuery, page]);

  const openModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length < totalImages && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        imageUrl={selectedImage?.urls?.regular}
        alt={selectedImage?.alt_description}
      />
    </div>
  );
};

export default App;
