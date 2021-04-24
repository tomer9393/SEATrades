import axios from "axios";
const baseUrl = "http://localhost:8081/users";
const ERROR = -1;

export const signUp = async (
  email,
  password,
  userId,
  firstName,
  lastName,
  phoneNumber
) => {
  
  try {
    const newUser = {
      email: email,
      password: password,
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };

    const user = await axios.post(`${baseUrl}/`, newUser);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOnlyUserById = async (id) => {
  //without ticket, tust user detail
  try {
    const user = await axios.get(`${baseUrl}/getUserById/${id}`);
    return user;
  } catch (error) {
    return ERROR;
  }
};

export const updateUser = async (
  id,
  email,
  password,
  userId,
  firstName,
  lastName,
  phoneNumber
) => {
  try {
    const newUser = {
      email: email,
      password: password,
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };

    const user = await axios.patch(`${baseUrl}/${id}`, newUser);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
