import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cricketer from '../Cricketer/Cricketer';
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState([]);
    const [plcart, setCart] = useState([])
    useEffect(() => {
        fetch('./Players.JSON')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    const playerHandeler = (player) => {
        const newCart = [...plcart, player];
        setCart(newCart);

    }
    return (
        <div className='players-container'>
            <div className='players'>

                {
                    players.map(player => <Cricketer
                        playerHandeler={playerHandeler}
                        key={player.id}
                        player={player}></Cricketer>)
                }

            </div>
            <div className='selected-players'>
                <Cart plcart={plcart}></Cart>
            </div>
        </div>
    );
};

export default Players;