import React from "react";
import Nav from "./nav";
import { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";
import { useProfile } from "../hooks/profile-hook";


class Header extends React.Component{

  state = {
    loggedin: false,
  };

  componentDidMount() {
    this.setState({ loggedin: true });
  }

   render() {
    return (
      <header className="header">
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-3 col-md-3">
                  <div className="header__logo">
                      <a href="/">
                        <img src="img/logo-trans2.png" alt=""/>
                        </a>
                  </div>
              </div>
              <div className="col-lg-9 col-md-9">
                  <div className="header__nav">
                    <Nav></Nav>
                  </div>
              </div>
          </div>
          <div id="mobile-menu-wrap"></div>
      </div>
    </header>
    );
  }
}


// class Header extends React.Component{
//   //user = () => {useProfile()}
//   //function Header(){
//   //const user = props.userProfile;
//   //const auth = useContext(AuthContext);
//   // const [user, setUser] = useState();
//   // useEffect(() => {
//   //   getOnlyUserById(auth.userId).then((res) => {
//   //     setUser(res.data);
//   //   });
//   // }, [auth]);
//   //console.log(auth);
//   //const user = useProfile(auth.userId);
//   //console.log(user);
//   //console.log(User());
//   state = {
//     loggedin: false,
//   };

//   componentDidMount() {
//     this.setState({ loggedin: true });
//   }


//   render() {
//     console.log('HEADER Render lifecycle')
//     return (
//       <header className="header">
//       <div className="container-fluid">
//           <div className="row">
//               <div className="col-lg-3 col-md-3">
//                   <div className="header__logo">
//                       <a href="/">
//                         <img src="img/logo-trans2.png" alt=""/>
//                         </a>
//                   </div>
//               </div>
//               <div className="col-lg-9 col-md-9">
//                   <div className="header__nav">
//                     <Nav ></Nav>
//                   </div>
//               </div>
//           </div>
//           <div id="mobile-menu-wrap"></div>
//       </div>
//     </header>
//     );
//   }
// }

export default Header;
