import React from "react";
import {Link} from "react-router-dom";

const Header = () => <nav>
        <div className="header">
          <h1>
            <Link to="/">Insert Post</Link>
          </h1>
          <div className="search"></div>
          <div className="login">
            <Link to="/signup">Log in</Link>
          </div>
        </div>
</nav>;
 
export default Header;
  
// export default function Header(){
//     return(
//         <>
//           <div className="header">
//             <h1>
//               <Link to="/">Insert Post</Link>
//             </h1>
//             <div className="search">
//             </div>
//             <div className="login">
//               <Link to="/signup">Log in</Link>
//             </div>

//           </div>
          
//         </>


//     );
        
// }