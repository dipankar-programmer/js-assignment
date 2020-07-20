// function ask(question, yes,no){
//     if(confirm(question)) yes()
//     else no()
// }
let ask = (question, yes,no)=>confirm(question) ? yes() : no()
ask(
    "do you agree?",
    function(){alert("you agree");},
    function (){alert("you canceled the execution");}
);

