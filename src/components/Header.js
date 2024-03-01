import Logo from './Logo';

const Header = () => {
    return (
        <div className="header">
            <div className="nav-items">
                <div className="logoContainer">
                    <Logo/>
                </div>
                <div>
                    <>Location</>
                </div>
                <div className="searchBar">
                    <input type="text" name="search" placeholder="Search"></input>
                    <button id="search">Search</button>
                </div>
            </div>
            <div className="nav-items">
                <div>Cart</div>
                <div>Sign-in</div>
            </div>
        </div>
    );
}

export default Header;