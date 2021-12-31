import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {useEffect, useState} from 'react';
import {pythonPortfolio,
    fullStackPortfolio,
    reactAppPortfolio,
    rpgPortfolio} from '../../data.js';

export default function Portfolio() 
{
    const [selected, setSelected] = useState('python')
    const [data, setData] = useState([])
    const list = [
        {
            id: 'python',
            title: 'Discord Bot',
        },
        {
            id: 'fullStack',
            title: 'Full Stack App',
        },
        {
            id: 'reactApp',
            title: 'React Web App',
        },
        {
            id: 'rpg',
            title: 'RPG Game',
        },
     ];

     useEffect(() => {
        switch(selected){
            case 'python':
                setData(pythonPortfolio);
                break;
            case 'fullStack':
                setData(fullStackPortfolio);
                break;
            case 'reactApp':
                setData(reactAppPortfolio);
                break;
            case 'rpg':
                setData(rpgPortfolio);
                break;
            default:
                setData(pythonPortfolio);

        }
     }, [selected]);

    return (
        <div className="portfolio" id = 'portfolio'>
            <h1>GitHub Directory</h1>
                <ul>
                    {list.map(item => (
                        <PortfolioList 
                            title ={item.title} 
                            active = {selected === item.id} 
                            setSelected = {setSelected}
                            id = {item.id}
                        />
                    ))}
                </ul>
            <div className="container">
                {data.map(d =>(
                <div className="item">
                    <a href={d.link} target="_blank" rel="noopener noreferrer"><img src={d.img}alt="" /></a>
                </div>
                ))}
            </div>
            <div className="footer">
                <p>Thank you for viewing this page! </p>                  
            </div>
        </div>
    )
}
