import {client} from "@/sanity/client";
import TemplatesClients from "@/components/TemplatesClient";
import Template from "@/typed/Template";

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
  status,
  badge,
  categories,
  slug
} `;
const options = { next: { revalidate: 30 } };

export default async function TemplatesPage() {

  const templates = await client.fetch<Template[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <TemplatesClients templates={templates} />
    </>
  );
}
