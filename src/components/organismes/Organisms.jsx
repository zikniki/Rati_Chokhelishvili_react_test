import React, { useState, useEffect } from 'react';
import card1 from './card1.png';
import card2 from './card2.png';

const Organisms = () => {
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [holderName, setHolderName] = useState('Rati Chokhelishvili');
    const [expMonth, setExpMonth] = useState('MM');
    const [expYear, setExpYear] = useState('YY');
    const [cvc, setCvc] = useState('000');

    useEffect(() => {
        document.title = holderName;
    }, [holderName]);

    return (
        <div className='CardSection'>
            <div className='Left'>
                <div className='FirstCard'>
                    <img src={card1} alt="" />
                    <div className='CardState'>
                        <div className='CardNumber'>{cardNumber}</div>
                        <div className='BottomText'>
                            <div className='HolderName'>{holderName}</div>
                            <div className='Data'>{`${expMonth}/${expYear}`}</div>
                        </div>
                    </div>
                </div>
                <div className='SecndCard'>
                    <img src={card2} alt="" />
                    <div className='Cvc'>
                        {cvc}
                    </div>
                </div>
            </div>
            <div className='Right'>
                <div>
                    <p>Cardholder Name</p>
                    <input style={{ width: '100%' }} type="text" value={holderName} onChange={(e) => setHolderName(e.target.value)} />
                </div>
                <div>
                    <p>Card Number</p>
                    <input style={{ width: '100%' }} type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div>
                        <p>Exp. Date (MM/YY)</p>
                        <input style={{ width: '70px', height: '45px' }} type="text" value={expMonth} onChange={(e) => setExpMonth(e.target.value)} />
                        <input style={{ width: '70px', height: '45px', marginLeft: '10px' }} type="text" value={expYear} onChange={(e) => setExpYear(e.target.value)} />
                    </div>
                    <div style={{ width: '140px', height: '45px', marginLeft: '10px' }}>
                        <p className='cvc'>CVC</p>
                        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
                    </div>
                </div>
                <div style={{ width: '100%', paddingTop: '40px' }}>
                    <button style={{ width: '100%', height: '53px', backgroundColor: '#21092F' }}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Organisms;