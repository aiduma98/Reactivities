import React from 'react'
import { ICar } from './demo'

interface Iprops {
    car: ICar
}

const CartItem: React.FC<Iprops> = ({car}) => {
    return (
        <div>
            <h1>{car.color}</h1>       
        </div>
    )
}

export default CartItem