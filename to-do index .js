let countvalueEl = document.getElementById("countervalue");

let clickcount = localStorage.getItem("clickcount");

if(clickcount === null){
    countvalueEl.textContent = 0;
    
}else{
    countvalueEl.textContent = clickcount;
}
function onIncrementcount(){
    let previouscountervalue = countvalueEl.textContent;
    let upadatecountervalue = parseInt(previouscountervalue)+1;
    
    
    localStorage.setItem("clickcount" , upadatecountervalue);
    
    countvalueEl.textContent = upadatecountervalue;
    
}
