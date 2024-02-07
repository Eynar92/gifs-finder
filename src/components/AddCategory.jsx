import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanInputValue = inputValue.trim();

        if (cleanInputValue.length <= 1) return;

        onNewCategory(cleanInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}
