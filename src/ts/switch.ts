export{};
let color: number = 0;
let panels: {
    color: number;
    change: boolean;
}[] = [
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}
];
const LINE_HEAD1: number = 0;
const LINE_HEAD2: number = 5;
const LINE_HEAD3: number = 10;
const LINE_HEAD4: number = 15;
const LINE_HEAD5: number = 20;
enum COLORS{GRAY, YELLOW, RED, GREEN, WHITE, BLUE};

export const action = (num: number):void => {
    if ( num >= 100 ) {
        switch(num) {
            case 102: color = COLORS.RED;
            console.log("red");
            break;
            case 103: color = COLORS.GREEN;
            console.log("green");
            break;
            case 104: color = COLORS.WHITE;
            console.log("white");
            break;
            case 105: color = COLORS.BLUE;
            console.log("blue");
            break;
            case 101: color = COLORS.YELLOW;
            console.log("yellow");
            break;
            default: color = COLORS.GRAY;
            console.log("gray");
            break;
        }
    } else if (num <= 25) {
        let strId: string = num.toString();
        colorSet(color, strId);
    }
}

const colorSet = (col: number, id: string) => {
    let numId: number = parseInt(id, 10);
    numId--;
    let elem: HTMLElement | null = document.getElementById(id);
    if (elem !== null){
        switch(col) {
            case 0:
                panels[numId].color = COLORS.GRAY;
                elem.style.backgroundColor = "gray";
                break;
            case 1:
                panels[numId].color = COLORS.YELLOW;
                elem.style.backgroundColor = "yellow";
                break;
            case 2:
                panels[numId].color = COLORS.RED;
                elem.style.backgroundColor = "red";
                break;
            case 3:
                panels[numId].color = COLORS.GREEN;
                elem.style.backgroundColor = "green";
                break;
            case 4:
                panels[numId].color = COLORS.WHITE;
                elem.style.backgroundColor = "white";
                break;
            case 5:
                panels[numId].color = COLORS.BLUE;
                elem.style.backgroundColor = "blue";
                break;
            default:
                panels[numId].color = COLORS.GRAY; 
                elem.style.backgroundColor = "gray";
                break;
        }
    }
    console.log(panels);
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