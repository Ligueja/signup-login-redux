import PasswordValidator from "password-validator";
import EmailValidator from "email-validator";

export function isValidPassword(password: string): boolean {
  const passwordRequirements = new PasswordValidator();
  passwordRequirements.is().min(5); // Define o requisito mínimo de 5 caracteres

  // Verifica se a senha atende aos requisitos e não contém sequência
  if (passwordRequirements.validate(password) && !isSequential(password)) {
    return true;
  }
  return false;
}

export function isValidEmail(email: string): boolean {
  const emailLength = email.indexOf("@");

  if (emailLength < 3) {
    return false;
  }

  // Verifica se o e-mail é válido e pertence aos domínios permitidos
  if (
    EmailValidator.validate(email) &&
    (email.includes("gmail") ||
      email.includes("hotmail") ||
      email.includes("outlook"))
  ) {
    return true;
  }

  return false;
}

export function isSequential(password: string): boolean {
  for (let i = 0; i < password.length - 2; i++) {
    if (
      password.charCodeAt(i) === password.charCodeAt(i + 1) - 1 &&
      password.charCodeAt(i + 1) === password.charCodeAt(i + 2) - 1
    ) {
      return true;
    }
  }
  return false;
}

// import PasswordValidator from "password-validator"; // Certifique-se de que essa biblioteca está instalada
// import EmailValidator from "email-validator"; // Certifique-se de que essa biblioteca está instalada

// export function isValidPassword(password: string): boolean {
//   const passwordRequirements = new PasswordValidator();
//   passwordRequirements.is().min(5); // Define o requisito mínimo de 5 caracteres

//   if (!passwordRequirements.validate(password) || isSequential(password)) {
//     return false;
//   }
//   return true;
// }

// export function isValidEmail(email: string): boolean {
//   const emailLength = email.indexOf("@");

//   if (emailLength < 3) {
//     return false;
//   }

//   if (
//     !EmailValidator.validate(email) ||
//     !(
//       email.includes("gmail") ||
//       email.includes("hotmail") ||
//       email.includes("outlook")
//     )
//   ) {
//     return false;
//   }

//   return true;
// }

// export function isSequential(password: string): boolean {
//   for (let i = 0; i < password.length - 2; i++) {
//     if (
//       password.charCodeAt(i) === password.charCodeAt(i + 1) - 1 &&
//       password.charCodeAt(i + 1) === password.charCodeAt(i + 2) - 1
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
