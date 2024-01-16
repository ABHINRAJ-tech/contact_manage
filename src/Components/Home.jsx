//Home.jsx
import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className="sub-container">
    <div>
        <h1><center>CONTACT MANAGER</center></h1>
        <button>
        <Link to={"/SignUp"}>SignUp</Link>
        </button>
        

        <button>
        <Link to={"/Login"}>LOGIN</Link>
        </button>
        
        <br/>
        <br/>
      
    </div>
    </div>
    </div>
  )
}

export default Home
