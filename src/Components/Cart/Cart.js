import React from 'react';
import './Cart.css'
const Cart = ({ plcart }) => {


    let total = 0;
    for (const player of plcart) {
        total = total + player.salary;
    }

    return (
        <div className='selected-cricketer'>
            <h3 className='selected-player'>Selected Player</h3>
            <p >Total Selected Player: {plcart.length} </p>
            <p>Total Budget: {total}/-</p>
            <h3 className='selected-player'>List of Selected Players</h3>
            {
                plcart.map(data =>
                    <div className="added-name">
                        <p><i class="fas fa-trophy"></i> {data.name}</p>
                        <p>{data.salary}/-</p>
                    </div>

                )
            }


        </div>
    );
};

export default Cart;