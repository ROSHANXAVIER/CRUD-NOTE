import './Sidebar.css';
import {Link} from 'react-router-dom';
import {MdCreate} from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import { MdOutlineUpdate ,MdDelete} from "react-icons/md";
function Sidebar() {
  return (
    <div>
      <body>
      <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="/">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            DASHBOARD
                        </span>
                    </a>
                </li>
                <p></p>
                <li class="has-subnav">
                    <a href="/create">
                        <i class="fa  fa-2x"><MdCreate/></i>
                        <span class="nav-text">
                            CREATE
                        </span>
                    </a>
                    
                </li>
                <p></p>
                <li class="has-subnav">
                    <a href="/search">
                       <i class="fa  fa-2x"><FaSearch/></i>
                        <span class="nav-text">
                        SEARCH
                        </span>
                    </a>
                    
                </li>
                <p></p>
                <li class="has-subnav">
                    <a href="/update">
                       <i class="fa fa-2x"><MdOutlineUpdate/></i>
                        <span class="nav-text">
                            UPDATE
                        </span>
                    </a>
                   
                </li>
                <p></p>
                <li>
                    <a href="/delete">
                        <i class="fa  fa-2x"><MdDelete/></i>
                        <span class="nav-text">
                           DELETE
                        </span>
                    </a>
                </li>
                
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            POWERED BY ROSHAN XAVIER
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  </body>
     
    </div>
  );
}

export default Sidebar;
