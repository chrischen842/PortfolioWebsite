import './aboutMe.scss'
import {GitHub, LinkedIn, Facebook, Instagram} from '@material-ui/icons';

export default function AboutMe() 
{
    return (
        <div className='aboutMe' id = 'aboutMe'>
            <div className='wrapper'>
                <h1>About Me</h1>
                <div className='imageContainer'>
                    <img src="static/fill.png" alt="" />
                </div>
                <div className='textContainer'>
                    <p className='text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo, eum rerum molestiae repellat, deleniti delectus labore, esse ratione debitis id doloremque cupiditate veritatis placeat autem error ipsa deserunt earum.
                    </p>
                </div>  
                <div className='icon'>
                    <GitHub onClick={() => window.open('https://github.com/chrischen842', "_blank")}/>
                    <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/chris-chen-679849188/', "_blank")}/>   
                    <Facebook onClick={() => window.open('https://www.facebook.com/chris.chen.102977', "_blank")}/>  
                    <Instagram onClick={() => window.open('https://www.instagram.com/chrs999/', "_blank")}/>  
                </div>     
                <div>
                          
                </div>
            </div>
        </div>
    )
}
