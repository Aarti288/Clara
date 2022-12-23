import "../../view/CreateAccountView/style.css";
import createNewUser from "../../Api";
import { useEffect } from "react";
import ActionComponent from "../../Components/ActionComponent";
import InputLabelComponent from "../../Components/InputLabelComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import CardComponent from "../../Components/CardComponent";
import creatorImg from "../../Components/Image/Creator-img.png";
import instagramimg from "../../Components/Image/instagram-img.png";
import tiktokimg from "../../Components/Image/tiktok-img.png";
import ghostsnapimg from "../../Components/Image/Ghost_snap-img.png";
import pinPinterest from "../../Components/Image/pin_pinterest-img.png";
import youtubeimg from "../../Components/Image/youtube-img.png";
import Upperimg from "../../Components/Image/upper-img.png";
import group from "../../Components/Image/Group.png";
import belowimg from "../../Components/Image/below-img.png";
import { useNavigate } from "react-router-dom";
import { FormDatatype, imgGrpData } from "../../Types/index";
import { useState } from "react";
import { formInputData } from "../../Types/index";

let label = "Create an Account";
let sidelabel = "Already have an account?";

let AnyAction = "Sign in";

let buttonlabel = "Create an Account";

let note1 = "  Please share a link of one of your profiles to get started";
const navigate = useNavigate();

let errors: FormDatatype = {
  Email: "",
  Firstname: "",
  Lastname: "",
  password: "",
};
let FormData: FormDatatype = {
  Email: "",
  Firstname: "",
  Lastname: "",
  password: "",
};
let imgData: imgGrpData[] = [
  {
    img: instagramimg,
  },
  {
    img: tiktokimg,
  },
  {
    img: youtubeimg,
  },
  {
    img: ghostsnapimg,
  },
  {
    img: pinPinterest,
  },
];
const [formValues, setFormValues] = useState(FormData);
const [formErrors, setFormErrors] = useState(FormData);
const [isSubmit, setIsSubmit] = useState(false);
let FormInput: formInputData[] = [
  {
    fieldName: "Email",
    label: "Email",
    fieldType: "email",
    formvalue: formValues.Email,
    error: formErrors.Email,
  },
  {
    fieldName: "Firstname",
    label: "Firstname",
    fieldType: "text",
    formvalue: formValues.Firstname,
    error: formErrors.Firstname,
  },
  {
    fieldName: "Lastname",
    label: "Lastname",
    fieldType: "text",
    formvalue: formValues.Lastname,
    error: formErrors.Lastname,
  },
  {
    fieldName: "password",
    label: "Password",
    fieldType: "password",
    formvalue: formValues.password,
    error: formErrors.password,
  },
];

function CreateAccountView() {
  function handleClick() {
    navigate("/");
  }
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      !errors.Email &&
      !errors.Firstname &&
      !errors.Lastname &&
      !errors.password
    ) {
      createNewUser(formValues);
      if (
        formValues.Email &&
        formValues.Firstname &&
        formValues.Lastname &&
        formValues.password
      ) {
        navigate("/CreateAccountReview");
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values: FormDatatype) => {
    const regex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
    if (!values.Firstname) {
      errors.Firstname = "Firstname is required!";
    }
    if (!values.Lastname) {
      errors.Lastname = "Lastname is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Please check email address!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    <div className="createaccount-wrapper">
      <img className="upper-img" src={Upperimg}></img>
      <img className="group-img" src={group}></img>
      <img className="below-img" src={belowimg}></img>
      <span className="clara-heading">Clara</span>
      <span className="clara-sub-heading">
        a community of creators changing
      </span>
      <span className="clara-sun-heading2">the future of brand deals</span>
      <div className="sub-main-wrapper">
        <CardComponent>
          <form onClick={handleSubmit} className="inner-card">
            <ActionComponent
              label={label}
              sidelabel={sidelabel}
              onClick={handleClick}
              Action={AnyAction}
            />
            <div className="creator-container">
              <button className="creator-btn">
                <img src={creatorImg} />
              </button>
              <span className="creator-heading">Creator</span>
            </div>
            &nbsp;
            {FormInput.map((element) => {
              const { label, fieldType, fieldName, formvalue, error } = element;
              return (
                <InputLabelComponent
                  label={label}
                  type={fieldType}
                  name={fieldName}
                  value={formvalue}
                  error={error}
                  onChange={handleChange}
                />
              );
            })}
            <ActionComponent
              style={{
                marginBottom: "-29px",
                marginTop: "-48px",
              }}
              sidelabel={note1}
            />
            <div className="img-group-container">
              {imgData.map((element: imgGrpData) => {
                return (
                  <span>
                    <img src={element.img} />
                  </span>
                );
              })}
            </div>
            <span className="side-label">
              By clicking Create account, I agree that I have read and accepted
              the <span className="terms-use">Terms of Use </span>
              and <span className="terms-use">Privacy Policy</span>
            </span>
            &nbsp;
            <ButtonComponent label={buttonlabel} onClick={handleSubmit} />
          </form>
        </CardComponent>
      </div>
    </div>
  );
}

export default CreateAccountView;
