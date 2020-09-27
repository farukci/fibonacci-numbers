function myFunc() {
    const num = document.getElementById("input-number").value;
    if(num<1){
        document.getElementById("result").innerHTML = "Please enter a positive number!"
    }
    else{
        document.getElementById("result").innerHTML = orderPrefix(num) + " element of the fibonacci sequence is " + myFibo(num);
    }
}

function myFibo(n){
    let fibo=[1,1];
    if (n==1 || n==2){
        return 1;
    }
    else {
        for (let i=0; i<n; i++){
            fibo.push(fibo[i]+fibo[i+1])
        }
        return fibo[n-1];
    }
}

function orderPrefix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

