"use server";

import { highlight } from "@/lib/shikhi";

export async function highlightCode(code: string): Promise<string> {
  return highlight(code, "tsx");
}