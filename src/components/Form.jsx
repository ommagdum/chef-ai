import React from "react"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromGemini } from "../ai"

export default function Form () {
    
    
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
       const recipeMarkdown = await getRecipeFromGemini(ingredients)
       setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    type="text"
                    placeholder="eg. Chicken"
                    aria-label="Add ingredient"
                    name="ingredient"
                    />
                <button>+ Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList 
                                                    ingredients={ingredients}
                                                    getRecipe={getRecipe} />}

            {recipe && <AiRecipe recipe={recipe} />}
        </main>
    )
}