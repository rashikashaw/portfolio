import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

type Data = {
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const categories = await sanityClient.fetch(query);
}
