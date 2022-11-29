import { NextApiRequest, NextApiResponse } from "next";
import {} from './popular'
import axios from "axios";
export default async function TendenciesMovies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const language = "&language=pt-BR";
  const url = `${process.env.URLBASE_TENDENCIES}=${process.env.API_KEY}${language}`;
  const GetMovies = await axios.get(url)
  const movies = GetMovies.data
  return res.json({
    message: "ok",
  });
}
