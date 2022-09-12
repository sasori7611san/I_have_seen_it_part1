let color = 0;
// let panels = [
//     [{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}],
//     [{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}],
//     [{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}],
//     [{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}],
//     [{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}]
// ];
let panels = [
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},
    {color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false},{color:0, change:false}
];
const LINE_HEAD1 = 0;
const LINE_HEAD2 = 5;
const LINE_HEAD3 = 10;
const LINE_HEAD4 = 15;
const LINE_HEAD5 = 20;
const LINE_BOTTOM1 = 4;
const LINE_BOTTOM2 = 9;
const LINE_BOTTOM3 = 14;
const LINE_BOTTOM4 = 19;
const LINE_BOTTOM5 = 24;



const action = (num) => {
    if ( num >= 100 ) {
        switch(num) {
            case 102: color = 2;
            console.log("red");
            break;
            case 103: color = 3;
            console.log("green");
            break;
            case 104: color = 4;
            console.log("white");
            break;
            case 105: color = 5;
            console.log("blue");
            break;
            case 101: color = 1;
            console.log("yellow");
            break;
            default: color = 0;
            console.log("gray");
            break;
        }
    } else if (num <= 25) {
        strId = num.toString();
        // switcher(color, strId, num);
        // switcher2(color, strId);
        colorSet(color, strId);
        panelChange(panels, num);
    }
};

// const switcher = (c, s, n) => {
//     const elem = document.getElementById(s);
//     let an = n - 1;
//     switch(c) {
//         case 2:
//             elem.style.backgroundColor = "red";
//             panels[an].color = 2;
//             break;
//         case 3:
//             elem.style.backgroundColor = "green";
//             panels[an].color = 3;
//             break;
//         case 4:
//             elem.style.backgroundColor = "white";
//             panels[an].color = 4;
//             break;
//         case 5:
//             elem.style.backgroundColor = "blue";
//             panels[an].color = 5;
//             break;
//         case 1:
//             elem.style.backgroundColor = "yellow";
//             panels[an].color = 1;
//             break;
//         default:
//             elem.style.backgroundColor = "gray";
//             panels[an].color = 0;
//             break;
//     }
//     console.log(panels);
// };

const panelChange = (pan, num) => {
    // 配列に合う番号に修正
    let idNum = num--; 

    // 起点の色
    let cn = pan[idNum].color;
    let vnum = Math.floor(idNum / 5);
    let snum = idNum % 5;
    let changeNo = [];
    let upStop = false;
    let downStop = false;
    let leftStop = false;
    let rightStop = false;
    let leftUpStop = false;
    let leftDownStop = false;
    let rightUpStop = false;
    let rightDownStop = false;
    // 上確認
    for (i = idNum - 1; i >= LINE_HEAD1; i--) {
        if (i % 5 === snum && !upStop){
            if (pan[i].color !== cn && pan[i].color > 1) {
                i > LINE_BOTTOM1 ? changeNo.add(i) : upStop = true;
            } else if (pan[i].color === cn) {
                upStop = true;
            } else {
                changeNo = [];
                upStop = true;                
            }
        }  
    }
    // 色変更
    changeNo = colorChange2(changeNo, cn);
    // 下確認
    for (i = idNum + 1; i <= LINE_BOTTOM5; i++) {
        if (i % 5 == snum && !downStop){
            if (pan[i].color !== cn && pan[i].color > 1) {
                i < LINE_HEAD5 ? pan[i].change = true : downStop = true;
            } else {
                downStop = true;
            }
        }
    }
    // 色変更
    for (i = idNum + 1; i <= LINE_BOTTOM5; i++) {
        if (pan[i].change) {
            colorSet(cn, strNum); 
        }       
    }
    // 横の準備
    line = 0;
    lineLast = 0;
    switch (vnum) {
        case 1:
            line = LINE_HEAD2;
            lineLast = LINE_BOTTOM2;
            break;
        case 2:
            line = LINE_HEAD3;
            lineLast = LINE_BOTTOM3;
            break;
        case 3:
            line = LINE_HEAD4;
            lineLast = LINE_BOTTOM4;
            break;
        case 4:
            line = LINE_HEAD5;
            lineLast = LINE_BOTTOM5;
            break;
        default:
            line = LINE_HEAD1;
            lineLast = LINE_BOTTOM1;
            break;
    }
    // 左確認
    for (i = idNum - 1; i >= line; i--) {
        if (pan[i].color !== cn && pan[i].color > 1) {
            i > line ? pan[i].change = true : leftStop = true;
        } else {
            leftStop = true;
        }
    }
    // 色変更
    for (i = idNum - 1; i >= line; i--) {
        if (pan[i].change) {
            colorSet(cn, strNum); 
        }
    }
    // 右確認
    for (i = num + 1; i <= lineLast; i++) {
        if (pan[i].color !== cn && pan[i].color > 1) {
            pan[i].change = true;
        } else {
            stop = true;
        }
    }
    // 色変更
    for (i = num + 1; i <= lineLast; i++) {
        colorChange(pan, cn, i) ;
    }
    // 左上確認
    for (i = num - 1; i >= 0; i -= 6) {
        if (!stop) {
            if (pan[i].color !== cn && pan[i].color > 1) {
                pan[i].change = true;
            } else {
                stop = true;
            }
        }        
    }
    // 色変更
    for (i = num - 1; i >= 0; i -= 6) {
        colorChange(pan, cn, i) ;        
    }
    // 左下確認
    for (i = num + 1; i < 24; i += 4) {
        if (!stop) {
            if (pan[i].color !== cn && pan[i].color > 1) {
                pan[i].change = true;
            } else {
                stop = true;
            }
        }
    }
    // 色変更
    for (i = num + 1; i < 24; i++) {
        colorChange(pan, cn, i); 
    }
    // 右上確認
    for (i = num - 1; i > 0; i -4) {
        if (!stop) {
            if (pan[i].color !== cn && pan[i].color > 1) {
                pan[i].change = true;
            } else {
                stop = true;
            }
        }
    }
    // 色変更
    for (i = num - 1; i > 0; i -4) {
        colorChange(pan, cn, i);
    }
    // 右下確認
    for (i = num + 1; i < 25; i += 6) {
        if (!stop) {
            if (pan[i].color !== cn && pan[i].color > 1) {
                pan[i].change = true;
            } else {
                stop = true;
            }
        }
    }
    // 色変更
    for (i = num + 1; i < 25; i += 6) {
        colorChange(pan, cn, i);
    }
};

const colorChange = (p, colNo, num) => {
    if (p[num].change) {
        let strNo = num.toString();
        p[num].color = cn;
        switcher(colNo, strNo, num + 1);
        p[num].change = false;
    }
}

const colorSet = (col, id) => {
    let numId = parseInt(id, 10);
    numId--;
    let elem = document.getElementById(id);
    switch(col) {
        case 0:
            panels[numId].color = 0;
            elem.style.backgroundColor = "gray";
            break;
        case 1:
            panels[numId].color = 1;
            elem.style.backgroundColor = "yellow";
            break;
        case 2:
            panels[numId].color = 2;
            elem.style.backgroundColor = "red";
            break;
        case 3:
            panels[numId].color = 3;
            elem.style.backgroundColor = "green";
            break;
        case 4:
            panels[numId].color = 4;
            elem.style.backgroundColor = "white";
            break;
        case 5:
            panels[numId].color = 5;
            elem.style.backgroundColor = "blue";
            break;
        default:
            panels[numId].color = 0; 
            elem.style.backgroundColor = "gray";
            break;
    }
    console.log(panels);
}

// 色変更
const colorChange2 = (chgn, colNo) => {
    for (let j of chgn) {
        // パネル用に文字列に変換
        let strNum = chgn[j].toString();
        colorSet(colNo, strNum);
    }
    chgn = [];
    return chgn;
}

// const switcher2 = (c, n) => {
//     colorSet(n, c)
//     console.log(panels);
// };
// const panelChange = (pan, numb) => {
//     let vn = Math.floor(numb / 5);
//     let sn = numb % 5;
//     // 起点の色
//     let cn = pan[vn][sn].color;
//     // 上確認
//     for ( i = vn - 1; i <= 0; i--) {
//         if (pan[i][sn].color !== cn && pan[i][sn].color > 1) {
//             pan[i][sn].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = vn - 1; i <= 0; i--) {
//         if (pan[i][sn].change) {
//             //  sleep(1000);
//             pan[i][sn].color = cn;
//             pan[i][sn].change = false;
//         } else {
//             break;
//         }
//     }
//     // 下確認
//     for ( i = vn + 1; i <= 4; i++) {
//         if (pan[i][sn].color !== cn && pan[i][sn].color > 1) {
//             pan[i][sn].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = vn + 1; i <= 4; i++) {
//         if (pan[i][sn].change) {
//             //  sleep(1000);
//             pan[i][sn].color = cn
//             pan[i][sn].change = false;
//         } else {
//             break;
//         }
//     }
//       // 左確認
//       for ( i = sn - 1; i <= 0; i--) {
//         if (pan[vn][i].color !== cn && pan[vn][i].color > 1) {
//             pan[vn][i].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = sn - 1; i <= 0; i--) {
//         if (pan[vn][i].change) {
//             //  sleep(1000);
//             pan[vn][i].color = cn
//             pan[vn][i].change = false;
//         } else {
//             break;
//         }
//     }
//     // 右確認
//     for ( i = sn + 1; i <= 4; i++) {
//         if (pan[vn][i].color !== cn && pan[vn][i].color > 1) {
//             pan[vn][i].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = sn + 1; i <= 4; i++) {
//         if (pan[vn][i].change) {
//             //  sleep(1000);
//             pan[vn][i].color = cn
//             pan[vn][i].change = false;
//         } else {
//             break;
//         }
//     }
//     // 左上確認
//     leftUpperCheck: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j].color !== cn && pan[i][j].color > 1) {
//                 pan[i][j].change = true;
//             } else {
//                 break leftUpperCheck;
//             }
//         }
//     }
//     // 色変更
//     leftUpperColor: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j].change) {
//                 //  sleep(1000);
//                 pan[i][j].color = cn
//                 pan[i][j].change = false;
//             } else {
//                 break leftUpperColor;
//             }
//         }
        
//     }
//     // 左下確認
//     leftDownerCheck: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j].color !== cn && pan[i][j].color > 1) {
//                 pan[i][j].change = true;
//             } else {
//                 break leftDownerCheck;
//             }
//         }
//     }
//     // 色変更
//     leftDownerColor: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j].change) {
//                 //  sleep(1000);
//                 pan[i][j].color = cn
//                 pan[i][j].change = false;
//             } else {
//                 break leftDownerColor;
//             }
//         }
//     }
//     // 右上確認
//     rightUpperCheck: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j].color !== cn && pan[i][j].color > 1) {
//                 pan[i][j].change = true;
//             } else {
//                 break rightUpperCheck;
//             }
//         }
//     }
//     // 色変更
//     rightUpperColor: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j].change) {
//                 //  sleep(1000);
//                 pan[i][j].color = cn
//                 pan[i][j].change = false;
//             } else {
//                 break rightUpperColor;
//             }
//         }
//     }
//     // 右下確認
//     rightDownerCheck: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j].color !== cn && pan[i][j].color > 1) {
//                 pan[i][j].change = true;
//             } else {
//                 break rightDownerCheck;
//             }
//         }
//     }
//     // 色変更
//     rightDownerColor: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j].change) {
//                 //  sleep(1000);
//                 pan[i][j].color = cn
//                 pan[i][j].change = false;
//             } else {
//                 break rightDownerColor;
//             }
//         }
//     }
// };

// 待つ
// const sleep = (waitMsec) => {
//     var startMsec = new Date();
//     while (new Date() - startMsec < waitMsec);
// }