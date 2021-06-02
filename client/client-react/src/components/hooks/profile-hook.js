import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getUserById } from "../../api/UserAPI";


// export function useProfile (Id){
//   //const auth = useContext(AuthContext);
//   //const userId = Id;
//   const [userProfile, setUser] = useState();
//   console.log(Id);
//   useEffect(() => {
//     getUserById(Id).then((res) => {
//       setUser(res.data);
//     });
//   }, [Id]);
//   const user = userProfile;
//   console.log(userProfile);
//   console.log(user);
//   return user;
// }

export function UserProfile (Id){
    const [user, setUser] = useState(undefined);
    useEffect(() => {
      getUserById(Id).then((res) => {
        setUser(res.data);
      });
    }, [Id]);
    return user;
  }

  export  function UserNull() {
    var [userNull, setuserNull] = useState(null);
    useEffect(() => {
      setuserNull(userNull);
      }
  ,  [userNull])
  }
