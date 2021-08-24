const ValidateInfo = (values) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Korisničko ime je obavezno.";
  } else if (values.username.trim().length < 5) {
    errors.username = "Kor. ime mora imati min. 5 znakova.";
  }

  if (!values.email) {
    errors.email = "E-mail je obavezan.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "E-mail adresa je nevažeća.";
  }

  if (!values.password) {
    errors.password = "Lozinka je obavezna.";
  } else if (values.password.length < 6) {
    errors.password = "Lozinka mora imati min. 6 znakova.";
  }

  if (!values.password2) {
    errors.password2 = "Lozinka je obavezna.";
  } else if (values.password2 !== values.password) {
      errors.password2 = "Lozinke se ne podudaraju."
  }

  return errors;
};

export default ValidateInfo;
