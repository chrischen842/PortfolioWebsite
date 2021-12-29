import './aboutMe.scss'
import {GitHub} from '@material-ui/icons';

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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti explicabo, eum rerum molestiae repellat, deleniti delectus labore, esse ratione debitis id doloremque cupiditate veritatis placeat autem error ipsa deserunt earum.
                    </p>
                </div>  
                <div className='icon'>
                    <GitHub onClick={() => window.open('https://github.com/chrischen842', "_blank")}/>
                </div>     
            </div>
        </div>
    )
}
