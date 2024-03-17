import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../redux/store'

type Props = {}

const Header = (props: Props) => {
    const {userLogin} = useSelector((state:RootState) => state.userReducer)
    const renderLogin = () => {
        if(userLogin) {
            return <NavLink className='nav-link' to='/profile' aria-current="page">{userLogin.email}</NavLink>
        }
        return <NavLink className='nav-link' to='/login' aria-current="page">Login</NavLink>
    }

  return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
  <NavLink className="navbar-brand" to="/">Shoes Shop</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
                        {renderLogin()}
                    </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/demoantd">Demo Antd</NavLink>
      </li>
     
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

    
  )
}

export default Header