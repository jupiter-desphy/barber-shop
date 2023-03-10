import React from 'react';
import Tony from '../images/tony.jpg';
import MrTony from '../images/mr-tony.jpg';
import Sabastian from '../images/sabastian.jpg';

export default function Staff() {

    const onClickTony = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/669506#ba_s=bd_1');

    const onClickMrTony = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/669505#ba_s=bd_1');

    const onClickSebastian = ('https://booksy.com/en-us/720068_tabor-barbershop_barber-shop_134776_portland/staffer/746316#ba_s=bd_1');

    return (
        <div className="staff">
            <div className="person">
                <a href={onClickTony} className="container">
                        <img
                            className="circle"
                            src={Tony}
                            alt='Barber 1'
                        />
                </a>
                <div className="divider"></div>
                <div className="name">Tony</div>
                <div className="title">Tuesday - Saturday</div>
            </div>
            <div className="person">
                <a href={onClickMrTony} className="container">
                        <img
                            className="circle"
                            src={MrTony}
                            alt='Barber 2'
                        />
                </a>
                <div className="divider"></div>
                <div className="name">Mr. Tony</div>
                <div className="title">Thursday - Saturday</div>
            </div>
            <div className="person">
                <a href={onClickSebastian} className="container">
                        <img
                            className="circle"
                            src={Sabastian}
                            alt='Barber 3'
                        />
                </a>
                <div className="divider"></div>
                <div className="name">Sabastian</div>
                <div className="title">Sunday - Wednesday</div>
            </div>
        </div>
    )
}
