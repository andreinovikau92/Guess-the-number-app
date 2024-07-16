for(let i = 0; i <=15 ; i++){
    if(i === 5) {
        continue;
    }
    console.log(i);
}

// outputed 
for(let i = 0; i <=15 ; i += 2){
    console.log(i);
}

let arr = [1, 2, 3, 4, 5, 6, 7]; 

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


let arr2 = [1, 2, 3, 4, 5, 6, 7]; 

for(let i = 0; i < arr2.length; i++){
    if(arr2[i] > 5) {
        console.log('ok');
    }else{
        console.log('false');
    }
}

let arr3 = [1, 2, 3, 4, 5, 6, 7]; 
let sum = 0;
let i = 0;

while(i < arr3.length){
    
    sum = sum + arr3[i];
    i++;
}
console.log(sum);

