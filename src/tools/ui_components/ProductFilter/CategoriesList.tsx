import React from 'react';
import { CategoryPreview } from './CategoryPreview';

interface PropType {
    categories: string[]
}

export const CategoriesList = ({ categories }: PropType) => {
    return <section className="categories-list">
        {categories.map((category: string) => <CategoryPreview key={category} category={category} />)}
    </section>
};
