import React from 'react';
import { Link } from 'react-router-dom';
import Createcard from './CreateCard';
export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light  container-fluid boder-bottom">
                <div className="container">
                    <Link className="navbar-brand" to="/"><h2 id='logo'><img src="https://img.icons8.com/ios/50/000000/book.png" />
                        Books
                    </h2></Link>


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/" > <h5><i class="fas fa-home"></i> Home</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/create"><h5><i class="fas fa-book-medical"></i> Create</h5></Link>
                        </li>

                    </ul>


                </div>
            </nav >


        </>
    )
}
