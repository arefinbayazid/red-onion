import React, { useEffect, useState } from 'react';
import './Meal.css'

const Meal = (props) => {
    const {img, title, discription, price, id} = props.item;

    
    



    

    return (
        <div id={id} onClick={()=>props.selectedCard(id)} className='single_meal py-3 box_shadow'>
            <div>
                <img width={150} src={img} />
            </div>
            <div className='text-center mt-4'>
                <h5>{title}</h5>
                <p className='text-secondary'>{discription}</p>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default Meal;