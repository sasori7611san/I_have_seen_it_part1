let color = 0;

const action = (num) => {
    if ( num >= 100) {
        switch(num) {
            case 101: color = 1;
            console.log("red");
            break;
            case 102: color = 2;
            console.log("green");
            break;
            case 103: color = 3;
            console.log("white");
            break;
            case 104: color = 4;
            console.log("blue");
            break;
            case 105: color = 5;
            console.log("yellow");
            break;
            default: color = 0;
            console.log("gray");
            break;
        }
    } else if (num <= 25) {
        strId = num.toString();
        switcher(color, strId);
    }
}

const switcher = (c, s) => {
    switch(c) {
        case 1:
            document.getElementById(s).style.backgroundColor = "red";
            break;
        case 2:
            document.getElementById(s).style.backgroundColor = "green";
            break;
        case 3:
            document.getElementById(s).style.backgroundColor = "white";
            break;
        case 4:
            document.getElementById(s).style.backgroundColor = "blue";
            break;
        case 5:
            document.getElementById(s).style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById(s).style.backgroundColor = "gray";
            break;
    }
}