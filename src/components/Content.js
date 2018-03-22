import React from 'react';
import DOMPurify from 'dompurify';

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
