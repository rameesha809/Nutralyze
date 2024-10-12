import { useState } from 'react';
import { analyzeNutrition } from '../api/api';

const useNutritionAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeNutrition(text);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, analyze };
};

export default useNutritionAnalysis;
