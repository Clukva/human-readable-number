module.exports = function toReadable (number) {
    //let number = 998
numbers =['one','two','three','four','five','six','seven','eight','nine',    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 
    'one hundred ', 'two hundred', 'three hundred', 'four hundred' , 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'] 
numbers1L =['zero','one','two','three','four','five','six','seven','eight','nine']
numbers1 =['one','two','three','four','five','six','seven','eight','nine']
numbers10 =['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
numbers10L =['zero','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
numbers100 =['zero','zero','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
numbers100L =['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
numbers1000 =['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'] 
let num2 = 0

 if(number > 1 && number < 10){
    let num2 = number.toString().split()
    let i = num2[0]-1;
    let x = i;
    if(x){return number = numbers1[x]}
}

else if (number === 1){
    let num2 = number.toString().split()
    let i = num2[0][0];
    let x = i;
    if(x){return number = numbers1L[x]}
} 
else if (number === 0){
    let num2 = number.toString().split()
    let i = num2[0][0];
    let x = i;
    if(x){return number = numbers1L[x]}
} 

 else if (number > 9 && number < 20){
    let num2 = number.toString().split()
    let i = num2[0][0];
    let j = num2[0][1];
    let x = i;
    let y = j;
    if(x, y){return number = numbers10[y]}
} 
else if(number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90){
    let num2 = number.toString().split()
    let i = num2[0][0];
    let j = num2[0][1];
    let x = i;
    if(x, j){return number = numbers100[x]} 
} 
 else if (number > 20 && number < 100){
    let num2 = number.toString().split()
    let i = num2[0][0];
    let j = num2[0][1];
    let x = i;
    let y = j;
    if(x, y){return number = numbers100[x]+' '+numbers1L[y]}
} 

else if(number === 120 || number === 130 || number === 140 || number === 150 || number === 160 || number === 170 || number === 180 || number === 190 ||
    number === 220 || number === 230 || number === 240 || number === 250 || number === 260 || number === 270 || number === 280 || number === 290 ||
    number === 320 || number === 330 || number === 340 || number === 350 || number === 360 || number === 370 || number === 380 || number === 390 ||
    number === 420 || number === 430 || number === 440 || number === 450 || number === 460 || number === 470 || number === 480 || number === 490 ||
    number === 520 || number === 530 || number === 540 || number === 550 || number === 560 || number === 570 || number === 580 || number === 590 ||
    number === 620 || number === 630 || number === 640 || number === 650 || number === 660 || number === 670 || number === 680 || number === 690 ||
    number === 720 || number === 730 || number === 740 || number === 750 || number === 760 || number === 770 || number === 780 || number === 790 ||
    number === 820 || number === 830 || number === 840 || number === 850 || number === 860 || number === 870 || number === 880 || number === 890 ||
    number === 920 || number === 930 || number === 940 || number === 950 || number === 960 || number === 970 || number === 980 || number === 990)
    {
    let num2 = number.toString().split()
    let i = num2[0][0]-1;
    let j = num2[0][1];
    let k = num2[0][2];
    let x = i;
    let y = j;
    if(x, j, k){return number = numbers1000[x]+" "+numbers100[y]}
}

else if(number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
    let num2 = number.toString().split()
    let i = num2[0][0]-1;
    let j = num2[0][1];
    let k = num2[0][2];
    let x = i;
    if(x, j, k){return number = numbers1000[x]}
}
else if((number > 100 && number < 110) || (number > 200 && number < 210) ||(number > 300 && number < 310) ||
(number > 400 && number < 410) ||(number > 500 && number < 510) || (number > 600 && number < 610)||
(number > 700 && number < 710) ||(number > 800 && number < 810) || (number > 900 && number < 910))
{
    let num2 = number.toString().split()
    let i = num2[0][0]-1;
    let j = num2[0][1];
    let k = num2[0][2];
    let y = j;
    let z = k;
    let x = i;
        if(x, y, z){return number = numbers1000[x]+" "+ numbers1L[z]}
}
else if((number > 109 && number < 120) || (number > 209 && number < 220) ||(number > 309 && number < 320) ||
(number > 409 && number < 420) ||(number > 509 && number < 520) || (number > 609 && number < 620)||
(number > 709 && number < 720) ||(number > 809 && number < 820) || (number > 909 && number < 920))
{
    let num2 = number.toString().split()
    let i = num2[0][0]-1;
    let j = num2[0][1];
    let k = num2[0][2];
    let y = j;
    let z = k;
    let x = i;
        if(x, y, z){return number = numbers1000[x]+" "+ numbers10[z]}
}

else if(number > 100 && number < 1000){
    let num2 = number.toString().split()
    let i = num2[0][0]-1;
    let j = num2[0][1];
    let k = num2[0][2];
    let y = j;
    let z = k;
    let x = i;
        if(x, y, z){return number = numbers1000[x]+" "+ numbers100[y] +" "+ numbers1L[z]}
}
console.log(number)
}
   