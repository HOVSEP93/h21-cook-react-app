import React, { Fragment, useEffect, useState } from 'react';
import RecipeList from '../../components/recipe-list/RecipeList';
import { projectFirestore } from '../../firebase/config';

// Dark mode
import { useTheme } from '../../hooks/useTheme';

// Style scss
import './Home.scss';

const Home = () => {
  const { mode } = useTheme();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot(
      snapshot => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            // console.log(doc)
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setIsPending(false);
        }
      },
      err => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);
  return (
    <Fragment>
      <div className={`home ${mode}`}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    </Fragment>
  );
};

export default Home;
