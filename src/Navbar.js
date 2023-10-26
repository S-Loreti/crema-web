import './App.css';

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-xl" style={{ backgroundColor: '#F3E6D4'}}>
            <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a className="navbar-brand" href="/" style={{borderBottom: '1px solid #111516' }}>
                        <img width="225px" src={require(`/Users/sebastianoloreti/Code/FAR-Test/React/finance-app/src/header1.png`)} alt="Brand Logo" />
                    </a>
                    <div></div>
                </div>
                <div className='navbar'>
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{ color: '#111516' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Locator" style={{ color: '#111516' }}>Café Locator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Roasters" style={{ color: '#111516' }}>Roasters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Guide" style={{ color: '#111516' }}>Guide</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Shop" style={{ color: '#111516' }}>Shop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar; 