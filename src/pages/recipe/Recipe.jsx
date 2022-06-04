import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useTheme } from '../../hooks/useTheme';

import { projectFirestore } from '../../firebase/config';

import './Recipe.scss';

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot(doc => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find the recipe 😔');
        }
      });
    return () => unsub();
  }, [id]);

  return (
    <Fragment>
      <div className={`recipe ${mode}`}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {recipe && (
          <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <ul>
              {recipe.ingredients.map(ing => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
            <p className="method">{recipe.method}</p>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Recipe;
