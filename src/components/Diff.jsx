import React from 'react'

export default function Diff() {
  return (
    <div className='min-h-screen p-10'>
      <div className="diff min-h-3.5 aspect-[12/6]">
        <div className="diff-item-1">
          <div className="bg-diff  grid place-content-center font-black">
            <h1 className='pb-5'>Benefits of  Knowing Nutrients in Diet</h1>
            <ul>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Helps maintain a balanced diet by ensuring proper intake of nutrients.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Helps in weight management by monitoring calorie consumption.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Improves overall health by reducing nutrient deficiencies.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Helps in managing and preventing chronic diseases like diabetes etc.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Boosts energy levels by ensuring proper intake of macronutrients.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/check-mark.png" alt="check" /><p className='pt-1'> Enhances mental clarity and focus by maintaining a well-nourished brain.</p></li>
            </ul>
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 grid place-content-center font-black">
            <h1 className='pb-5'>Hazards of Not Knowing Nutrients in Diet</h1>
            <ul>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Risk of overeating or undereating, leading to malnutrition.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Likelihood of developing nutrient deficiencies or imbalances.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Chance of developing diseases due to poor dietary choices.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Energy levels can fluctuate, causing fatigue or sluggishness.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Unintentionall consumption of unhealthy fats, sugars, or salts.</p></li>
              <li className='flex flex-row my-3'><img className='max-h-10 pb-2' src="/src/assets/remove.png" alt="cross" /><p className='pt-1 pl-2'> Lack of awareness can result in poor mental health.</p></li>
            </ul>
          </div>
        </div>
        <div class="diff-resizer"></div>
      </div>
    </div>
  )
}
