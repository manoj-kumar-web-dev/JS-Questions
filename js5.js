const emi = 
{
  car :30000,
  rent:8000,
  travel:1800,
  grocery:1000,
  dress:4500
}

function totalExpense(emi){
return Object.values(emi).reduce((acc,curr)=>{
    return acc+= curr;
},0)
}

console.log(totalExpense(emi));