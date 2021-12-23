import './topbar.scss'
import {Phone, Mail} from '@material-ui/icons';

export default function Topbar({openMenu, setOpenMenu}) {
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Chris.</a>
                    <div className="itemContainer">
                        <Phone className='icon'/>
                        <span>+1 (647)-822-8765</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>chrischen842@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className="hamburger">
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
