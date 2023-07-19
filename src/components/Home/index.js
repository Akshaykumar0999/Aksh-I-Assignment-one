import {Component} from 'react'
import Header from '../Header'
import Modules from '../Modules'

import { AiOutlineFolder} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import { FaRegUser, FaBicycle, FaDollarSign, FaUserAlt, FaHandHoldingWater} from 'react-icons/fa'
import { MdOutlineCancel} from 'react-icons/md'
import {BiWorld, BiLogoTelegram} from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'
import './index.css'


class Home extends Component{
    render(){
        return(
            <div className='app-container'>
                <Modules />
                <div className='app-card-container'>
                    <div className='DashBoard-container'>
                        <Header />
                        <div className='Fields-container'>
                                <div className="field-card">
                                    <div className='dash-board-filed'>
                                        <h1 className='heading'>DashBoard</h1>
                                        <h1 className='side-header'>DashBoard / DashBoard</h1>
                                    </div>
                                    <div className='various-field-cards'>
                                        <div className='filed-item-card'>
                                            <FaRegUser size={60} className='field-icon'/>
                                            <h1 className='field-name'>Users(Today)</h1>
                                            <p className='field-users-count'>308<span className='span-count'>(+10)</span></p>
                                        </div>
                                        <div className='filed-item-card'>
                                            <SiHomeassistantcommunitystore size={60} className='field-icon'/>
                                            <h1 className='field-name'>Provider(Today)</h1>
                                            <p className='field-users-count'>170<span className='span-count'>(+10)</span></p>
                                        </div>
                                        <div className='filed-item-card'>
                                            <FaBicycle size={60} className='field-icon'/>
                                            <h1 className='field-name'>Task(Today)</h1>
                                            <p className='field-users-count'>0<span className='span-count'>(+0)</span></p>
                                        </div>
                                        <div className='filed-item-card'>
                                            <AiOutlineFolder size={60} className='field-icon'/>
                                            <h1 className='field-name'>Categories(Sub Categories)</h1>
                                            <p className='field-users-count'>20<span className='span-count'>(1%)</span></p>
                                        </div>
                                    </div>
                                    <div className='Earning-container'>
                                        <h1 className='earning-heading'>Earning Stats</h1>
                                        <div className='earning-cards-container'>
                                            <div className='earning-card'>
                                                <FaDollarSign className='dolor' size={20}/>
                                                <div>
                                                    <h1 className='earning-heading-is'>Total Earnings</h1>
                                                    <p className='earning-des'>Total:$727 Today:$60</p>
                                                </div>
                                            </div>
                                            <div className='earning-card'>
                                                <FaUserAlt className='profile' size={20}/>
                                                <div>
                                                    <h1 className='earning-heading-is'>Admin Earnings</h1>
                                                    <p className='earning-des'>Total:$105 Today:$10</p>
                                                </div>
                                            </div>
                                            <div className='earning-card'>
                                                <SiHomeassistantcommunitystore className='online-payments' size={20}/>
                                                <div>
                                                    <h1 className='earning-heading-is'>Online Payments</h1>
                                                    <p className='earning-des'>Total:250 Today:10</p>
                                                </div>
                                            </div>
                                            <div className='earning-card'>
                                                <FaHandHoldingWater className='dolor' size={20}/>
                                                <div>
                                                    <h1 className='earning-heading-is'>Offline Payments</h1>
                                                    <p className='earning-des'>Total:78 Today:2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='various-field-cards'>
                                        <div className='tasks-card'>
                                            <BiWorld size={20} color='#565679'/>
                                            <p className='headers'>Total Task</p>
                                            <p className='total-task'>350</p>
                                        </div>
                                        <div className='tasks-card'>
                                            <BiLogoTelegram size={20} color='#f2df33'/>
                                            <p className='headers'>Ongoing</p>
                                            <p className='ongoing-task'>10</p>
                                        </div>
                                        <div className='tasks-card'>
                                            <TiTick size={20} color='#27d078'/>
                                            <p className='headers'>Complete</p>
                                            <p className='completed-task'>330</p>
                                        </div>
                                        <div className='tasks-card'>
                                            <MdOutlineCancel size={20} color='#f75e5e'/>
                                            <p className='headers'>Cancel</p>
                                            <p className='canceled-task'>10</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home