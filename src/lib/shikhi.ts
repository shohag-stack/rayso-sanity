import { getHighlighter } from "shiki";

let highlighter: any;

export async function highlight(code: string, lang: string = "tsx") {
  if (!highlighter) {
    highlighter = await getHighlighter({
      theme: "vitesse-dark",
    });
  }

  return highlighter.codeToHtml(code, {
    lang,
  });
}