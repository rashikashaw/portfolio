import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const query = groq`*[_type == 'product'] {
  _id,
  ...
} | order(_createdAt asc)`;

type Data = {
  products: Products[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const products = await sanityClient.fetch(query);
  res.status(200).json({ products });
};
