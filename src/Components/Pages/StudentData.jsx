import React from 'react'
import NavBar from '../Utilities/NavBar'
import './pages.css'
import { NavLink } from 'react-router-dom'

const StudentData = () => {
  return (
    <div>
        <NavBar/>

        <div className="data-table">
        <header className="header">
            <span className="title">Students Details</span>
            <button>
                Add new student
            </button>
        </header>

        <div>
            <table border={1} cellPadding={10} cellSpacing={0} className='table-data'>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
              <tr>
                <td>Satheesh</td>
                <td>23</td>
                <td>MERN</td>
                <td>September</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Kushal</td>
                <td>24</td>
                <td>MERN</td>
                <td>June</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Rakshith</td>
                <td>24</td>
                <td>MERN</td>
                <td>March</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
              <tr>
                <td>Bharath</td>
                <td>24</td>
                <td>MERN</td>
                <td>April</td>
                <td><NavLink>Edit</NavLink></td>
              </tr>
            </table>
        </div>

        </div>
    </div>
  )
}

export default StudentData