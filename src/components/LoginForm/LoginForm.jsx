import { useState } from "react";
import { baseURL } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import errorIcon from "../../assets/icons/error-icon.svg";
import "./LoginForm.scss";

function LoginForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    formError: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name] || errors.formError) {
      setErrors({ ...errors, [name]: "", formError: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${baseURL}/user/login`;

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email =
        "The email address is not valid. Expected format: x@x.xx";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors({ ...errors, ...newErrors });
      return;
    }

    console.log("Form submitted", formData);

    try {
      const { data } = await axios.post(`${baseURL}/users/login`, {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("authToken", data.authToken);

      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrors({ formError: error.response.data.message });
      } else {
        setErrors({
          ...errors,
          formError: "Something went wrong. Please try again.",
        });
      }
    }
  };

  return (
    <article className="login-form">
      <h1 className="login-form__title">Log in</h1>
      <form action="" className="login-form__form" onSubmit={handleSubmit}>
        {[
          { label: "Email Address", name: "email" },
          { label: "Password", name: "password" },
        ].map(({ label, name }) => (
          <div className="login-form__functions" key={name}>
            <p className="login-form__label">{label}</p>
            <input
              type={name === "password" ? "password" : "text"}
              className="login-form__input"
              name={name}
              onChange={(e) => handleChange(e)}
            />
            {errors[name] && (
              <div className="login-form__error-message">
                <img
                  src={errorIcon}
                  alt="error icon with x in middle"
                  className="login-form__error-icon"
                />
                <p className="login-form__error">{errors[name]}</p>
              </div>
            )}
          </div>
        ))}
        {errors.formError && (
          <div className="login-form__error-message">
            <img
              src={errorIcon}
              alt="error icon with x in middle"
              className="login-form__error-icon"
            />
            <p className="login-form__form-error">{errors.formError}</p>
          </div>
        )}
        <button className="login-form__button" type="submit">
          Log in
        </button>
      </form>
    </article>
  );
}

export default LoginForm;
