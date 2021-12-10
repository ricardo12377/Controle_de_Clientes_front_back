import React, { useState } from 'react'
import style from './Home.module.css'
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';


function Home() {

   
  const [name, setName] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [email, setEmail] = useState('')
  const [employeeList, setEmployeeList] = useState([])
  const [newEmail, setNewEmail] =useState(0)

  const addEmployee =  () => {
    Axios.post('http://localhost:3006/create', {
      name: name,
      telefone: telefone,
      email: email
    }).then(() => {
      setEmployeeList([...employeeList, {
        name: name,
        telefone: telefone,
        email: email
      }])
    })
    document.location.reload(true)
  }

  
  return (
    <div className={style.app}>
                     
                     <h4>Adicionar Cliente</h4>

      <div  className={style.form} >
      <label>Nome</label>
      <input type="text"  onChange={(e) => setName(e.target.value)} />

      <label>Telefone:</label>
      <input type="number"  onChange={(e) => setTelefone(e.target.value)} />

      <label>E-mail</label>
      <input type="text"  onChange={(e) => setEmail(e.target.value)} />

      <button onClick={addEmployee} >Adicionar Cliente</button>

      </div>
      
     
      
     
     
     
    </div>
  );
}

export default Home;
