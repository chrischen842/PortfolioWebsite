import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id = 'portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Discord Python Bot</li>
                <li>Full Stack MERN</li>
                <li>Connect-4 Web App</li>
                <li>RPG Game</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img 
                        src="static/discordicon.png" 
                        alt="" 
                    />
                    <h3>Click Me!</h3>
                </div>
            </div>
        </div>
    )
}
