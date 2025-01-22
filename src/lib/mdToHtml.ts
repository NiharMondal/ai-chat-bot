import { Remarkable } from "remarkable";

const md = new Remarkable();

export function renderMarkdownToHTML(markdown: string) {
	// This is ONLY safe because the output HTML
	// is shown to the same user, and because you
	// trust this Markdown parser to not have bugs.
	const renderedHTML = md.render(markdown);
	return { __html: renderedHTML };
}
