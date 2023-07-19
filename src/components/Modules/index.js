import { Component } from 'react'
import ModuleData from '../ModuleData'

import {AiFillFire, AiOutlineFolder, AiFillSetting} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {FaPlug, FaQuestionCircle,  FaDollarSign} from 'react-icons/fa'
import {LuFolders} from 'react-icons/lu'
import {TbReportSearch} from 'react-icons/tb'
import {GoMultiSelect } from 'react-icons/go'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {MdOutlinePrivacyTip, MdHomeRepairService} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {BsPerson} from 'react-icons/bs'
import './index.css'

const VariousModulesDetailsList = [
    {
        id: 0,
        IconComponent: AiFillFire,
        IconName: "Dashboard",
        linkTo: '/dashboard',
    },
    {
        id: 1,
        IconComponent: MdHomeRepairService,
        IconName: "Service Seekers",
        linkTo: '/',
    },
    {
        id: 2,
        IconComponent: SiHomeassistantcommunitystore,
        IconName: "Service Providers",
        linkTo: '/',
    },
    {
        id: 3,
        IconComponent: FaPlug,
        IconName: "Jobs",
        linkTo: '/dashboard',
    },
    {
        id: 4,
        IconComponent: AiOutlineFolder,
        IconName: "Categories",
        linkTo: '/add-category',
    },
    {
        id: 5,
        IconComponent: LuFolders,
        IconName: "Sub Categories",
        linkTo: '/sub-categories',
    },
    {
        id: 6,
        IconComponent: FaDollarSign,
        IconName: "Earning",
        linkTo: '/',
    },
    {
        id: 7,
        IconComponent: TbReportSearch,
        IconName: "Repots",
        linkTo: '/',
    },
    {
        id: 8,
        IconComponent: GoMultiSelect,
        IconName: "Tikects",
        linkTo: '/',
    },
    {
        id: 9,
        IconComponent: IoIosNotificationsOutline,
        IconName: "Notifications",
        linkTo: '/',
    },
    {
        id: 10,
        IconComponent: MdOutlinePrivacyTip,
        IconName: "Privacy And Polacy",
        linkTo: '/',
    },
    {
        id: 11,
        IconComponent: FaQuestionCircle,
        IconName: "FAQ's",
        linkTo: '/',
    },
    {
        id: 12,
        IconComponent: AiFillSetting,
        IconName: "Settings",
        linkTo: '/',
    },
    {
        id: 13,
        IconComponent: ImProfile,
        IconName: "Roles",
        linkTo: '/dashboard',
    },
    {
        id: 14,
        IconComponent: BsPerson,
        IconName: "Admin Users",
        linkTo: '/',
    }

]

class Modules extends Component {
    state = {actId : VariousModulesDetailsList[0].id}

    updateActId = (id) => {
        this.setState({actId: id})
    }

    render(){
        const {actId} = this.state
        return(
            <div className='Dash-board-lists-container'>
                <h1 className='app-Main-heading'>WorkEzy</h1>
                <ul className='app-dash-board-lists'>
                    {VariousModulesDetailsList.map(eachItem => (<ModuleData key={eachItem.id} details={eachItem} updateActId={this.updateActId} isActive={actId === eachItem.id} />))}
                </ul>
                {/* <ul className='app-dash-board-lists'>
                    <Link to='/dashboard' className='Link-card'>
                        <li className='list-card'>
                            <AiFillFire className='icon' />
                            <p className='list-name'>Dashboard</p>
                        </li>
                    </Link>
                    <li className='list-card'>
                        <MdHomeRepairService className='icon' />
                        <p className='list-name'>Service Seekers</p>
                    </li>
                    <li className='list-card'>
                        <SiHomeassistantcommunitystore className='icon' />
                        <p className='list-name'>Service Providers</p>
                    </li>
                    <li className='list-card'>
                        <FaPlug className='icon' />
                        <p className='list-name'>Jobs</p>
                    </li>
                    <Link to="/add-category" className='Link-card'>
                        <li className='list-card'>
                            <AiOutlineFolder className='icon' />
                            <p className='list-name'>Categories</p>
                        </li>
                    </Link>
                    <Link to="/sub-categories" className='Link-card'>
                        <li className='list-card'>
                            <LuFolders className='icon' />
                            <p className='list-name'>Sub Categories</p>
                        </li>
                    </Link>
                    <li className='list-card'>
                        <FaDollarSign className='icon' />
                        <p className='list-name'>Earning</p>
                    </li>
                    <li className='list-card'>
                        <TbReportSearch className='icon' />
                        <p className='list-name'>Repots</p>
                    </li>
                    <li className='list-card'>
                        <GoMultiSelect className='icon' />
                        <p className='list-name'>Tikects</p>
                    </li>
                    <li className='list-card'>
                        <IoIosNotificationsOutline className='icon' />
                        <p className='list-name'>Notification</p>
                    </li>
                    <li className='list-card'>
                        <MdOutlinePrivacyTip className='icon' />
                        <p className='list-name'>Privacy And Polacy</p>
                    </li>
                    <li className='list-card'>
                        <FaQuestionCircle className='icon' />
                        <p className='list-name'>FAQ's</p>
                    </li>
                    <li className='list-card'>
                        <AiFillSetting className='icon' />
                        <p className='list-name'>Settings</p>
                    </li>
                    <li className='list-card'>
                        <ImProfile className='icon' />
                        <p className='list-name'>Roles</p>
                    </li>
                    <li className='list-card'>
                        <BsPerson className='icon' />
                        <p className='list-name'>Admin Users</p>
                    </li>
                </ul> */}
            </div>
        )
    }
} 

export default Modules