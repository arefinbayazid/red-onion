import { useEffect, useState } from 'react';
import Meal from '../../Shered/Meal';
import './Meals.css'

const Meals = () => {

    const [types, setTypes] = useState('./lunch.json');
    const [borderId, setBorderId] = useState(['lunch_list'])
    const [meal, setMeal] = useState([]);
    const mealTypeBtnHandelar = (data, type) =>{
        setTypes(`./${data}.json`);

        // classlist add and remove
        document.getElementById(type).classList.add('actice_list_item');

        if(borderId[0] !== type){
            setBorderId([type, borderId[0]]);
            document.getElementById(borderId[0]).classList.remove('actice_list_item');
        }
        
    }
    useEffect(()=>{
        fetch(types)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [types]);
    
    // card item selected and deselected
    const [cardItems, setCardItems] = useState([]);
    const selectedCard = (mealId) =>{
        if(cardItems.indexOf(mealId) === -1) {
            setCardItems([mealId, ...cardItems])
            console.log(mealId)
            document.getElementById(mealId).classList.add('box_clicked')
        }
        if(cardItems.indexOf(mealId) !== -1) {
            document.getElementById(mealId).classList.remove('box_clicked')
            const arr = cardItems.filter(items => items !== mealId)
            setCardItems(arr)
        }
    }
    useEffect(()=>{
        if (!cardItems.length) return;
        cardItems.map(item => {
            document.getElementById(item)?.classList?.add('box_clicked');
        })
    }, [meal]);

    // desable btn check
    useEffect(()=>{
        if(cardItems.length > 0){
            document.getElementById('checkout_btn').removeAttribute('disabled')
        }
        else{
            document.getElementById('checkout_btn').setAttribute('disabled', true)
        }
    }, [cardItems])


    return (
        <div className='container mb-5'>
            <div className='menu_items mt-5 mb-3'>
                <ul>
                    <li id='breakfast_list' onClick={() => mealTypeBtnHandelar('breakfast', 'breakfast_list')}>Breakfast</li>
                    <li className='actice_list_item' id='lunch_list' onClick={() => mealTypeBtnHandelar('lunch', 'lunch_list')}>Lunch</li>
                    <li id='dinner_list' onClick={() => mealTypeBtnHandelar('dinner','dinner_list')}>Dinner</li>
                </ul>
            </div>

            <div className='meals_items px-5'>
                {
                    (meal.length) && meal.map(item => <Meal selectedCard = {selectedCard} key = {item.id} item = {item}></Meal>)
                }  
            </div>

            <div className='my-5'>
                <button id='checkout_btn' className='mx-auto d-block'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Meals;