import React from 'react';
import style from './navbar.module.css'
import {FaCashRegister, FaThList} from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {SiBuymeacoffee} from 'react-icons/si'

function navbar(props) {

    return (
        <div className={style.container}>
            <h2>Fluxo de Processos</h2>


            <ul className={style.lista}>
                <li>
                    <Link to="/" className={style.item}>
                    <FaCashRegister /> Cadastro
                    </Link>
                </li>

                <li>
                  <Link to="/clientes" className={style.item}>
                  <FaThList /> Lista de clientes
                  </Link>
                </li>
                
                <li>
                <Link to="/clientes" className={style.item}>
                  <SiBuymeacoffee /> Compras por cliente
                  </Link>
                </li>
            </ul>
            
        </div>
    );
}

export default navbar;
