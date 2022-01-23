import { useEffect, useState } from 'react';
import { LoadingSpinner } from '..';
import { API } from '../../../contexts/api';
import { useForm } from '../../hooks/useForm';
import { CategoriesList } from './CategoriesList';
import { StyledProductFilter } from './StyledProductFilter';

interface PropType {
    onChangeFilter: Function
}
export const ProductFilter = ({ onChangeFilter }: PropType) => {

    const [categories, setCategories] = useState<string[] | null>(null);

    useEffect(() => {
        loadCategories()
    }, []
    );

    const loadCategories = async () => {
        const categoriesData: string[] = await API.category.getAll()
        setCategories(categoriesData)
    }

    const [filterBy, handleChange, setFilterBy] = useForm({
        search: '',
        sort: '',
        category: ''
    }, onChangeFilter)

    const onCategorySelect = (selectedCategory: string) => {
        setFilterBy({ ...filterBy, category: selectedCategory })
    }

    const { search, sort, category } = filterBy

    if (!categories) return <LoadingSpinner isVisible={true} />
    return (
        <StyledProductFilter>
            <section className="product-filter">
                <input type="search" value={search} name="search" onChange={handleChange} placeholder="Search product" />
                <label htmlFor="sortBy">Sort by: </label>
                <select name="sort" id="sort" onChange={handleChange} >
                    <option value="high-price">Highest price</option>
                    <option value="low-price">Lowest price</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <CategoriesList activeCategory={category} categories={categories} onCategorySelect={onCategorySelect} />
            </section>
        </StyledProductFilter>
    )
};
