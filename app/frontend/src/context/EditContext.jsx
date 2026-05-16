import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { defaultContent } from '../mock';

const EditContext = createContext(null);
const STORAGE_KEY = 'seema_content_v3';

export const EditProvider = ({ children }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...defaultContent, ...JSON.parse(saved) };
    } catch (e) { /* ignore */ }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updatePath = useCallback((path, value) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      const keys = path.split('.');
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        const idx = Number(k);
        obj = obj[Number.isNaN(idx) ? k : idx];
      }
      const last = keys[keys.length - 1];
      const lidx = Number(last);
      obj[Number.isNaN(lidx) ? last : lidx] = value;
      return next;
    });
  }, []);

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
  };

  return (
    <EditContext.Provider value={{ editing, setEditing, content, updatePath, reset }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => useContext(EditContext);
