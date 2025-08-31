import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const MenuManager = () => {
  const [menuItems, loading] = useCollection(collection(db, 'menu'));
  const [editingItem, setEditingItem] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      if (editingItem) {
        await updateDoc(doc(db, 'menu', editingItem.id), data);
        toast.success('Item updated successfully');
        setEditingItem(null);
      } else {
        await addDoc(collection(db, 'menu'), data);
        toast.success('Item added successfully');
      }
      reset();
    } catch (error) {
      toast.error('Error saving item');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setValue('name', item.name);
    setValue('price', item.price);
    setValue('description', item.description);
    setValue('category', item.category);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await deleteDoc(doc(db, 'menu', id));
      toast.success('Item deleted successfully');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Menu Management</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '30px' }}>
        <input {...register('name')} placeholder="Item Name" required />
        <input {...register('price', { valueAsNumber: true })} placeholder="Price" type="number" required />
        <input {...register('description')} placeholder="Description" required />
        <select {...register('category')} required>
          <option value="">Select Category</option>
          <option value="Drinks">Drinks</option>
          <option value="Food">Food</option>
          <option value="Desserts">Desserts</option>
        </select>
        <button type="submit">{editingItem ? 'Update' : 'Add'} Item</button>
        {editingItem && <button type="button" onClick={() => { setEditingItem(null); reset(); }}>Cancel</button>}
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {menuItems?.docs.map(doc => {
          const item = { id: doc.id, ...doc.data() };
          return (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>{item.description}</p>
              <p>Category: {item.category}</p>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuManager;