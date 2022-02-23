let display =document.getElementById('display');
let display1 =document.getElementById('display1');

let buttons =Array.from(document.getElementsByClassName('number'));

buttons.map(button =>{
       button.addEventListener('click',(e)=>{
           switch(e.target.innerText){
               case 'c':
                   display.innerText='';
                   display1.innerText='';
                   break;
                case '⌫':
                    if(display.innerText){
                        display.innerText=display.innerText.slice(0,-1);
                    }
                   break;
                case '=':
                    try{

                        display.innerText=eval(display.innerText);
                        display1.innerText=display.innerText;
                        display.innerText='';
                    }catch{
                        display.innerText='';
                        display1.innerText='Error!'
                    }
                    break;
                case 'x':
                    display.innerText+='*';
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;
                    break;
                case '÷':
                    display.innerText+='/';
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;
                    break;                        
                case '−':
                    display.innerText+='-';
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;
                    break; 
                case '√':
                    display.innerText+='√';
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;
                    break; 
                 case 'y':
                    display.innerText+='**';
                    display.innerText=eval(display.innerText);
                    display1.innerText=display.innerText;
                    break;         

                   default:
                       display.innerText+=e.target.innerText;
           }
       })
});

