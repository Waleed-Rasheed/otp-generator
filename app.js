// let randomvalues = "1234567890";

// let getElementById = ("#display")

// let generateOTP = () => {
// for(let i = 0; i <6; i++){
//     let  randomnumber = Math.floor(Math.random() * randomvalues.length)
//     display += randomvalues[randomnumber]}
// document.getElementById("display").innerText = opt;
// }
// document.getElementById("btn").addEventListener("click", generateOTP);

let GenerateOTP = () => {

    const otpLenght = 6;

    const otp = Math.floor(Math.random() * Math.pow (10, otpLenght));

    document.getElementById("display"). innerText = otp;
};
document.getElementById("btn"). addEventListener("click", GenerateOTP);
window.addEventListener("load", generateOTP)
