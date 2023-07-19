import {Component} from 'react'

import Header from '../Header'
import Modules from '../Modules'
import './index.css'

class AddCategories extends Component {
    render(){
        return(
            <div className='add-category-container'>
                <Modules />
                <div className='add-category-card'>
                    <Header />
                    <div className='category-input-card'>
                        {/* <p className='Error-msg'>For Security Reason CRUD Operations Is not Availabel In Emo Version</p> */}
                        <div className='dashboard-category-card'>
                            <h1 className='heading'>Add Subcategory</h1>
                            <p className='side-header'>Dashboard / subcategories / Add Subcategory</p>
                        </div>
                        <div className='input-category-container'>
                            <div className='input-name-card-subCategory'>
                                <div className='inputs-card-subCategory'>
                                    <h1 className='name-is'>Name:</h1>
                                    <input className='input' type="text" />
                                </div>
                                <div className='inputs-card-subCategory'>
                                    <h1 className='name-is'>Category:</h1>
                                    <select className='input'>
                                        <option>Applience Repair</option>
                                        <option>-</option>
                                        <option>-</option>
                                        <option>-</option>
                                    </select>
                                </div>
                            </div>
                            <div className='file-input-card'>
                                <h1 className='name-is'>Icon:</h1>
                                <input type="file"/>
                            </div>
                            <div className='switches-card'>
                                <div className='switch-card'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <p className='label-card'>Best Service</p>
                                </div>
                                <div className='switch-card'>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <p className='label-card'>Status</p>
                                </div>
                            </div>
                            <button type="button" className='submit-button'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddCategories