import React, {Component} from 'react';
import style from './index.module.sass'
import CoffeeSVG from '../../assets/icons/coffee.svg'
import Button from "../button";
import {blue, yellow} from "../../assets/style/colors";
import {my_coffee} from "../../config";

class BuyMeACoffee extends Component {

    render() {
        return (
            <a href={my_coffee} target="_blank" rel="noopener noreferrer">
                <Button backgroundColor={yellow} color={blue}>
                    <div className={style.box}>
                        <div className={style.mark}>
                            <span>Buy me a coffee</span>
                        </div>
                        <div className={style.image}>
                            <img src={CoffeeSVG} alt=""/>
                        </div>
                    </div>
                </Button>
            </a>
        );
    }
}

export default BuyMeACoffee;