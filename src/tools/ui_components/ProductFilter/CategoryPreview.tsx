interface PropType {
    category: string
}

export const CategoryPreview = ({ category }: PropType) => {
    return <section className="category-preview">
        {category}
    </section>
};
