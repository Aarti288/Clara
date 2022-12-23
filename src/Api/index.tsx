import { FormDatatype } from "../Types";
import axios from "axios";
const url = "https://json-server-deploy-v1.herokuapp.com/";

function createNewUser(data: FormDatatype) {
  axios
    .post(url + "users", data)

    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export default createNewUser;

export const loginUser = async (data: { email: string; password: string }) => {
  let userData: FormDatatype[] = [];
  console.log("userdata", userData);
  await axios
    .get(url + "users")
    .then((res) => {
      userData = res.data;
    })

    .catch((err) => console.log(err));
  userData = userData.filter(
    (obj: FormDatatype) =>
      obj.Email &&
      obj.password &&
      obj.Email == data.email &&
      obj.password == data.password
  );
  return userData;
};
