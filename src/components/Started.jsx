import React, { useEffect, useState } from 'react'
import { analyzeNutrition } from '/src/Services/api';
export default function Started() {
    const [ingredients, setIngredients] = useState('');
    const [nutritionData, setNutritionData] = useState(null);
    const [show, setShow] = useState(false);
    const [showTable, setShowtable] = useState(false);
    const [broken, setBroken] = useState([]);
    const [calories, setCalories] = useState([]);
    useEffect(() => {
        if (broken.length > 0) {
          console.log("Updated Broken Array:", broken);
        }
      }, [broken]);
    const handleClick = async (value) => {
        const ingredientArray = ingredients.split('\n').filter(item => item.trim() !== '');
        console.log(ingredientArray)

        const stringBreaker = () => {
            let ingredientArrayBroken = ingredientArray.map((item) => item.split(' '))
            setBroken(ingredientArrayBroken);
            console.log('Broken Array:', ingredientArrayBroken);
        }

        const singleCalorie = async () => {
            for (const item of ingredientArray) {
                let requestString ={
                    ingr: [item],
                }
              console.log('Sending item:', item); // Check what is being sent
              try {
                let result = await analyzeNutrition(requestString); // Ensure item is formatted properly
                setCalories((prevCalories) => [...prevCalories, result.calories|| 0]);
                console.log('Calories so far:', calories);
              } catch (error) {
                console.error(`Error processing ${item}:`, error); // Handle error for each item
              }            }
          };

        const requestString = {
            ingr: ingredientArray,
        };
        console.log(requestString)
        if (!ingredients.trim()) {
            alert('Please enter ingredients');
            return;
        }
        try {
            const data = await analyzeNutrition(requestString);
            setNutritionData(data);
            stringBreaker();
            singleCalorie();
        } catch (error) {
            console.error(error);
        } finally {
            console.log("final")
            console.log(broken)
            setShow(true);
            setShowtable(true)
         setCalories([null])
        }
    }

    return (
        <div className='maincont flex flex-row justify-center mt-20 pb-20'>
            <div className='flex flex-col justify-center items-center mr-10 ml-10 max-w-lg'>
                <p className='mb-10 '>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
                    Enter each ingredient on a new line.</p>
                <textarea
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Type indgredients here in seperae lines"
                    className="input input-bordered input-primary w-full max-w-xs h-36 mb-10 " />

                <button className="btn btn-neutral max-w-40" onClick={() => handleClick(ingredients)}>Analyze</button>
                {showTable && <div className="overflow-x-auto mt-5 mb-5">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Ingredient</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {broken.map((item, index)=>(
                                <tr>
                                <th>{index+1}</th>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{calories[index+1]}</td>
                            </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>}

            </div>
            {show && <div className='flex justify-center'>
            <div className="p-4 bg-white border border-black max-w-xs mt-5 mb-5 mr-4 ml-4">
                <h1 className="text-2xl font-bold border-b-8 border-black pb-1">Nutrition Facts</h1>

                <p className="font-bold text-left mt-1">Amount Per Serving</p>

                <div className="flex justify-between font-bold text-lg mt-2 border-b border-black pb-1">
                    <span>Calories</span>
                    <span>{nutritionData.calories?nutritionData.calories:0}</span>
                </div>

                <p className="text-right font-bold text-sm mt-2">% Daily Value*</p>

                <div className="text-sm border-b border-black">
                    <div className="flex justify-between py-1">
                        <span><span className='font-bold'>Total Fat</span> {nutritionData.totalDaily.FAT?nutritionData.totalNutrients.FAT.quantity.toFixed(1):"-"} {nutritionData.totalDaily.FAT?nutritionData.totalNutrients.FAT.unit:""}</span>
                        <span className="font-bold">{nutritionData.totalDaily.FAT?Math.round(nutritionData.totalDaily.FAT.quantity):0} {nutritionData.totalDaily.FAT?nutritionData.totalDaily.FAT.unit:""}</span>
                    </div>

                    {/* Saturated Fat */}
                    <div className="flex justify-between">
                        <span className="pl-4">Saturated Fat {nutritionData.totalNutrients.FASAT.quantity.toFixed(1)} {nutritionData.totalNutrients.FASAT.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.FASAT.quantity)} {nutritionData.totalDaily.FASAT.unit}</span>
                    </div>

                    {/* Trans Fat */}
                    <div className="flex justify-between py-1">
                        <span className="pl-4">Trans Fat 0 g</span>
                    </div>

                    {/* Cholesterol */}
                    <div className="flex justify-between py-1 border-t border-black">
                        <span><span className='font-bold'>Cholesterol</span> <span>{Math.round(nutritionData.totalNutrients.CHOLE.quantity)} {nutritionData.totalNutrients.CHOLE.unit}</span>
                        </span> <span className="font-bold">{Math.round(nutritionData.totalDaily.CHOLE.quantity)} {nutritionData.totalDaily.CHOLE.unit}</span>
                    </div>

                    <div className="flex justify-between py-1">
                        <span><span className="font-bold m-0">Sodium</span> <span>{Math.round(nutritionData.totalNutrients.NA.quantity)} {(nutritionData.totalNutrients.NA.unit)}</span>
                        </span>  <span className="font-bold">{Math.round(nutritionData.totalDaily.NA.quantity)}{nutritionData.totalDaily.NA.unit}</span>
                    </div>

                    <div className="flex justify-between py-1 border-t border-black">
                        <span><span className='font-bold'>Total Carbohydrate </span>{nutritionData.totalNutrients.CHOCDF.quantity.toFixed(1)} {nutritionData.totalNutrients.CHOCDF.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.CHOCDF.quantity)}{nutritionData.totalDaily.CHOCDF.unit}</span>
                    </div>

                    <div className="flex justify-between py-1">
                        <span className="pl-4">Dietry Fibres {nutritionData.totalNutrients.FIBTG ? nutritionData.totalNutrients.FIBTG.quantity.toFixed(1) : "-"} {nutritionData.totalNutrients.FIBTG ? nutritionData.totalNutrients.FIBTG.unit : ""}</span>
                        <span className="font-bold">{nutritionData.totalNutrients.FIBTG ? Math.round(nutritionData.totalDaily.FIBTG.quantity):""}{nutritionData.totalNutrients.FIBTG ?nutritionData.totalDaily.FIBTG.unit:""}</span>

                    </div>

                    <div className="flex justify-between py-1">
                        <span className="pl-4">Total Sugars {nutritionData.totalNutrients.SUGAR ? nutritionData.totalNutrients.SUGAR.quantity.toFixed(1) : "-"} {nutritionData.totalNutrients.SUGAR ? nutritionData.totalNutrients.SUGAR.unit : ""}</span>
                    </div>

                    {nutritionData.totalNutrients.SUGAR && <div className="flex justify-between py-1">
                        <span className="pl-4">Includes Added Sugars</span>
                    </div>}

                    {/* Protein */}
                    <div className="flex justify-between py-1 border-t border-black">
                        <span><span className='font-bold'>{nutritionData.totalNutrients.PROCNT.label}</span> {nutritionData.totalNutrients.PROCNT.quantity.toFixed(1)} {nutritionData.totalNutrients.PROCNT.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.PROCNT.quantity)}{nutritionData.totalDaily.PROCNT.unit}</span>
                    </div>
                </div>

                {/* Vitamins and Minerals */}
                <div className="text-sm border-b border-black">
                    <div className="flex justify-between py-1">
                        <span>{nutritionData.totalNutrients.VITD.label} {nutritionData.totalNutrients.VITD.quantity.toFixed(1)} {nutritionData.totalNutrients.VITD.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.VITD.quantity)}{nutritionData.totalDaily.VITD.unit}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>{nutritionData.totalNutrients.CA.label} {Math.round(nutritionData.totalNutrients.CA.quantity)} {nutritionData.totalNutrients.CA.unit}</span>
                        <span className="font-bold">{nutritionData.totalDaily.CA.quantity.toFixed(1)}{nutritionData.totalDaily.CA.unit}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>{nutritionData.totalNutrients.FE.label} {nutritionData.totalNutrients.FE.quantity.toFixed(1)} {nutritionData.totalNutrients.FE.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.FE.quantity)}{nutritionData.totalDaily.FE.unit}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>{nutritionData.totalNutrients.K.label} {nutritionData.totalNutrients.K.quantity.toFixed(1)} {nutritionData.totalNutrients.K.unit}</span>
                        <span className="font-bold">{Math.round(nutritionData.totalDaily.K.quantity)}{nutritionData.totalDaily.K.unit}</span>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-xs mt-2">
                    *Percent Daily Values are based on a 2000 calorie diet.
                </p>
            </div>
            </div> }


        </div>
    )
}
