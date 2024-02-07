import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifsFinderApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifsFinderApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
