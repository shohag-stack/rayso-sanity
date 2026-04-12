import ComponentsClient from "@/components/ComponentsClient";
import { client } from "@/sanity/client";


const COMPONENTS_QUERY = `
*[_type == "component"]{
  _id,
  name,
  code,
  "slug": slug.current,
  "preview": preview.asset->url,
  categories
}
`;

export default async function ComponentsPage() {
  const sanityCompo = await client.fetch(COMPONENTS_QUERY);

  return (
    <ComponentsClient initialData={sanityCompo} />
  );
}