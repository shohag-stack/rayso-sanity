import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_DATASET_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});