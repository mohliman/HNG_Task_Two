import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className='error'>
        <h1>Page Not Found</h1>
        <p><Link to='/'>Please go back to Home page.......</Link></p>
    </div>
  )
}

export default NotFound