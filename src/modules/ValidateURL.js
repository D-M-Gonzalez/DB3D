export default function validateURL(validateURL){
    let error = false;
    validateURL.forEach((url)=>{
        error = url === null ? true : error;
    })
    return error;
}