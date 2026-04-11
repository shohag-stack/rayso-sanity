import {client} from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import TemplatesClients from "@/components/TemplatesClient";

const POSTS_QUERY = `*[
  _type == "template"
  && defined(slug.current)
]|{
  _id,
  name,
  featuredImage{
  asset->{
    _id,
    url
  }
},
  desc,
  price,
  tags,
  stack,
  badge,
  slug
} `;
const options = { next: { revalidate: 30 } };

export default async function TemplatesPage() {

  const templates = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);


  console.log("Fetched templates:", templates);


  return (
    <>
      <TemplatesClients templates={templates} />
    </>
  );
}
