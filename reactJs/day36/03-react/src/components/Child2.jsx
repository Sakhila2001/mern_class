import React from 'react'

function Child2({ product, price, phoneNumber = 987374837484738 }) {

    return (
        <>
            <div>{product}</div>
            <div>{price}</div>
            <div>{phoneNumber}</div>
        </>
    )
}

export default Child2