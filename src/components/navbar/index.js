import './styles.css';
import avatar from '../../assets/avatar.png'



const Navbar = ({sideBarOpen, openSideBar}) => {
    return(
        <nav className="navbar">
            <div className="nav--icon" onClick={() => openSideBar()}  >
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="navbar--left">
                <a href="#">Products</a>
                <a href="#">Users</a>
                <a href="#" className="active--link">Admin</a>
            </div>

            <div className="navbar--right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;