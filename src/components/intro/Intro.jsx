import './intro.scss';
import {init} from 'ityped';
import {useEffect, useRef} from 'react';

export default function Intro() 
{
    const textReference = useRef();
    useEffect(() => 
    {
        init(textReference.current, 
            { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Software Engineering Student', 'Bubble Tea Enthusiast', 'Competitive Gamer'], 
            });
    },[]);

    return (
        
        <div className='intro' id = 'intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src = "static/mefishing.jpg" alt = "" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey There, I'm</h2>
                        <div className='name'>
                            <h1>Chrs Chen</h1>
                        </div>
                    <h3><span ref = {textReference}></span></h3>
                </div>
                <a href='#aboutMe'>
                    <img src ='static/arrow.png' alt = '' />
                </a>
            </div>
        </div>
    )
}
