
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Use Link component with `to` for routing */}
                <Link className="navbar-brand" to="/">Home</Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* Use Link with `to` instead of `<a href="">` */}
                        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">   About  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/PizzaList">  PizzaList   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AddPizza">   AddPizza   </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
