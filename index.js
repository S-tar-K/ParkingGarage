function calculateCharges(inputs){
    const main_div = document.querySelector('div');
    for(var i = 0; i<inputs; i++){
        
        const inp = document.createElement('input');
        const br = document.createElement('br');
        const p = document.createElement('p');
        main_div.append(br);
        main_div.append(p);
        p.innerText = "Enter the no. of hours parked for customer " + (i+1) + ": ";
        main_div.append(inp);
        inp.setAttribute('id', 'amount');
        inp.setAttribute('type', 'number')
    }
    const button = document.createElement('button');
    const br1 = document.createElement('br');
    main_div.append(br1);
    const br2 = document.createElement('br');
    main_div.append(br2);
    main_div.append(br1);
    main_div.append(button);
    button.innerText = "Submit";
    button.onclick = solve1;
}

function solve1(){
    const main_div = document.querySelector('div');
    var cost = [];
    var n = main_div.childElementCount;
    const secondDiv = document.querySelector('#result');
    const br = document.createElement('br');
    secondDiv.append(br);
    const heading = document.createElement('h1');
    secondDiv.append(heading);
    heading.setAttribute('id', 'box');
    heading.innerText = "Cost for each customer";
    var cnt = 1;
    for(var i = 2; i<n-1; i+=3){
        const br1 = document.createElement('br');
        secondDiv.append(br1);
        const p = document.createElement('p');
        secondDiv.append(p);
        var time = main_div.childNodes[i].value;
        var cost = solve3(time);
        p.innerText = "The parking cost for customer " + cnt + " is: " + cost;
        cnt += 1;
    }
}

function solve3(time){
    if(time <= 3){
        return 2;
    }else{
        hours = time - 3;
        cost = (hours * 0.5) + 2;
        if(cost >= 10) return 10;
        return cost;
    }
}