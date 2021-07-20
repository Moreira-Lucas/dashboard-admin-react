import './style.css';
import logo from '../../assets/logo.svg';


const SideBar = ({sideBarOpen, closeSideBar}) =>{
    return(
        <div className={sideBarOpen?"sideBar--responsive":""} id="sidebar">
            <div className="sideBar--title">
                <div className="sideBar--img">
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/08/servicenow_logo.png" alt="logo" />
                    <h1>ServiceLater</h1>

                </div>


                <i 
                onClick={()=>closeSideBar()}
                className="fa fa-times"
                id="sideBarIcon"
                aria-hidden="true"
                ></i>

            </div>

            <div className="sideBar--menu">
                <div className="sideBar--link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                
                <div className="sideBar--link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Administrative area</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-building"></i>
                    <a href="#">Stores</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-archieve"></i>
                    <a href="#">Products</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categories</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Requests</a>
                </div>

                <h2>Clients</h2>
                <div className="sideBar--link">
                    <i className="fa fa-male"></i>
                    <a href="#">Admin</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-user-circle"></i>
                    <a href="#">User</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payments</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">Platform</a>
                </div>

                <div className="sideBar--link">
                    <i className="fa fa-file-alt"></i>
                    <a href="#">Policies</a>
                </div>

                <div className="sideBar--logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default SideBar;