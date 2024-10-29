import { useState } from "react";
import useStore from "../store";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  const handleAddRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    )
      return;

    addRecipe({
      id: Date.now(),
      name,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions,
    });

    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions);
  };

  const handleUpdateRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    )
      return;

    if (editingRecipe) {
      removeRecipe(editingRecipe.id);
      addRecipe({
        id: editingRecipe.id,
        name,
        ingredients: ingredients
          .split(",")
          .map((ingredient) => ingredient.trim()),
        instructions,
      });
      setEditingRecipe(null);
    }

    setName("");
    setIngredients("");
    setInstructions("");
  };

  const handleCancelEdit = () => {
    setEditingRecipe(null);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            className="w-full h-32 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-between">
            {editingRecipe ? (
              <>
                <button
                  onClick={handleUpdateRecipe}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Update Recipe
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleAddRecipe}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Recipe
              </button>
            )}
          </div>
        </div>
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="p-4 bg-green-50 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditRecipe(recipe)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
