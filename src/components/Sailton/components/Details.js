import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Card } from './Card';

const Details = ({ details }) => {

    const {darkMode} = useContext(ThemeContext);

    const detailsList = {
        name:"Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo:"IPO Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry",
    };

    const converMillionToBillion = (number)=>{
        return (number/1000).toFixed(2);
    }

  return (
    <Card>
        <ul className={`w-full h-full flex flex-col justify-between devide-y-1 ${darkMode? "devide-gray-800": null}`}>
            {Object.keys(detailsList).map((item) => {
                return <li key={item} className="flex-1 flex justify-between items-center">
                    <span>{detailsList[item]}</span>
                    <span>{item === "marketCapitalization"? `${converMillionToBillion(details[item])}B`: details[item]}</span>
                </li>

            })}
        </ul>

    </Card>
  )
}

export default Details