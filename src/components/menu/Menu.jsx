import './menu.scss'

export default function Menu({openMenu, setOpenMenu}) 
{
    return (
        <div className={'menu ' + (openMenu && 'active')}>
            <ul>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#intro'>Home</a>
                </li>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#aboutMe'>About Me</a>
                </li>
                <li onClick= {() => setOpenMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#works'>Works</a>
                </li>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#resume'>Resume</a>
                </li>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#contact'>Contacts</a>
                </li>
            </ul>
        </div>
    )
}
