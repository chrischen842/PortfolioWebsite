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
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#works'>Works Directory</a>
                </li>
                <li onClick= {() => setOpenMenu(false)}>
                    <a href="#portfolio">Github Directory</a>
                </li>
                <li onClick = {() => setOpenMenu(false)}>
                    <a href = '#contact'>Contact Me</a>
                </li>
            </ul>
        </div>
    )
}
