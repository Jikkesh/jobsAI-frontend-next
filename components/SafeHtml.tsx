import createDOMPurify from "dompurify";

export default function SafeHtml({ html }: { html: string }) {
  let DOMPurify;

  if (typeof window === "undefined") {
    // Server-side: use jsdom
    const { JSDOM } = require("jsdom");
    const window = new JSDOM("").window;
    DOMPurify = createDOMPurify(window);
  } else {
    // Client-side: bind to real browser window
    DOMPurify = createDOMPurify(window);
  }

  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
