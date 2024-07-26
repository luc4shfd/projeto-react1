import { useState } from 'react'
import './Header.css'

function Header() {
  

  return (
    <div className='container'>
        <h1>Login</h1>
        <hr />

        <div className="label">
          <label >Digite seu E-mail:</label>
          <input type="text" placeholder='exemple@gmail.com'/>

          <label >Digite sua Senha:</label>
          <input type="password" placeholder='Digite a senha'/>

        </div>
    </div>
  )
}

export default Header
