const recipeContainer = document.querySelector('.recipe');

const timeout = secs =>
  new Promise((_, reject) =>
    setTimeout(
      reject(new Error(`Request took too long! Timeout after ${secs} seconds`)),
      secs * 1000
    )
  );
