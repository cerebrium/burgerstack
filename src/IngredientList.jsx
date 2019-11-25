import React from 'react';

const IngredientList = props => {
    let mappedIngredients = props.value.map(ingredient => <p><input type="button" value={ingredient.name} onClick={props.onClick}/></p>)
    return mappedIngredients
}


export default IngredientList;