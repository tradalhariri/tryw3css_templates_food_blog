'user strict';

let foods = [{
    'title': 'The Perfect Sandwich, A Real NYC Classic', 'desc': 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images'+'\\'+'sandwich.jpg'

},

{
    'title': 'Let Me Tell You About This Steak', 'desc': 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images/steak.jpg'

},
{
    'title': 'Cherries, interrupted', 'desc': 'Lorem ipsum text praesent tincidunt ipsum lipsum.What else?', 'img': 'images/cherries.jpg'

},
{
    'title': 'Once Again, Robust Wine and Vegetable Pasta', 'desc': 'Lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images/wine.jpg'

},

{
    'title': 'The Perfect Sandwich, A Real NYC Classic', 'desc': 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images/sandwich.jpg'

},

{
    'title': 'Let Me Tell You About This Steak', 'desc': 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images/steak.jpg'

},
{
    'title': 'Cherries, interrupted', 'desc': 'Lorem ipsum text praesent tincidunt ipsum lipsum.What else?', 'img': 'images/cherries.jpg'

},
{
    'title': 'Once Again, Robust Wine and Vegetable Pasta', 'desc': 'Lorem ipsum text praesent tincidunt ipsum lipsum.', 'img': 'images/wine.jpg'

}

];

let x = document.getElementById('section1');

function display(food) {
       
    for (let i = 0 ; i < food.length; i++) {
        const newDiv = document.createElement('div'); 
                const newImage = document.createElement('img'); 
                const title=document.createElement('h2');
                const desc=document.createElement('p'); 
                title.innerHTML = food[i].title; 
                desc.innerHTML = food[i].desc;
                newImage.setAttribute('src', food[i].img ) 
                newDiv.append(newImage);
                newDiv.append(title);
                newDiv.append(desc);
newDiv.classList.add('divfood');
newImage.classList.add('imgfood');
title.classList.add('titlefood');
desc.classList.add('descfood');
              
       x.append(newDiv);
    } 
};
const divanchor1= document.createElement('a');
divanchor1.innerHTML='&laquo';

const divanchor2= document.createElement('a'); 
divanchor2.innerText='1';

const divanchor3= document.createElement('a'); 
divanchor3.innerHTML='2';

const divanchor4= document.createElement('a'); 
divanchor4.innerHTML='3';


const divanchor5= document.createElement('a'); 
divanchor5.innerHTML='4';


const divanchor6= document.createElement('a'); 
divanchor6.innerHTML='&raquo';
let y = document.getElementById('section2');
y.append(divanchor1);
y.append(divanchor2);
y.append(divanchor3);
y.append(divanchor4);
y.append(divanchor5);
y.append(divanchor6);



display(foods);
// y.append(divanchor);
// let arr = [100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];

// function getNumEvenNumbers(arr){
//     let evev = 0;
//     let odd = 0;
//     for(let i =0 ;i <arr.length;i++){
//         if(arr[i] %2 === 0){
// evev++;
//         }
//         else{
//             odd++;
//         }
//     }
//     let evenOdd = [evev,odd];
//   return evenOdd;

// }
// console.log('Number Even Numbers '+getNumEvenNumbers(arr)[0]);
// console.log('Number odd Numbers '+getNumEvenNumbers(arr)[1]);

//  var gopher = 1;
//  if (gopher < 10) 
//     console.log(gopher);
//  } else {
//    console.log('potato'); }