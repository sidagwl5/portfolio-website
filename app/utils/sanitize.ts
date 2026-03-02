import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitizes an HTML string to prevent XSS attacks.
 * Allows common tags and attributes used in the portfolio.
 */
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "span",
      "b",
      "i",
      "em",
      "strong",
      "a",
      "br",
      "p",
      "ul",
      "ol",
      "li",
    ],
    ALLOWED_ATTR: ["class", "href", "target", "rel", "style"],
  });
};
