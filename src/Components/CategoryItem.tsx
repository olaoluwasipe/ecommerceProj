import React from 'react';

interface Subcategory {
    id: number;
    name: string;
  }

interface CategoryItemProps {
    id: number,
    image: string,
    name: string,
    subcategories: Subcategory[]
}

const CategoryItem: React.FC<CategoryItemProps> = ( {id, name, image, subcategories} ) => {
  return (
    <div className='category' key={id}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <ul>
          {subcategories.map(subcategory => (
            <li key={subcategory.id}>{subcategory.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default CategoryItem