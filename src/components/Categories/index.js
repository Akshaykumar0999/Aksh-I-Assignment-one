// import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Pagenation from '../Pagenation'
import {TbMobiledata} from 'react-icons/tb'
import {GrEdit, GrFormPrevious} from 'react-icons/gr'
import {AiTwotoneTool} from 'react-icons/ai'
import {RiDeleteBinLine} from 'react-icons/ri'
import {PiFlowerLotusFill, PiGuitarFill} from 'react-icons/pi'
import {FaPlaneDeparture, FaHandshake} from 'react-icons/fa'
import {GiBigDiamondRing, GiLongAntennaeBug, GiEgyptianProfile} from 'react-icons/gi'
import {BsBuilding, BsFillPersonFill} from 'react-icons/bs'
import { MdNavigateNext} from 'react-icons/md'
import Modules from '../Modules'
import './index.css'

const data = [
    {
        id: 1,
        Icon: AiTwotoneTool,
        name: 'Appliance Repair',
        isTrending : true,
        Active: true,
    },
    {
        id: 2,
        Icon: PiFlowerLotusFill,
        name: 'Beauty & Spa',
        isTrending : true,
        Active: true,
    }
    ,
    {
        id: 3,
        Icon: FaPlaneDeparture,
        name: 'Travel',
        isTrending : false,
        Active: true,
    },
    {
        id: 4,
        Icon: GiBigDiamondRing,
        name: 'Weddings & Events',
        isTrending : false,
        Active: true,
    },
    {
        id: 5,
        Icon: GiLongAntennaeBug,
        name: 'Pest Control',
        isTrending : false,
        Active: true,
    },
    {
        id: 6,
        Icon: BsBuilding,
        name: 'Real Estate',
        isTrending : true,
        Active: true,
    },
    {
        id: 7,
        Icon: FaHandshake,
        name: 'Bussiness Services',
        isTrending : false,
        Active: true,
    },
    {
        id: 8,
        Icon: PiGuitarFill,
        name: 'Hobbies',
        isTrending : true,
        Active: true,
    },
    {
        id: 9,
        Icon: GiEgyptianProfile,
        name: 'Mental Health Care',
        isTrending : false,
        Active: true,
    },
    {
        id: 10,
        Icon: BsFillPersonFill,
        name: 'Job',
        isTrending : false,
        Active: true,
    },    
    {
        id: 11,
        Icon: FaPlaneDeparture,
        name: 'Travel',
        isTrending : false,
        Active: true,
    },
    {
        id: 12,
        Icon: GiBigDiamondRing,
        name: 'Weddings & Events',
        isTrending : false,
        Active: true,
    },
    {
        id: 13,
        Icon: GiLongAntennaeBug,
        name: 'Pest Control',
        isTrending : false,
        Active: true,
    },
    {
        id: 14,
        Icon: BsBuilding,
        name: 'Real Estate',
        isTrending : true,
        Active: true,
    },
    {
        id: 15,
        Icon: FaHandshake,
        name: 'Bussiness Services',
        isTrending : false,
        Active: true,
    },
    {
        id: 16,
        Icon: PiGuitarFill,
        name: 'Hobbies',
        isTrending : true,
        Active: true,
    },
    {
        id: 17,
        Icon: GiEgyptianProfile,
        name: 'Mental Health Care',
        isTrending : false,
        Active: true,
    },
    {
        id: 18,
        Icon: BsFillPersonFill,
        name: 'Job',
        isTrending : false,
        Active: true,
    }
]


const Categories = () => {
    const perPage=data.slice(0,10)
    // const [perPage, setPerpage] = useState([])
    // setPerpage(data.slice(0, 10))
    // const pageHandler = (pageNum) => {
    //     setPerpage(data.slice((pageNum*10)-10, pageNum*10))
    // }
    return(
        <div className='add-categories-conatiner'>
            <Modules />
            <div className='category-input-card'>
                <div className='dashboard-category-card'>
                    <h1 className='heading'>Categories</h1>
                    <p className='side-header'>Dashboard / Categories</p>
                </div>
                <div className='tabel-container'>
                    <Link to='/add-category' className="link-card">
                        <button className='add-new-button'>Add New</button>
                    </Link>
                <div className='search-details'>
                            <div className='card'>
                                <p className='label'>Show</p>
                                <select>
                                    <option>1</option>
                                </select>
                                <p className='label'>entires</p>
                            </div>
                            <div className='input-card-cateories'>
                                <label className='label'>Search</label>
                                <input className='input-search' type="search" />
                            </div>
                </div>
                <div className='tabel-card-container'>
                    <table className='tabel-card'>
                        <thead className='tabel-headers-card'>
                                    <th className='index'>#</th>
                                    <th className='image-icon'><TbMobiledata /> Image</th>
                                    <th className='name-data'><TbMobiledata /> Name</th>
                                    <th className='is-active'><TbMobiledata /> Status</th>
                                    <th className='buttons-card'><TbMobiledata /> Actiion</th>
                        </thead>
                        <tbody className='tabel-data-details'>
                            {perPage.map((eachItem ) => (
                                <tr className='row-table' key={eachItem.id}>
                                    <td className='index'>{eachItem.id}</td>
                                    <td className='image-icon'>
                                            <div className='icon-data'>
                                                {<eachItem.Icon size={20}/>}
                                            </div>
                                    </td>
                                    <td className='name-data-card'>
                                            <p className='paragraph-name'>{eachItem.name} {eachItem.isTrending && <span className='trending-btn'>Trending</span>} </p>
                                    </td>
                                    <td className='is-active'>{eachItem.Active && <p className='btn-card'>Active</p>}</td>
                                    <td className='buttons-card'>
                                            <button className='edit-btn'>
                                                <GrEdit />
                                            </button>
                                            <button className='delete-btn'>
                                                <RiDeleteBinLine />
                                            </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <div className='pagenation-card'>
                    <p>Showing 1 to 10 Pages</p>
                    <div className='next-page-icons'>
                        <GrFormPrevious />
                        <Pagenation data={data} />
                        <MdNavigateNext />
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
    
}
export default Categories