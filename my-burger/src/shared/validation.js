
export const chechValidity = (value,rules) =>{
    let isValid = true;
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.minlength){
        isValid = value.length >= rules.minlength && isValid;
    }

    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }

    if(rules.isEmail){
        const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        isValid = pattern.test(value) && isValid
    }
    

    return isValid;
}