// let x = 'Sameed Nasir';
// let y = 'SP24-BCS-031';
// let z = 30;

// let myinfo = {
//     x : 'Sameed Nasir',
//     y : 'SP24-BCS-031',
//     z : 30
// };

// const getDate = () => {
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     console.log(time);
// };

// Lab Assignment
const CalNDate = () =>{
    const date = new Date();
    const time = date.toLocaleTimeString();
    const onlyDate = date.toDateString();

    console.log("Time: " , time);
    console.log();
    console.log("Date: " , onlyDate);
    console.log();

    let x = 5;
    let y = 4;

    console.log("Exponent: " , x**y);
    console.log();

    console.log("Multiplication: " , x*y);
    console.log();

    console.log("Divison: " , x/y);
    console.log();

    console.log("Addition: " , x+y);
    console.log();

    console.log("Subtraction: " , x-y);
};

export default CalNDate;