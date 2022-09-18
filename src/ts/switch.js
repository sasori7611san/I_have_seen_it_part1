// 使用色番号保持
var color = 0;
// 縦要素番号
var verNo = 0;
// 横要素番号
var sideNo = 0;
// パネルID
var panelId = 0;
// パネル
var panels = [[-1, -1, -1, -1, -1, -1, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, -1, -1, -1, -1, -1, -1]];
// 色選択
var choiceColor = function (num) {
    switch (num) {
        case 2:
            color = 2;
            console.log("red");
            break;
        case 3:
            color = 3;
            console.log("green");
            break;
        case 4:
            color = 4;
            console.log("white");
            break;
        case 5:
            color = 5;
            console.log("blue");
            break;
        case 1:
            color = 1;
            console.log("yellow");
            break;
        default:
            color = 0;
            console.log("gray");
            break;
    }
};
// 番号選択
var action = function (num) {
    if (num <= 25 && num > 0) {
        // 取得配列要素取得
        if (Math.floor(num / 5) < 5 && num % 5 !== 0) {
            verNo = Math.floor(num / 5) + 1;
        }
        else {
            verNo = Math.floor(num / 5);
        }
        num % 5 == 0 ? sideNo = 5 : sideNo = num % 5;
        panelId = num;
        colorSet(color, panelId, verNo, sideNo);
        panelChange(panels, verNo, sideNo);
    }
};
var colorSet = function (col, id, v, s) {
    // id文字列化
    var strId = id.toString();
    // パネルに色を反映
    var elem = document.getElementById(strId);
    if (elem !== null) {
        switch (col) {
            case 1:
                panels[v][s] = 1;
                elem.style.backgroundColor = "yellow";
                break;
            case 2:
                panels[v][s] = 2;
                elem.style.backgroundColor = "red";
                break;
            case 3:
                panels[v][s] = 3;
                elem.style.backgroundColor = "green";
                break;
            case 4:
                panels[v][s] = 4;
                elem.style.backgroundColor = "white";
                break;
            case 5:
                panels[v][s] = 5;
                elem.style.backgroundColor = "blue";
                break;
            default:
                panels[v][s] = 0;
                elem.style.backgroundColor = "gray";
                break;
        }
    }
    // パネル内容
    console.log(panels);
};
var panelChange = function (pan, v, s) {
    // 起点の色
    var cn = pan[v][s];
    console.log(cn);
    // パネル変わる可能性
    var panelPreChange = false;
    // 色判定（0:灰色、1:黄色は除外）
    if (cn >= 2) {
        // 上確認
        // 変わるパネルがあるか判定
        var i = void 0;
        for (i = v - 1; i >= 0; i--) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(s));
            console.log(pan[i][s]);
            if (pan[i][s] !== cn && pan[i][s] > 1) {
                panelPreChange = true;
                console.log("上チェックあり");
            }
            else if (pan[i][s] <= 1) {
                panelPreChange = false;
                console.log("上チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("上チェック停止2");
                    break;
                }
            }
        }
        console.log("上チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v - 1; i >= 0; i--) {
                if (pan[i][s] !== cn && pan[i][s] > 1) {
                    var cNum = (i - 1) * 5 + s;
                    colorSet(cn, cNum, i, s);
                    console.log("上チェンジ");
                }
                else {
                    console.log("上チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("上完了");
        // 下確認
        // 変わるパネルがあるか判定
        for (i = v + 1; i <= 6; i++) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(s));
            console.log(pan[i][s]);
            if (pan[i][s] !== cn && pan[i][s] > 1) {
                panelPreChange = true;
                console.log("下チェックあり");
            }
            else if (pan[i][s] <= 1) {
                panelPreChange = false;
                console.log("下チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("下チェック停止2");
                    break;
                }
            }
        }
        console.log("下チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v + 1; i <= 6; i++) {
                if (pan[i][s] !== cn && pan[i][s] > 1) {
                    var cNum = (i - 1) * 5 + s;
                    colorSet(cn, cNum, i, s);
                    console.log("下チェンジ");
                }
                else {
                    console.log("下チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("下完了");
        // 左確認
        // 変わるパネルがあるか判定
        for (i = s - 1; i >= 0; i--) {
            console.log("\u7E26:".concat(v));
            console.log("\u6A2A:".concat(i));
            console.log(pan[v][i]);
            if (pan[v][i] !== cn && pan[v][i] > 1) {
                panelPreChange = true;
                console.log("左チェックあり");
            }
            else if (pan[v][i] <= 1) {
                panelPreChange = false;
                console.log("左チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("左チェック停止2");
                    break;
                }
            }
        }
        console.log("左チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = s - 1; i >= 0; i--) {
                if (pan[v][i] !== cn && pan[v][i] > 1) {
                    var cNum = (v - 1) * 5 + i;
                    colorSet(cn, cNum, v, i);
                    console.log("左チェンジ");
                }
                else {
                    console.log("左チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("左完了");
        // 右確認
        // 変わるパネルがあるか判定
        for (i = s + 1; i <= 6; i++) {
            console.log("\u7E26:".concat(v));
            console.log("\u6A2A:".concat(i));
            console.log(pan[v][i]);
            if (pan[v][i] !== cn && pan[v][i] > 1) {
                panelPreChange = true;
                console.log("右チェックあり");
            }
            else if (pan[v][i] <= 1) {
                panelPreChange = false;
                console.log("右チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("右チェック停止2");
                    break;
                }
            }
        }
        console.log("右チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = s + 1; i <= 6; i++) {
                if (pan[v][i] !== cn && pan[v][i] > 1) {
                    var cNum = (v - 1) * 5 + i;
                    colorSet(cn, cNum, v, i);
                    console.log("右チェンジ");
                }
                else {
                    console.log("右チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("右完了");
        // 左上確認
        // 変わるパネルがあるか判定
        var j = void 0;
        for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(j));
            console.log(pan[i][j]);
            if (pan[i][j] !== cn && pan[i][j] > 1) {
                panelPreChange = true;
                console.log("左上チェックあり");
            }
            else if (pan[i][j] <= 1) {
                panelPreChange = false;
                console.log("左上チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("左上チェック停止2");
                    break;
                }
            }
        }
        console.log("左上チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
                if (pan[i][j] !== cn && pan[i][j] > 1) {
                    var cNum = (i - 1) * 5 + j;
                    colorSet(cn, cNum, i, j);
                    console.log("左上チェンジ");
                }
                else {
                    console.log("左上チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("左上完了");
        // 左下確認
        // 変わるパネルがあるか判定
        for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(j));
            console.log(pan[i][j]);
            if (pan[i][j] !== cn && pan[i][j] > 1) {
                panelPreChange = true;
                console.log("左下チェックあり");
            }
            else if (pan[i][j] <= 1) {
                panelPreChange = false;
                console.log("左下チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("左下チェック停止2");
                    break;
                }
            }
        }
        console.log("左下チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
                if (pan[i][j] !== cn && pan[i][j] > 1) {
                    var cNum = (i - 1) * 5 + j;
                    colorSet(cn, cNum, i, j);
                    console.log("左下チェンジ");
                }
                else {
                    console.log("左下チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("左下完了");
        // // 右上確認
        // 変わるパネルがあるか判定
        for (i = v - 1, j = s + 1; i >= 0 || j <= 6; i--, j++) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(j));
            console.log(pan[i][j]);
            if (pan[i][j] !== cn && pan[i][j] > 1) {
                panelPreChange = true;
                console.log("右上チェックあり");
            }
            else if (pan[i][j] <= 1) {
                panelPreChange = false;
                console.log("右上チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("右上チェック停止2");
                    break;
                }
            }
        }
        console.log("右上チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v - 1, j = s + 1; i >= 0 || j <= 6; i--, j++) {
                if (pan[i][j] !== cn && pan[i][j] > 1) {
                    var cNum = (i - 1) * 5 + j;
                    colorSet(cn, cNum, i, j);
                    console.log("右上チェンジ");
                }
                else {
                    console.log("右上チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("右上完了");
        // 右下確認
        // 変わるパネルがあるか判定
        for (i = v + 1, j = s + 1; i <= 6 || j <= 6; i++, j++) {
            console.log("\u7E26:".concat(i));
            console.log("\u6A2A:".concat(j));
            console.log(pan[i][j]);
            if (pan[i][j] !== cn && pan[i][j] > 1) {
                panelPreChange = true;
                console.log("右下チェックあり");
            }
            else if (pan[i][j] <= 1) {
                panelPreChange = false;
                console.log("右下チェック停止1");
                break;
            }
            else {
                if (panelPreChange) {
                    console.log("右下チェック停止2");
                    break;
                }
            }
        }
        console.log("右下チェック通過");
        // パネルを変える
        if (panelPreChange) {
            for (i = v + 1, j = s + 1; i <= 6 || j <= 6; i++, j++) {
                if (pan[i][j] !== cn && pan[i][j] > 1) {
                    var cNum = (i - 1) * 5 + j;
                    colorSet(cn, cNum, i, j);
                    console.log("右下チェンジ");
                }
                else {
                    console.log("右下チェンジ停止");
                    break;
                }
            }
            panelPreChange = false;
        }
        console.log("右下完了");
    }
};
// let color: number = 0;
// let panels: {
//     color: number;
//     change: boolean;
// }[] = [
//     {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
//     {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
//     {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
//     {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
//     {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}
// ];
// const LINE_HEAD1: number = 0;
// const LINE_HEAD2: number = 5;
// const LINE_HEAD3: number = 10;
// const LINE_HEAD4: number = 15;
// const LINE_HEAD5: number = 20;
// enum COLORS{GRAY, YELLOW, RED, GREEN, WHITE, BLUE};
// export const action = (num: number):void => {
//     if ( num >= 100 ) {
//         switch(num) {
//             case 102: color = COLORS.RED;
//             console.log("red");
//             break;
//             case 103: color = COLORS.GREEN;
//             console.log("green");
//             break;
//             case 104: color = COLORS.WHITE;
//             console.log("white");
//             break;
//             case 105: color = COLORS.BLUE;
//             console.log("blue");
//             break;
//             case 101: color = COLORS.YELLOW;
//             console.log("yellow");
//             break;
//             default: color = COLORS.GRAY;
//             console.log("gray");
//             break;
//         }
//     } else if (num <= 25) {
//         let strId: string = num.toString();
//         colorSet(color, strId);
//     }
// }
// const colorSet = (col: number, id: string) => {
//     let numId: number = parseInt(id, 10);
//     numId--;
//     let elem: HTMLElement | null = document.getElementById(id);
//     if (elem !== null){
//         switch(col) {
//             case 0:
//                 panels[numId].color = COLORS.GRAY;
//                 elem.style.backgroundColor = "gray";
//                 break;
//             case 1:
//                 panels[numId].color = COLORS.YELLOW;
//                 elem.style.backgroundColor = "yellow";
//                 break;
//             case 2:
//                 panels[numId].color = COLORS.RED;
//                 elem.style.backgroundColor = "red";
//                 break;
//             case 3:
//                 panels[numId].color = COLORS.GREEN;
//                 elem.style.backgroundColor = "green";
//                 break;
//             case 4:
//                 panels[numId].color = COLORS.WHITE;
//                 elem.style.backgroundColor = "white";
//                 break;
//             case 5:
//                 panels[numId].color = COLORS.BLUE;
//                 elem.style.backgroundColor = "blue";
//                 break;
//             default:
//                 panels[numId].color = COLORS.GRAY; 
//                 elem.style.backgroundColor = "gray";
//                 break;
//         }
//     }
//     console.log(panels);
// }
// const switcher = (c: number, s: string): void => {
//     let elem = document.getElementById(s);
//     switch(c) {
//         case 1:
//             elem!.style.backgroundColor = "red";
//             break;
//         case 2:
//             elem!.style.backgroundColor = "green";
//             break;
//         case 3:
//             elem!.style.backgroundColor = "white";
//             break;
//         case 4:
//             elem!.style.backgroundColor = "blue";
//             break;
//         case 5:
//             elem!.style.backgroundColor = "yellow";
//             break;
//         default:
//             elem!.style.backgroundColor = "gray";
//             break;
//     }
// }
