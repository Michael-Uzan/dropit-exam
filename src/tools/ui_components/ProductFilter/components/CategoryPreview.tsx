import { utilService } from "../../../../services/util.service";

interface PropType {
    category: string,
    onCategorySelect: Function,
    activeCategory: string
}

export const CategoryPreview = ({ category, onCategorySelect, activeCategory }: PropType) => {

    const getActiveClass = () => {
        return activeCategory === category ? 'active' : ''
    }

    return <section className="category-preview">
        <div onClick={() => onCategorySelect(category)} className={getActiveClass()} >
            {utilService.getCapitalDisplay(category)}
        </div>
    </section>
};
