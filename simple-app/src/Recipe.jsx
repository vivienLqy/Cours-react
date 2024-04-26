import { useEffect, useState } from "react";
import Header from "./Header"
import Card from "./Card";

const Recipes = () => {

    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [categoriesName, setCategoriesName] = useState("");
    const [ingredients, setIngredients] = useState('');

    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const catUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesName}`
    const iUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        fetch(catUrl)
            .then(response => response.json())
            .then(data => setRecipes(data.meals))
            .catch(err => console.error(err))
    }, [categoriesName])

    useEffect(() => {
        fetch(iUrl)
            .then(response => response.json())
            .then(data => setRecipes(data.meals))
            .catch(err => console.error(err))
    }, [ingredients])

    console.log(categories);

    const handleClick = (name) => {
        setCategoriesName(name)
        console.log(categoriesName)
    }

    const addRecipesByIngredient = (value) => {
        setIngredients(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Header />
            <div className="col-10 mx-auto">
                <div className="d-flex justify-content-evenly flex-wrap">
                    {categories.map(categorie =>
                        <div key={categorie.idCategory} className="col-3 px-auto">
                            <button onClick={() => handleClick(categorie.strCategory)} className="btn btn-primary mt-2">{categorie.strCategory}</button>
                        </div>
                    )}
                    <div className="col-6">
                        <form onSubmit={handleSubmit} className="d-flex mt-2" role="search">
                            <input
                                className="form-control form-control-lg me-1"
                                type="search"
                                placeholder="Search recipe"
                                onChange={(e) => {
                                    e.target.value.length > 2 && addRecipesByIngredient(e.target.value)
                                }}
                                aria-label="Search recipe" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    {recipes?.map(recipe => <Card key={recipe.idMeal} img={recipe.strMealThumb} title={recipe.strMeal} />)}
                </div>
            </div>

        </>
    );
};

export default Recipes;
// import React, { useEffect, useState } from 'react';
// import Header from './Header';

// const Recipe = () => {
//     const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

//     const [categories, setCategories] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(false);

//     useEffect(() => {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => setCategories(data.categories))
//             .catch(err => console.error(err));
//     }, []);

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     return (
//         <div>
//             <Header />
//             <div className='col-10 mx-auto'>
//                 <div className='d-flex justify-content-between flex-wrap'>
//                     <button className='btn btn-primary' onClick={toggleDropdown}>Categorie</button>
//                     {showDropdown && (
//                         <div className='dropdown-menu'>
//                             {categories.map(categorie => (
//                                 <div key={category.strCategory} className='form-check'>
//                                     <input
//                                         type='checkbox'
//                                         className='form-check-input'
//                                         id={category.strCategory}
//                                         value={category.strCategory}
//                                     />
//                                     <label className='form-check-label' htmlFor={category.strCategory}>
//                                         {category.strCategory}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Recipe;
