import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function LatestMovies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const language = "&language=pt-BR";
  const url = `${process.env.URLBASE_LATEST}=${process.env.API_KEY}${language}`;
  const getMovies = await axios.get(url);
  const movies = getMovies.data;
  return res.status(200).json({
    movies,
  });
}
