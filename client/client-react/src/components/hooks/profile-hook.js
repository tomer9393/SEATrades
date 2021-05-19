import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";


// const auth = useContext(AuthContext);

// const [user, setUser] = useState();
// useEffect(() => {
//   getOnlyUserById(auth.userId).then((res) => {
//     setUser(res.data);
//   });
// }, [auth]);


export function useProfile (userId){
  const auth = useContext(AuthContext);
  const [userProfile, setUser] = useState();

  useEffect(() => {
    getOnlyUserById(userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);
  console.log(userId);
  console.log(auth);
  console.log(AuthContext);
  console.log(userId);
  console.log(userProfile);
  const user = userProfile;
  return userProfile;
}
