var countInterval;


function startCounter(){
    var number = parseInt(document.getElementById("number").value);

    if(isNaN(number)){
        alert("Please enter a number")
        clearInterval(countInterval);
        return;
    }

    if(number < 1|| number > 9){
        alert("enter the value between 1 to 9");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".counter .current");
    var nextNo = document.querySelectorAll(".counter .next");
    var count = 0;

    resetNumbers(currentNo, nextNo);

    clearInterval(countInterval);

    countInterval = setInterval(function (){
        if(count == number){
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;

    },1000);

}

function resetNumbers(currentNo, nextNo, end){
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo){
    setTimeout(function(){
        currentNo.innerText = nextNo.innerText;


        nextNo.classList.add("animate");

        setTimeout(() => {
            nextNo.classList.remove('animate');
        }, 500);
        nextNo.innerText = parent(nextNo.innerText) +1;
    },500);
}
