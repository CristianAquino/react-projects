import { gifData } from "../adapters";
import { BASE_API_ROUTE } from "@app/routes";
const { VITE_API_KEY_GIFS } = import.meta.env;

type getGifProps = {
  keyword: string;
  limit: number;
  page: number;
};

async function getGifs({
  keyword = "panda",
  limit = 12,
  page = 0,
}: Partial<getGifProps>) {
  const URL = `${
    BASE_API_ROUTE.GIFS
  }gifs/search?api_key=${VITE_API_KEY_GIFS}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=G&lang=en`;
  const url = await fetch(URL);
  const { data } = await url.json();
  return data.map((gif: any) => gifData(gif));
}

async function getGifById(id: string) {
  const URL = `${BASE_API_ROUTE.GIFS}gifs/${id}?api_key=${VITE_API_KEY_GIFS}`;
  const url = await fetch(URL);
  const { data } = await url.json();
  return gifData(data);
}

export { getGifs, getGifById };
