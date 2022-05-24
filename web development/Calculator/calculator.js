// var a = '';
// var b = '';
// var num = [];
// var ans;

// function sendNum(digit){
//     num.push(digit);

//     if(num.length != 1){
//         a = '';
//         document.getElementById('screen').innerHTML = a;

//     }

//     for(i = 0;i<num.length;i++){
//         a += num[i];
//     }

//     document.getElementById('screen').innerHTML = a;
// }

// function equalTo(){
//     document.getElementById('screen').innerHTML = '';
//     for(i = 0;i<num.length;i++){
//         b += num[i];
//     }
//     ans = eval(b);

//     document.getElementById('screen').innerHTML = ans;

//     while(num.length > 0){
//         num.pop();
//     }

//     num.push(ans.toString());
// }

// function clearScr(){
//     document.getElementById('screen').innerHTML= '';
//     while(num.length >0){
//         num.pop;
//     }
//     a = '';
//     b = ''; 

// }


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ',buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue  += buttonText;
            screen.value  = screenValue;
        }else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }else if (buttonText == '='){
                screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })


}