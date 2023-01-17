function formatAndValidateCPF(cpf) {
    // remove non-numeric characters
    cpf = cpf.replace(/[^\d]+/g,'');
  
    // check if CPF has 11 digits
    if (cpf.length !== 11) {
        return {
            isValid: false,
            message: "Invalid CPF, must contain 11 digits"
        };
    }
  
    // check if CPF is a sequence of identical numbers
    if (new Set(cpf).size === 1) {
        return {
            isValid: false,
            message: "Invalid CPF, cannot contain a sequence of identical numbers"
        };
    }
  
    // calculate check digits
    let firstDigit, secondDigit;
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
    }
    firstDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }
    secondDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    // check if check digits are valid
    if (parseInt(cpf[9]) !== firstDigit || parseInt(cpf[10]) !== secondDigit) {
        return {
            isValid: false,
            message: "Invalid CPF, check digits are incorrect"
        };
    }
  
    // format CPF
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  
    return {
        isValid: true,
        message: "Valid CPF",
        cpf: cpf
    };
}