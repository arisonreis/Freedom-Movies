import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function MoviesList(req:NextApiRequest, res:NextApiResponse){
    const url = `https://api.themoviedb.org/3/list/1894?api_key=${process.env.API_KEY}&language=en-US`
    const a = await axios.get(url)
    const b = await a.data;
    return res.json({
        message:"ok"
    })
}