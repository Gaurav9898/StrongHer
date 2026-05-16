import React, { useRef, useEffect } from 'react';
import { useEdit } from '../context/EditContext';

export const EditableText = ({ path, as: Tag = 'span', className = '', multiline = false, placeholder = '' }) => {
  const { editing, content, updatePath } = useEdit();
  const ref = useRef(null);

  // resolve value
  const value = path.split('.').reduce((o, k) => {
    if (o == null) return undefined;
    const idx = Number(k);
    return Number.isNaN(idx) ? o[k] : o[idx];
  }, content);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== (value || '')) {
      ref.current.innerText = value || '';
    }
  }, [value, editing]);

  const onBlur = (e) => {
    const newVal = multiline ? e.currentTarget.innerText : e.currentTarget.innerText.replace(/\n/g, ' ');
    updatePath(path, newVal);
  };

  return (
    <Tag
      ref={ref}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={onBlur}
      data-placeholder={placeholder}
      className={`${className} ${editing ? 'edit-on outline-none ring-1 ring-rose-300/60 ring-offset-2 ring-offset-transparent rounded-sm focus:ring-rose-500 focus:ring-2' : ''}`}
    >
      {value || ''}
    </Tag>
  );
};

export const EditableImage = ({ path, alt = '', className = '' }) => {
  const { editing, content, updatePath } = useEdit();
  const value = path.split('.').reduce((o, k) => {
    if (o == null) return undefined;
    const idx = Number(k);
    return Number.isNaN(idx) ? o[k] : o[idx];
  }, content);

  const onClick = () => {
    if (!editing) return;
    const url = window.prompt('Image URL', value || '');
    if (url !== null) updatePath(path, url);
  };

  return (
    <div className={`relative ${editing ? 'cursor-pointer' : ''}`} onClick={onClick}>
      <img src={value} alt={alt} className={className} loading="lazy" />
      {editing && (
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-semibold rounded-[inherit]">
          Click to change image
        </div>
      )}
    </div>
  );
};
