import './aboutMe.scss'
import {GitHub, LinkedIn, Facebook, Instagram} from '@material-ui/icons';

export default function AboutMe() 
{
    return (
        <div className='aboutMe' id = 'aboutMe'>
            <div className='wrapper'>
                <h1>About Me</h1>
                <div className='imageContainer'>
                    <img src="static/chris.jpg" alt="" />
                </div>
                <div className='textContainer'>
                    <p className='text'>
                        My name is Chris Chen and I am a third year Software Engineering Student who is currently studying at the University of Western Ontario. My interests include coding, gaming, and trying various foods from different cultures.  
                    </p>
                </div>  
                <div className='icon'>
                    <GitHub onClick={() => window.open('https://github.com/chrischen842', "_blank")}/>
                    <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/chris-chen-679849188/', "_blank")}/>   
                    <a className="textResume" href="static/ChrisChen_Resume.pdf" download><img src="https://img.icons8.com/ios/50/000000/open-resume.png" alt=""/></a>
                    <Facebook onClick={() => window.open('https://www.facebook.com/chris.chen.102977', "_blank")}/>  
                    <Instagram onClick={() => window.open('https://www.instagram.com/chrs999/', "_blank")}/>  
                </div>     
                <div className='button'>
                    
                </div>
            </div>
        </div>
    )
}
