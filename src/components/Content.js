import React from 'react';
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export default ({ content, className }) => {
  return <div className={className}>{content}</div>;
};
export const HTMLContent = ({ content, className }) => {
  const cleanContent = DOMPurify.sanitize(content);
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
};
