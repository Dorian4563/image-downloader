import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchImages } from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

export default function App() {
const [query, setQuery] = useState("book,nature,animals,people");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  <h2 style={{ marginBottom: "20px" }}>
  Showing: {query || "Trending"}
</h2>

  const {
  data,
  fetchNextPage,
  hasNextPage,
  isLoading,
  isError,
} = useInfiniteQuery({
  queryKey: ["images", query],

  queryFn: ({ pageParam }) => searchImages(query, pageParam),

  initialPageParam: 1,

getNextPageParam: (lastPage, pages) => {
  if (lastPage.total_pages === pages.length) return undefined;
  return pages.length + 1;
},

  enabled: true
});

const images = data?.pages.flatMap((page) =>
  query ? page.results : page
) || [];

  return (
    <div className="container">
      <SearchBar onSearch={setQuery} />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching images</p>}

      <ImageGrid images={images} onSelect={setSelectedImage} />

      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          Load More
        </button>
      )}

      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}