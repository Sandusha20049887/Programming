//alert("Euler loaded!");
funtionSumOfMultiplies = () => {

    let sum = 0;
    for(let i = 0; i < 1000; i++){
        if( (i % 3 == 0) || (i % 5==0)){
            sum += i;
        }
    }

    //alert("Sum of multiples of 3 and 5 below 1000 : "+sum);
}

funtionSumOfMultiplies();

funtionSumOfMultipliesParam = (a,b,n) => {

    let sum = 0;
    for(let i = 0; i < n; i++){
        if( (i % a == 0) || (i % b == 0)){
            sum += i;
        }
    }

    alert("Sum of multiples of "+a+ " and " +b+ " below " +n+" : "+sum);

    let txt = document.getElementById("lbl1");
    txt.innerHTML = "Sum of multiples of "+a+ " and " +b+ " below " +n+" : "+sum;
}

func1 = (value) =>{
    let txt = "";
    txt += value +" , ";
    document.getElementById("txtarea1").innerHTML = txt;
}

functionArray = (a,b) =>{
    const arr = [3,5]

    arr.forEach(func1);
}

functionArray(1,2);




hideResult = () =>{
    document.getElementById("lbl1").style.visibility = "hidden";
}

showResult =() =>{
    document.getElementById("lbl1").style.visibility = "";
}
