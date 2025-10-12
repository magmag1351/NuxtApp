
export const database = ["apple", "pear", "grapes", "cherries"];

export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return{
    database
  }
});