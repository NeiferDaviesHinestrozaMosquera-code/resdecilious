import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MenuSectionContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuItemCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const MenuItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const MenuItemName = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const MenuItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
`;

const MenuItemPrice = styled.span`
  font-size: 1.25rem;
  color: #ffd700;
  font-weight: bold;
`;

const MenuSection = ({ items, category }) => {
  const filteredItems = items.filter(item => item.category === category);

  return (
    <MenuSectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', color: 'white', fontSize: '2.5rem', marginBottom: '50px' }}
      >
        {category}
      </motion.h2>
      
      <MenuGrid>
        {filteredItems.map((item, index) => (
          <MenuItemCard
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.image && <MenuItemImage src={item.image} alt={item.name} />}
            <MenuItemName>{item.name}</MenuItemName>
            <MenuItemDescription>{item.description}</MenuItemDescription>
            <MenuItemPrice>${item.price}</MenuItemPrice>
          </MenuItemCard>
        ))}
      </MenuGrid>
    </MenuSectionContainer>
  );
};

export default MenuSection;