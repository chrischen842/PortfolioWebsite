import './contact.scss'

export default function Contact()
{
    // const handleSubmit = (e) => {e.preventDefault();}
    return(
        <div className= 'contact' id = 'contact'>
            <div className='left'>
                <img src="static/handshake.svg" alt="" />
            </div>
            <div className='right'>
                <h2>Let's keep in touch</h2>
                <form action = "https://formsubmit.co/chrischen842@gmail.com" method = "POST">
                    <input type="hidden" name="_subject" value="new email"/>
                    <input type="email" name="Email" placeholder="Email Address" required/>
                    <input className='textarea' type="text" name="Message" placeholder="Write Message" required/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}