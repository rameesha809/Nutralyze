const EDAMAM_APP_ID = 'd63229c7';
const EDAMAM_APP_KEY = '1933255ac297d00969ccf20b4ed4c5b3';
const EDAMAM_API_URL = 'https://api.edamam.com/api/nutrition-details';

export const analyzeNutrition = async (text) => {
  try {
    console.log(text)
    const response = await fetch(
      `${EDAMAM_API_URL}?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(text),
      }
    );
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    console.log(data)
    if (data.error) {
      throw new Error(data.error);
    }
    
    const parsedIngredients = data.ingredients.map(ingredient => ingredient.parsed);
        
        console.log("parsedd:",parsedIngredients);
        return data;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};
