const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";

//  console.log(wd);

let totalGrades=  parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
alert(totalGrades);

let percentage = (totalGrades/400) * 100;
alert( percentage);

if( percentage <= 100 &&  percentage >= 80 ){
    grades = 'A';
} else if ( percentage <= 79 &&  percentage >= 60) {
   grades = 'B';
} else if ( percentage <= 59 && percentage >= 40) {
    grades = 'B';
 } else{
    grades = 'F';
 }

 if( percentage >= 39.5){
    document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage id ${percentage}%. <br> Your grade is ${grades}.You are pass.`
 }
 else{
    document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage id ${percentage}%. <br> Your grade is ${grades}.You are Fail.`
 }
}