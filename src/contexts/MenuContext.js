import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuItems, loading] = useCollection(collection(db, 'menu'));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (menuItems) {
      const uniqueCategories = [...new Set(menuItems.docs.map(doc => doc.data().category))];
      setCategories(uniqueCategories);
    }
  }, [menuItems]);

  const getItemsByCategory = (category) => {
    if (!menuItems) return [];
    return menuItems.docs
      .filter(doc => doc.data().category === category)
      .map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const value = {
    menuItems: menuItems?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || [],
    loading,
    categories,
    getItemsByCategory
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};