import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '..';
import { API } from '../../../contexts/api';
import { CategoriesList } from './CategoriesList';

export const ProductFilter = () => {

    const [categories, setCategories] = useState<string[] | null>(null);

    useEffect(() => {
        loadCategories()
    }, []
    );

    const loadCategories = async () => {
        const categoriesData: string[] = await API.category.getAll()
        setCategories(categoriesData)
    }

    if (!categories) return <LoadingSpinner isVisible={true} />

    return <section className="product-filter">
        <input type="text" placeholder="search product" />
        <CategoriesList categories={categories} />
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" id="sort" >
            <option value="high-price">Highest Price</option>
            <option value="low-price">Lowest Price</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>
    </section>
};
