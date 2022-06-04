import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import Trashcan from '../../assets/trashcan.svg';
import { projectFirestore } from '../../firebase/config';

// Style
import './RecipeList.scss';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipe to load...</div>;
  }

  const handleClick = id => {
    projectFirestore.collection('recipes').doc(id).delete();
  };
  return (
    <Fragment>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`recipes/${recipe.id}`}>Cook This</Link>
            <img
              className="delete"
              src={Trashcan}
              alt="delete-icon"
              onClick={() => handleClick(recipe.id)}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default RecipeList;
