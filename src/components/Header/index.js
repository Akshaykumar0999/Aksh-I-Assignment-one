import {BiMenu} from 'react-icons/bi'
import {IoMdArrowDropdown} from 'react-icons/io'

import './index.css'

const Header = () => (
    <div className='Header-container-card'>
        <nav className='nav-container'>
            <button type="button" className='menu-button'>
                <BiMenu className='icon-menu'/>
            </button>
            <div className='name-select'>
                <p className='names'>Hi, admin</p>
                <IoMdArrowDropdown className='icon-select' size={25}/>
            </div>
        </nav>
    </div>
)

export default Header