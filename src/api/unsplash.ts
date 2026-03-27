const ACCESS_KEY = "4PTdf9icHoK6Fbmh-5dI0yIhf4-meKG5amwU5ZnFMDk";

export const searchImages = async (query: string, page: number) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch images");

  return res.json();
};