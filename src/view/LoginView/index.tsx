import React, { ReactComponentElement } from "react";
import "../LoginView/style.css";
import ActionComponent from "../../Components/ActionComponent";
import InputLabelComponent from "../../Components/InputLabelComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import CardComponent from "../../Components/CardComponent";
import { Navigate, useNavigate } from "react-router-dom";
import { FormDatatype } from "../../Types/index";
import { loginUser } from "../../Api";
import { useState } from "react";
import { loginAction } from "../../Action/index";
import { connect } from "react-redux";
import { formInputData } from "../../Types/index";
import showicon from "../../Components/Image/show-password-icon.png";
import hideicon from "../../Components/Image/password-eye-icon.png";

import { type } from "os";
let label = "Welcome back!";
let sidelabel = "New user?";
let AnyAction = "Create an Account";
let buttonlabel = "Sign in";

function LoginView(props: any) {
  let FormData: FormDatatype = {
    Email: "",
    Firstname: "",
    Lastname: "",
    password: "",
  };

  let errors: FormDatatype = {
    Email: "",
    Firstname: "",
    Lastname: "",
    password: "",
  };
  const [formErrors, setFormErrors] = useState(FormData);
  const [formValues, setFormValues] = useState(FormData);
  const [togglepassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  let formInput: formInputData[] = [
    {
      fieldName: "Email",
      fieldType: "email",
      label: "Email",
      formvalue: formValues.Email,
      error: formErrors.Email,
    },
    {
      fieldName: "password",
      fieldType: "password",
      label: "Password",
      formvalue: formValues.password,
      error: formErrors.password,
    },
  ];

  const [isSubmit, setIsSubmit] = useState(true);
  function handleClick() {
    navigate("/CreateAccount");
  }

  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    if (!errors.Email && !errors.password) {
      setIsSubmit(true);
      const test: FormDatatype[] = await loginUser({
        email: formValues.Email,
        password: formValues.password,
      });

      if (test.length != 0) {
        props.loginAction(test[0]);

        navigate("/DashboardView");
        localStorage.setItem("isLogin", "1");

        localStorage.setItem("firstname", test[0].Firstname);
        localStorage.setItem("email", test[0].Email);
        localStorage.setItem("password", test[0].password);
      } else {
        alert("Invalid user");
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(e.target);
  };
  const validate = (values: FormDatatype) => {
    if (!values.Email) {
      errors.Email = "Please enter Email Address!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Please enter Password Field!";
    }

    return errors;
  };

  function showpasswordicon() {
    if (togglepassword) {
      setTogglePassword(false);
    } else {
      setTogglePassword(true);
    }
  }
  return (
    <div className="main-wrapper">
      <span className="clara-main-heading">Clara</span>
      <span className="clara-sub-main-heading">
        a community of creators changing
      </span>
      <span className="clara-sun-main-heading2">the future of brand deals</span>
      <div className="sub-main-wrapper">
        <CardComponent>
          <form onClick={handleSubmit} className="inner-card">
            <ActionComponent
              label={label}
              sidelabel={sidelabel}
              onClick={handleClick}
              Action={AnyAction}
            />
            {formInput.map((element) => {
              const { label, fieldType, fieldName, error, formvalue } = element;
              return (
                <>
                  <InputLabelComponent
                    label={label}
                    type={
                      fieldType === "password" && !togglepassword
                        ? fieldType
                        : "text"
                    }
                    name={fieldName}
                    value={formvalue}
                    onChange={handleChange}
                    error={error}
                  />
                  {fieldType == "password" ? (
                    <img
                      className="password-icon"
                      onClick={showpasswordicon}
                      src={togglepassword ? showicon : hideicon}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
            &nbsp;
            <span className="forgot-password">Forgot password?</span>
            <ButtonComponent onClick={handleSubmit} label={buttonlabel} />
          </form>
        </CardComponent>
      </div>
    </div>
  );
}
const mapDispatchtoprops = (dispatch: any) => ({
  loginAction: (data: FormDatatype) => dispatch(loginAction(data)),
});
export default connect(null, mapDispatchtoprops)(LoginView);
