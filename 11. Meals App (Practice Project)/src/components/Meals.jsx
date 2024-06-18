
import Button from './UI/Button';
import { currencyFormatter } from '../util/formatting';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { useHttp } from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(meal) {
        cartCtx.addItem(meal)
    }

    const { data: meals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);
   
    if (isLoading) {
        return <div id='meals'>
            <h1>The data is beaing fethced...</h1>
        </div>
    }

    if (error) {
        return <Error title='Failed to fetch meals' message={error} />
    }

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <li key={meal.id} className="meal-item">
                    <article>
                        <img src={`http://localhost:3000/${meal.image}`} alt="meal-image" />
                        <h3>{meal.name}</h3>
                        <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                        <p className="meal-item-description">{meal.description}</p>
                        <p className='meal-item-actions'>
                            <Button onClick={() => handleAddMealToCart(meal)}>Add to Cart</Button>
                        </p>
                    </article>
                </li>
            ))}
        </ul>
    );
}