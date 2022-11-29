// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
 interface dataMovies {
  page: number;
  results: [{}];
  total_pages: number;
  total_results: number;
  dates: string;
}
export default async function PopularMovies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const language = "&language=pt-BR";
  const url = `${process.env.URLBASE_POPULAR}=${process.env.API_KEY}${language}`;
  const getMovie = await axios.get<dataMovies>(url);
  const movies = getMovie.data;
  return res.status(200).json({
    page: movies.page,
    total_pages: movies.total_pages,
    total_results: movies.total_results,
    results: movies.results,
  });
}
