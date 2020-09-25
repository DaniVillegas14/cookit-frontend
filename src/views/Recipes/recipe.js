import { Divider, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import RecipeDescription from 'components/Recipe/recipe-description';
import UserInformation from 'components/Recipe/user-information';
import Time from 'components/Recipe/time';
import IngredientList from 'components/Recipe/ingredient-list';
import StepList from 'components/Recipe/step-list';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'service/recipe-service';
import './Recipe.css';

const NOMBRE = 'Uriel Quevedo';
const FECHA_PUBLICACION = '16 de Septiembre 16:24';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const {
    name,
    description,
    imageUrl,
    comensales,
    ingredients,
    steps,
    time
  } = recipe;

  useEffect(() => {
    getRecipe(id).then(recipe_ => setRecipe(recipe_));
  }, [id]);

  return (
    <Grid container justify="center">
      <Grid container item xs={12} sm={6} justify="center" className="bg">
        <RecipeDescription
          imageUrl={imageUrl}
          name={name}
          description={description}
        />
        <UserInformation name={NOMBRE} create_at={FECHA_PUBLICACION} />
        <Time time={time} />
        <IngredientList ingredients={ingredients} comensales={comensales} />
        <Grid item xs={12}>
          <Divider className="height mb-20" />
          <StepList steps={steps} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipe;