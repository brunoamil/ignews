import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';

export function getPrismicCLient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )
  return prismic;
}
