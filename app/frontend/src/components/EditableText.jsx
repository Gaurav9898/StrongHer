import React from 'react';
import { defaultContent } from '../mock';

const getValue = (path) => path.split('.').reduce((o, k) => {
  if (o == null) return undefined;
  const idx = Number(k);
  return Number.isNaN(idx) ? o[k] : o[idx];
}, defaultContent);

export const EditableText = ({ path, as: Tag = 'span', className = '', multiline = false, placeholder = '' }) => {
  const value = getValue(path);

  return (
    <Tag className={className}>
      {value || ''}
    </Tag>
  );
};

export const EditableImage = ({ path, alt = '', className = '' }) => {
  const value = getValue(path);

  return (
    <div className="relative">
      <img src={value} alt={alt} className={className} loading="lazy" />
    </div>
  );
};
