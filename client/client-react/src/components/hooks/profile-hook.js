import React, { useContext , useState , useEffect } from "react";
import { AuthContext } from "../context/auth-context";
import { getOnlyUserById } from "../../api/UserAPI";


export function useProfile (userId){
  //const auth = useContext(AuthContext);
  //const userId = auth.userId;
  const [userProfile, setUser] = useState();

  useEffect(() => {
    getOnlyUserById(userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);
  const user = userProfile;
  return userProfile;
}
