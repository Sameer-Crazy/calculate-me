document.addEventListener("keypress",function(event){
    insert_Text(event.key);
}
);

function insert_Text(val){
    switch (val) {
        case '1':
            value('1');
            break;
        case '2':
            value('2');
            break;
        case '3':
            value('3');
            break;
        case '4':
            value('4');
            break;
        
        case '5':
           value('5');
            break;
        case '6':
           value('6');
            break;
        case '7':
            value('7');
            break;
        case '8':
           value('8');
            break;
        case '9':
           value('9');
            break;
        case '0':
            value('0');
            break;
        case '+':
           value('+');
            break;
        case '-':
            value('-');
            break;
        case 'x':
           value('x');
           break;
        case '*':
            value('x');
            break;
        case '/':
            value('/');
            break;
        case '.':
           value('.');
            break;
        case 'r':
            value('√')
            break;
        case '^':
            value('^');
            break;
        case 'C':
            cancel();
            break;
        case 'c':
            cancel();
            break;
        case 'AC':
           allclear();
           break;
        case 'a':
            allclear();
            break;
        case '=':
           evaluate();
           break;
        case 'Enter':
           evaluate();
           break;

        default:
            break;
    }
    function value(v){
        prev_Val = document.querySelector("#textbox").value;
        document.querySelector("#textbox").value = prev_Val+v;
    }
    function cancel(){
        var newVal = document.querySelector("#textbox").value.slice(0,-1);
            document.querySelector("#textbox").value = newVal;
    }
    function allclear(){
        document.querySelector("#textbox").value = "";
    }
    function evaluate(){
        var query = document.querySelector("#textbox").value;
            for(let i = 0;i<query.length;i++){
                if(query[i]=='^'){
                    query = query.replace("^","**");
                }
                if(query[i]=='x'){
                    query = query.replace("x","*");
                }
                if(query[i]=='√'){
                    query = query.replace("x","**(1/2)");
                }
            }
            ans = eval(query);
            document.querySelector("#textbox").value = ans;
    }

}
