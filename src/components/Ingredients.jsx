import React, { useEffect, useState } from 'react';
import nutritionData from '../api/nutritionData';
import { analyzeCalories } from '../api/nutritionApi'; // Adjust the import based on your structure

const parseIngredients = (ingredients) => {
    return ingredients.map((ingredient) => {
        const [qty, unit, ...foodParts] = ingredient.split(' ');
        const food = foodParts.join(' ').replace(/,$/, '');
        const foodKey = food.toLowerCase();

        return {
            qty: qty,
            unit: unit,
            food: food,
            calories: nutritionData[foodKey]?.calories || 'N/A',
            weight: nutritionData[foodKey]?.weight || 'N/A',
        };
    });
};

const IngredientsTable = ({ ingr }) => {
    const [nutritionData, setNutritionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNutritionData = async () => {
            setLoading(true);
            setError(null);
            try {
                const ingredientsText = ingr.join(', '); 
                const data = await analyzeCalories(ingredientsText);
                setNutritionData(data); 
            } catch (error) {
                setError('Failed to fetch nutrition data');
                console.error('Error fetching nutrition data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNutritionData();
    }, [ingr]);
    const ingredientsData = parseIngredients(ingr);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Unit</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredientsData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.qty}</td>
                            <td>{item.unit}</td>
                            <td>{item.food}</td>
                            <td>{item.calories}</td>
                            <td>{item.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IngredientsTable;
