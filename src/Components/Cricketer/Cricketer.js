import React from 'react';
import Rating from 'react-rating';
import './Cricketer.css'
const Cricketer = (props) => {
    const { photo, name, type, age, strike, salary } = props.player;
    return (

        <div className='cricketer-container'>
            <img src={photo} alt="" />
            <div>
                <h2>{name}</h2>
                <p>Playing-Role: {type}</p>
                <p>Age: {age}</p>
                <p>Strike-Rate: {strike}</p>
                <h2>Salary: {salary}</h2>

                <Rating
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readOnly
                ></Rating> <br /> <br />
                <button onClick={() => props.playerHandeler(props.player)} className='player-button'><i class="fas fa-plus-circle"></i> Add player</button>
            </div>

        </div>
    );
};

export default Cricketer;