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
            desc: "I coded a discord bot with python that provides positive encouragement when it detects sad words via discord chat. This is done through a list of sad words which the discord bot will search and compare. You are also able to add new sad keywords or encouragements which allows for customizability. The main reason behind coding this bot was to look for real world applications of python.",
            img: 'static/friendlybot.png',
            link: 'https://github.com/chrischen842/Friendly-Bot',
        },
        {
            id: '2',
            icon: 'static/fullstackicon.png',
            title: 'Full Stack Application',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            img: '',
            link: 'https://github.com/chrischen842/BlogApp',
        },
        {
            id: '3',
            icon: 'static/fullstackicon.png',
            title: 'Personal Website',
            desc: 'I coded this website as a side project to display a portfolio of my works creatively. I felt that coding a website would not only make my job applications stand out but would also benefit me to become more comfortable with react. By coding this website, I learned a lot about front-end web development which will ultimately benefit me in the future.',
            img: 'static/website.png',
            link: 'https://github.com/chrischen842/PortfolioWebsite',
        },
        {
            id: '4',
            icon: 'static/r.png',
            title: 'Connect Four',
            desc: 'I constructed this replica of connect four for my Web Technologies course. The rules of this game are the same as the traditional connect four games where the goal is to get four coins in a row, column, or diagonally. Additionally, this game was coded in react and from this assignment, I learned a lot about how to use and apply the concepts of react.',
            img: 'static/connectfour.png',
            link: 'https://github.com/ShaimaaAliECE/lab2-chrischen842',
        },
        {
            id: '5',
            icon: 'static/rpgicon.png',
            title: 'Slime Slayer',
            desc: 'My group and I constructed Slime Slayer in Unity for our Software Construction course as our final project. The development of this game was split into 3 phases where we carefully designed the game along with all the UML diagrams concerning this game. Additionally, the majority of this game being coded in C#.',
            img: 'static/rpggamecrop.png',
            link: 'https://github.com/JiyongSong1/SE2250_jsong386',
        },
    ]

    const handleClick = (way) =>{
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
    <div className='works' id = 'works'>
        <h1>Projects</h1>
            <div 
                className='slider' 
                style = {{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map(d => (
                <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
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
