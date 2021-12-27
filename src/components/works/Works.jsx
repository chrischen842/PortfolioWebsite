import './works.scss';

export default function Works() 
{
    return (
    <div className='works' id = 'works'>
        <div className='slider'>
            <div className='container'>
                <div className='item'>
                    <div className='left'>
                        <div className="leftContainer">
                            <div className="imageContainer">
                                <img src="static/discord.png" alt="" />
                            </div>
                            <h2>Discord Bot</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Beatae sapiente iure similique, itaque velit, aliquid deleniti 
                            </p>
                            <span>GitHub</span>
                        </div>    
                    </div>        
                    <div className='right'></div>
                        <div className='imageContainer'>
                            <img src="static/friendlybot.png" alt="" />
                        </div>
                </div>
            </div>
        </div>
        <img src="static/arrow.png" className='arrow left' alt="" />
        <img src="static/arrow.png" className='arrow right' alt="" />
    </div>
    );
}
