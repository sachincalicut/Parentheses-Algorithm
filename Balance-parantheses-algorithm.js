const balanceParnt = function(pars){
    const stack = [];
    for(let single of pars){
        if(single == '(') {
            stack.push(single);
        }
        if(single =='('){
            stack.pop();
        }
    }
    return stack.length == 0;
}

console.log(balanceParnt('(()) () )'));