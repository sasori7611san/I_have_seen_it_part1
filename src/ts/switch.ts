export{};
let color: number = 0;

export const action = (num: number):void => {
    if ( num >= 100 ) {
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
        let strId: string = num.toString();
        switcher(color, strId);
    }
}

const switcher = (c: number, s: string): void => {
    let elem = document.getElementById(s);
    switch(c) {
        case 1:
            elem!.style.backgroundColor = "red";
            break;
        case 2:
            elem!.style.backgroundColor = "green";
            break;
        case 3:
            elem!.style.backgroundColor = "white";
            break;
        case 4:
            elem!.style.backgroundColor = "blue";
            break;
        case 5:
            elem!.style.backgroundColor = "yellow";
            break;
        default:
            elem!.style.backgroundColor = "gray";
            break;
    }
}