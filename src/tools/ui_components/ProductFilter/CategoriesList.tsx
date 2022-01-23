import React from 'react';
import { CategoryPreview } from './CategoryPreview';

interface PropType {
    categories: string[],
    onCategorySelect: Function,
    activeCategory: string
}

export const CategoriesList = ({ categories, onCategorySelect, activeCategory }: PropType) => {
    return <section className="categories-list">
        <h4>Categories: </h4>
        <div className="categories">
            {categories.map((category: string) => <CategoryPreview key={category} category={category} onCategorySelect={onCategorySelect} activeCategory={activeCategory} />)}
        </div>
    </section>
};
