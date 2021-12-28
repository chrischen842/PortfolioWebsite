import {useState} from 'react';
import './works.scss';

export default function Works() 
{
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: '1',
            icon: 'static/discord.png',
            title: 'Discord Python Bot',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'static/friendlybot.png',
            link: 'https://github.com/chrischen842/Friendly-Bot',
        },
        {
            id: '2',
            icon: 'static/fullstackicon.png',
            title: 'Full Stack Application',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: '',
            link: '',
        },
        {
            id: '3',
            icon: 'static/r.png',
            title: 'Connect Four',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'static/connectfourtest.png',
            link: 'https://github.com/ShaimaaAliECE/lab2-chrischen842',
        },
        {
            id: '4',
            icon: 'static/rpgicon.png',
            title: 'Slime Slayer',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: 'static/rpggametest.png',
            link: 'https://github.com/JiyongSong1/SE2250_jsong386',
        },
    ]

    const handleClick = (way) =>{
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
    <div className='works' id = 'works'>
        <div 
            className='slider' 
            style = {{transform: `translateX(-${currentSlide * 100}vw)`}}
        >
            {data.map(d => (
            <div className='container'>
                <div className='item'>
                    <div className='left'>
                        <div className="leftContainer">
                            <div className="imageContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <a href={d.link} target="_blank" rel="noopener noreferrer" ><span>GitHub</span></a>
                        </div>    
                    </div>        
                    <div className='right'></div>
                        <div className='imageContainer'>
                            <img src={d.img} alt="" />
                        </div>
                </div>
            </div>))}
        </div>
        <img src="static/arrow.png" className='arrow left' alt="" onClick = {() => handleClick('left')}/>
        <img src="static/arrow.png" className='arrow right' alt="" onClick = {() => handleClick()}/>
    </div>
    );
}
