let sum = '';
while(true){
    let value = prompt("Masukkan sebuah huruf", '');
    if(!value) break;

    sum+= value;
}

alert('Sum : ' + sum);