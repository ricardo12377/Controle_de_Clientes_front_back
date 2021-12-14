import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import style from './clintes.module.css'
import {FaSearch} from 'react-icons/fa'

function Clientes() {
  
    const [employeeList, setEmployeeList] = useState([])
    const [newName, setNewName] = useState(0)
    const [edit, setEdit] = useState(false)
    const [newEmail, setNewEmail] = useState([])
    const [newTelefone, setNewTelefone] = useState([])
    const [procurar, setProcurar] = useState([])

    const getEmployees = () => {
      
        Axios.get('http://localhost:3006/employees')
        .then((response) => {
          setEmployeeList(response.data);
        })
      }
      
      const updateEmployeeEmail = (id) => {
        Axios.put('http://localhost:3006/updateemail', {email: newEmail, id:id})
        .then((response) => {
          setEmployeeList(employeeList.map((val) => {
            return val.id == id ? {id: val.id, name: val.name, email: newEmail, telefone: val.telefone} : val
          }))
        })
        document.location.reload(true)
      }

      const updateEmployeeName = (id) => {
        Axios.put('http://localhost:3006/updatename', {name: newName, id:id})
        .then((response) => {
          setEmployeeList(employeeList.map((val) => {
            return val.id == id ? {id: val.id, name: newName, telefone: val.telefone, email: val.email} : val
          }))
        })
       document.location.reload(true)
      }

      const updateEmployeeTelefone = (id) => {
        Axios.put('http://localhost:3006/updatetelefone', {telefone: newTelefone, id: id})
        .then((response) => {
          setEmployeeList(employeeList.map((val) => {
            return val.id == id ? {id: val.id, name: val.name, telefone: newTelefone, email: val.email} : val
          }))
        })
        document.location.reload(true)
      }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3006/delete/${id}`)
    .then((response) => {
      setEmployeeList(employeeList.filter((val) => {
        return val.id != id
      }))
    })
  }

    return (
        <div className={style.container} onMouseOver={getEmployees}>

          <div className={style.procurar}>
            <div className={style.procurar_icon}> <FaSearch /> </div>
            <input type="text" placeholder='Procure pelo nome...' onChange={(e) => setProcurar(e.target.value) } />
            
          </div>
          {employeeList ? employeeList.filter((val) => {
            if(procurar == ""){
              return val
            } else if (val.name.toLowerCase().includes(procurar.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
              return <div >
                    
           <div className={style.emp_card}>
           <div className={style.infos}>
               Name:
                {val.name}
                <input type="text" placeholder='Altere o Nome'  onChange={(e) => setNewName(e.target.value)} />
               <button onClick={() => {updateEmployeeName(val.id)}}> {""} Update</button>
            </div>

           <div className={style.infos}>
             Telefone:
              {val.telefone}
              <input type="text" placeholder='Altere o telefone'  onChange={(e) => setNewTelefone(e.target.value)}  />
              <button onClick={() => {updateEmployeeTelefone(val.id)}}> {""} Update</button>
              </div>
           
           <div className={style.infos}>
               Email:
               {val.email}
               <input type="text" placeholder='Altere o E-mail'  onChange={(e) => setNewEmail(e.target.value)} />
               <button onClick={() => {updateEmployeeEmail(val.id)}}> {""} Update</button>
               </div>
           
           <div>
               <button onClick={() => {deleteEmployee(val.id)}} className={style.delete} >Delete</button>
           </div>
           
           </div>
           
           </div>
          }) : null}
        
        </div>
    );
}

export default Clientes;



