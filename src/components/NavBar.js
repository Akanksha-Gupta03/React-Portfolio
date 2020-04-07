import React,{useState} from 'react';
import "../style/NavBar.css";
import { Link, useLocation } from "react-router-dom";

/* activePage  | changePage-call-back */
function NavBar() {
  const location = useLocation();
  const [isShown, setShown] = useState(false);
  let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;
  const style = {
      logo: { width: '64px', height: '64px' }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
          <img src='https://i.pinimg.com/originals/6e/d2/43/6ed243fcb389252740f7c4c41e07b560.jpg' alt="" style={style.logo} />
      </Link>
      {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShown(!isShown)}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={showClass}id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/homepage" className={location.pathname === "/homePage" ? "nav-link active" : "nav-link"}>
             <p class="p">Home</p>
            </Link>
          </li>          
          <li className="nav-item">
            <Link to="/aboutpage" className={location.pathname === "/aboutpage" ? "nav-link active" : "nav-link"}>
              <p class="p">About Me</p>
            </Link>
          </li> 
          <li className="nav-item">
            <Link to="/project" className={location.pathname === "/project" ? "nav-link active" : "nav-link"}>
              <p class="p">Project</p>
            </Link>
          </li>                   
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              <p class="p">Contact</p>
            </Link>
          </li>                   
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;