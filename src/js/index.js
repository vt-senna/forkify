import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const recipeContainer = document.querySelector('.recipe');

const timeout = secs =>
  new Promise((_, reject) =>
    setTimeout(
      reject(new Error(`Request took too long! Timeout after ${secs} seconds`)),
      secs * 1000
    )
  );

const showRecipes = async () => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=e9a8ef4e-351a-405e-8f49-8a5e012f499e`
    );

    let {
      message,
      data: {
        recipe: {
          id,
          title,
          publisher,
          source_url,
          image_url,
          servings,
          cooking_time,
          ingredients,
        },
      },
    } = await res.json();

    if (!res.ok) throw new Error(`${message} (${res.status})`);

    recipe = {
      id,
      title,
      publisher,
      sourceUrl: source_url,
      image: image_url,
      servings,
      cookingTime: cooking_time,
      ingredients,
    };
  } catch (err) {
    alert(err);
  }
};
showRecipes();
