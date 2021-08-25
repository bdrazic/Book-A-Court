import { useState, useEffect } from "react";

const UseLogin = (validate, callback) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  var predaj = isSubmitting;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback && callback();
      console.log(values.username);
      console.log(values.email);
      console.log(values.password);
      console.log(values.password2);
    }
  }, [
    errors,
    callback,
    isSubmitting,
    values.username,
    values.email,
    values.password,
    values.password2,
  ]);

  return { handleChange, values, handleSubmit, errors, predaj };
};

export default UseLogin;
