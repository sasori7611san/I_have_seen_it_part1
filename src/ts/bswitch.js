let color = 0;

let panels = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
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
const LINE1 = 0;
const LINE2 = 1;
const LINE3 = 2;
const LINE4 = 3;
const LINE5 = 4;
const ROW1 = 0;
const ROW2 = 1;
const ROW3 = 2;
const ROW4 = 3;
const ROW5 = 4;

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
        // panelChange(panels, num);
    }
};

const panelChange = (pan, num) => {
    // 配列に合う番号に修正
    let idNum = num--; 
    // 起点のパネルと色
    let cn = pan[idNum];
    let vnum = Math.floor(idNum / 5);
    let snum = idNum % 5;
    // 変化判定用
    let preChangeNo = []; 
    let changeNo = [];
    let anotherColor = false;
    let upStop = false;
    let downStop = false;
    let leftStop = false;
    let rightStop = false;
    let leftUpStop = false;
    let leftDownStop = false;
    let rightUpStop = false;
    let rightDownStop = false;
    const panelStop = () => {
        preChangeNo = [];
        anotherColor = false;
        return true;
    }
    // 色判定（0:灰色、1:黄色は除外）
    if (cn >= 2) {
        // 上確認
        if (vnum >= LINE3) {
            for (i = idNum - 1; i >= LINE_HEAD1; i--) {
                if (i % 5 === snum && !upStop) {
                    if (pan[i] !== cn) {
                        if (i / 5 !== LINE1) {
                            anotherColor = changeCheck(preChangeNo, i);
                        } else {
                            upStop = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                        changeNo = changechoice(preChangeNo, changeNo);
                        upStop = panelStop();
                    } else {
                        upStop = panelStop();
                    }
                }
            }
        }
        // 下確認
        if (vnum <= LINE3) {
            for (i = idNum + 1; i <= LINE_BOTTOM5; i++) {
                if (i % 5 === snum && !downStop) {
                    if (pan[i] !== cn) {
                        if (i / 5 !== LINE5) {
                            anotherColor = changeCheck(preChangeNo, i);
                        } else {
                            downStop  = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                        changeNo = changechoice(preChangeNo, changeNo);
                        downStop =panelStop();
                    } else {
                        downStop = panelStop();
                    }
                }
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
            if(!leftStop) {
                if (pan[i] !== cn) {
                    if (i > line) {
                        anotherColor = changeCheck(preChangeNo, i);
                    } else {
                        leftStop = panelStop();
                    }
                } else if (pan[i] === cn && anotherColor) {
                    changeNo = changechoice(preChangeNo, changeNo);
                    leftStop = panelStop();
                } else {
                    leftStop = panelStop();
                }
            }
        }
         // 右確認
        for (i = idNum + 1; i <= lineLast; i++) {
            if(!rightStop) {
                if (pan[i] !== cn) {
                    if (i < lineLast) {
                        anotherColor = changeCheck(preChangeNo, i);
                    } else {
                        rightStop =panelStop();
                    }
                } else if (pan[i] === cn && anotherColor) {
                    changeNo = changechoice(preChangeNo, changeNo);
                    rightStop = panelStop();
                } else {
                    rightStop =panelStop();
                }
            }
        }
        // 左上確認
        if (vnum >= LINE3 &&  snum >= ROW3) {
            for (i = idNum - 1; i >= LINE_HEAD1; i -= 6) {
                if (!leftUpStop) {
                    if (pan[i] !== cn) {
                        if (i > LINE_BOTTOM1) {
                            if (i !== LINE_HEAD2 && i !== LINE_HEAD3) {
                                anotherColor = changeCheck(preChangeNo, i);
                            } else {
                                leftUpStop = panelStop();                            
                            }
                        } else {
                            leftUpStop = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                         changeNo = changechoice(preChangeNo, changeNo);
                        leftUpStop = panelStop();
                    } else {
                        leftUpStop = panelStop();
                    }
                }
            }
        }
        // 左下確認
        if (vnum <= LINE3 && snum >= ROW3) {
            for (i = idNum + 1; i < LINE_BOTTOM5; i += 4) {
                if (!leftDownStop) {
                    if (pan[i] !== cn) {
                        if (i < LINE_HEAD5) {
                            if (i !== LINE_HEAD3 && i !== LINE_HEAD4) {
                                anotherColor = changeCheck(preChangeNo, i);
                            } else {
                                leftDownStop = panelStop();                              
                            }
                        } else {
                            leftDownStop = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                        changeNo = changechoice(preChangeNo, changeNo);
                        leftDownStop = panelStop();
                    } else {
                        leftDownStop = panelStop();
                    }
                }
            }
        }
        // 右上確認
        if (vnum >= LINE3 && snum <= ROW3) {
            for (i = idNum - 1; i > LINE_HEAD1; i -= 4) {
                if (!rightUpStop) {
                    if (pan[i] !== cn) {
                        if (i > LINE_BOTTOM1) {
                            if (i !== LINE_BOTTOM2 && i !== LINE_BOTTOM3) {
                                anotherColor = changeCheck(preChangeNo, i);
                            } else {
                                rightUpStop = panelStop();
                            }
                        } else {
                            rightUpStop = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                        changeNo = changechoice(preChangeNo, changeNo);
                        rightUpStop = panelStop();
                    } else {
                        rightUpStop = panelStop();
                    }
                }
            } 
        }
        // 右下確認
        if (vnum <= LINE3 && snum <= ROW3) {
            for (i = idNum + 1; i <= LINE_BOTTOM5; i += 6) {
                if (!rightDownStop) {
                    if (pan[i] !== cn) {
                        if (i < LINE_HEAD5) {
                            if (i !== LINE_BOTTOM3 && i !== LINE_BOTTOM4) {
                                anotherColor = changeCheck(preChangeNo, i);
                            } else {
                                rightDownStop = panelStop();
                            }
                        } else {
                            rightDownStop = panelStop();
                        }
                    } else if (pan[i] === cn && anotherColor) {
                        changeNo = changechoice(preChangeNo, changeNo);
                        rightDownStop = panelStop();
                    } else {
                        rightDownStop = panelStop();
                    }
                }
            }
        }
        // 色変更
        changeNo = colorChange2(changeNo, cn);
    }
    
    // // 配列に合う番号に修正
    // let idNum = num--; 
    // // 起点のパネルと色
    // let cn = pan[idNum];
    // let vnum = Math.floor(idNum / 5);
    // let snum = idNum % 5;
    // // 変化判定用
    // let preChangeNo = []; 
    // let changeNo = [];
    // let upStop = false;
    // let downStop = false;
    // let leftStop = false;
    // let rightStop = false;
    // let leftUpStop = false;
    // let leftDownStop = false;
    // let rightUpStop = false;
    // let rightDownStop = false;
    // let anotherColor = false;
    // const panelStop = () => {
    //     preChangeNo = [];
    //     anotherColor = false;
    // }

    //  // 上確認
    // for (i = idNum - 1; i >= LINE_HEAD1; i--) {
    //     if (i % 5 === snum && !upStop) {
    //         if (pan[i] !== cn && pan[i] > 1) {
    //             if (i / 5 !== LINE1) {
    //                 preChangeNo.push(i);
    //                 anotherColor = true;
    //             } else {
    //                 upStop = true;
    //                 panelStop();
    //             }
    //         } else if (pan[i] === cn && anotherColor) {
    //             upStop = true;
    //             for (const j of preChangeNo) {
    //                 changeNo.push(j);
    //             }
    //             panelStop();
    //         } else {
    //             upStop = true;
    //             panelStop();
    //         }
    //     }
    // }
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 下確認
    // for (i = idNum + 1; i <= LINE_BOTTOM5; i++) {
    //     if (i % 5 === snum && !downStop) {
    //         if (pan[i] !== cn && pan[i] > 1) {
    //             if (i / 5 !== LINE5) {
    //                 preChangeNo.push(i);
    //                 anotherColor = true;
    //             } else {
    //                 downStop = true;
    //                 panelStop();
    //             }
    //         } else if (pan[i] === cn && anotherColor) {
    //             downStop = true;
    //             for (const j of preChangeNo) {
    //                 changeNo.push(j);
    //             }
    //             panelStop();
    //         } else {
    //             downStop = true;
    //             panelStop();
    //         }
    //     }
    // }
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 横の準備
    // line = 0;
    // lineLast = 0;
    // switch (vnum) {
    //     case 1:
    //         line = LINE_HEAD2;
    //         lineLast = LINE_BOTTOM2;
    //         break;
    //     case 2:
    //         line = LINE_HEAD3;
    //         lineLast = LINE_BOTTOM3;
    //         break;
    //     case 3:
    //         line = LINE_HEAD4;
    //         lineLast = LINE_BOTTOM4;
    //         break;
    //     case 4:
    //         line = LINE_HEAD5;
    //         lineLast = LINE_BOTTOM5;
    //         break;
    //     default:
    //         line = LINE_HEAD1;
    //         lineLast = LINE_BOTTOM1;
    //         break;
    // }
    // // 左確認
    // for (i = idNum - 1; i >= line; i--) {
    //     if(!leftStop) {
    //         if (pan[i] !== cn && pan[i] > 1) {
    //             if (i > line) {
    //                 preChangeNo.push(i);
    //                 anotherColor = true;
    //             } else {
    //                 leftStop = true;
    //                 panelStop();
    //             }
    //         } else if (pan[i] === cn && anotherColor) {
    //             leftStop = true;
    //             for (const j of preChangeNo) {
    //                 changeNo.push(j);
    //             }
    //             panelStop();
    //         } else {
    //             leftStop = true;
    //             panelStop();
    //         }
    //     }
    // }
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 右確認
    // for (i = idNum + 1; i <= lineLast; i++) {
    //     if(!rightStop) {
    //         if (pan[i] !== cn && pan[i] > 1) {
    //             if (i < lineLast) {
    //                 preChangeNo.push(i);
    //                 anotherColor = true;
    //             } else {
    //                 rightStop = true;
    //                 panelStop();
    //             }
    //         } else if (pan[i] === cn && anotherColor) {
    //             rightStop = true;
    //             for (const j of preChangeNo) {
    //                 changeNo.push(j);
    //             }
    //             panelStop();
    //         } else {
    //             rightStop = true;
    //             panelStop();
    //         }
    //     }
    // }
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 左上確認
    // for (i = idNum - 1; i >= 0; i -= 6) {
    //     if (vnum >= LINE3) {
    //         if (snum >= ROW3) {
    //             if (!leftUpStop) {
    //                 if (pan[i] !== cn && pan[i] > 1) {
    //                     if (i > LINE_BOTTOM1) {
    //                         if (i !== LINE_HEAD2 && i !== LINE_HEAD3) {
    //                             preChangeNo.push(i);
    //                             anotherColor = true;
    //                         } else {
    //                             leftUpStop = true;
    //                             panelStop();                            
    //                         }
    //                     } else {
    //                         leftUpStop = true;
    //                         panelStop();
    //                     }
    //                 } else if (pan[i] === cn && anotherColor) {
    //                     leftUpStop = true;
    //                     for (const j of preChangeNo) {
    //                         changeNo.push(j);
    //                     }
    //                     panelStop();
    //                 } else {
    //                     leftUpStop = true;
    //                     panelStop();
    //                 }
    //             }
    //         } else {
    //             break;
    //         }
    //     } else {
    //         break;
    //     }      
    // }
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 左下確認
    // for (i = idNum + 1; i < 24; i += 4) {
    //     if (vnum <= LINE3) {
    //         if (snum >= ROW3) {
    //             if (!leftDownStop) {
    //                 if (pan[i] !== cn && pan[i] > 1) {
    //                     if (i < LINE_HEAD5) {
    //                         if (i !== LINE_HEAD3 && i !== LINE_HEAD4) {
    //                             preChangeNo.push(i);
    //                             anotherColor = true;
    //                         } else {
    //                             leftDownStop = true;
    //                             panelStop();                              
    //                         }
    //                     } else {
    //                         leftDownStop = true;
    //                         panelStop();
    //                     }
    //                 } else if (pan[i] === cn && anotherColor) {
    //                     leftDownStop = true;
    //                     for (const j of preChangeNo) {
    //                         changeNo.push(j);
    //                     }
    //                     panelStop();
    //                 } else {
    //                     leftDownStop = true;
    //                     panelStop();
    //                 }
    //             }
    //         } else {
    //             break;
    //         }
    //     } else {
    //         break;
    //     }      
    // }    
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 右上確認
    // for (i = idNum - 1; i > 0; i -= 4) {
    //     if (vnum >= LINE3) {
    //         if (snum <= ROW3) {
    //             if (!rightUpStop) {
    //                 if (pan[i] !== cn && pan[i] > 1) {
    //                     if (i > LINE_BOTTOM1) {
    //                         if (i !== LINE_BOTTOM2 && i !== LINE_BOTTOM3) {
    //                             preChangeNo.push(i);
    //                             anotherColor = true;
    //                         } else {
    //                             rightUpStop = true;
    //                             panelStop();
    //                         }
    //                     } else {
    //                         rightUpStop = true;
    //                         panelStop();
    //                     }
    //                 } else if (pan[i] === cn && anotherColor) {
    //                     rightUpStop = true;
    //                     for (const j of preChangeNo) {
    //                         changeNo.push(j);
    //                     }
    //                     panelStop();
    //                 } else {
    //                     rightUpStop = true;
    //                     panelStop();
    //                 }
    //             }
    //         } else {
    //             break;
    //         }
    //     } else {
    //         break;
    //     }      
    // } 
    // // 色変更
    // // changeNo = colorChange2(changeNo, cn);
    // // 右下確認
    // for (i = idNum + 1; i < 25; i += 6) {
    //     if (vnum <= LINE3) {
    //         if (snum <= ROW3) {
    //             if (!rightDownStop) {
    //                 if (pan[i] !== cn && pan[i] > 1) {
    //                     if (i < LINE_HEAD5) {
    //                         if (i !== LINE_BOTTOM3 && i !== LINE_BOTTOM4) {
    //                             preChangeNo.push(i);
    //                             anotherColor = true;
    //                         } else {
    //                             rightDownStop = true;
    //                             panelStop();
    //                         }
    //                     } else {
    //                         rightDownStop = true;
    //                         panelStop();
    //                     }
    //                 } else if (pan[i] === cn && anotherColor) {
    //                     rightDownStop = true;
    //                     for (const j of preChangeNo) {
    //                         changeNo.push(j);
    //                     }
    //                     panelStop();
    //                 } else {
    //                     rightDownStop = true;
    //                     panelStop();
    //                 }
    //             }
    //         } else {
    //             break;
    //         }
    //     } else {
    //         break;
    //     }      
    // } 
    // // 色変更
    // changeNo = colorChange2(changeNo, cn);

};

const colorChange = (p, colNo, num) => {
    if (p[num].change) {
        let strNo = num.toString();
        p[num] = cn;
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
            panels[numId] = 0;
            elem.style.backgroundColor = "gray";
            break;
        case 1:
            panels[numId] = 1;
            elem.style.backgroundColor = "yellow";
            break;
        case 2:
            panels[numId] = 2;
            elem.style.backgroundColor = "red";
            break;
        case 3:
            panels[numId] = 3;
            elem.style.backgroundColor = "green";
            break;
        case 4:
            panels[numId] = 4;
            elem.style.backgroundColor = "white";
            break;
        case 5:
            panels[numId] = 5;
            elem.style.backgroundColor = "blue";
            break;
        default:
            panels[numId] = 0; 
            elem.style.backgroundColor = "gray";
            break;
    }
    console.log(panels);
}

// 色変更まとめ
const colorChange2 = (chgn, colNo) => {
    if (chgn.length !== 0) {
        for (let j of chgn) {
            // パネル用に文字列に変換
            j++;
            let strNum = j.toString(10);
            colorSet(colNo, strNum);
        }
    }
    chgn = [];
    return chgn;
}

const changechoice = (preChangeNo, changeNo) => {
    for (const j of preChangeNo) {
        changeNo.push(j);
    }
    return changeNo;
}

const changeCheck = (preChangeNo, i) => {
    preChangeNo.push(i);
    return true;
}
// const switcher2 = (c, n) => {
//     colorSet(n, c)
//     console.log(panels);
// };
// const panelChange = (pan, numb) => {
//     let vn = Math.floor(numb / 5);
//     let sn = numb % 5;
//     // 起点の色
//     let cn = pan[vn][sn];
//     // 上確認
//     for ( i = vn - 1; i <= 0; i--) {
//         if (pan[i][sn] !== cn && pan[i][sn] > 1) {
//             pan[i][sn].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = vn - 1; i <= 0; i--) {
//         if (pan[i][sn].change) {
//             //  sleep(1000);
//             pan[i][sn] = cn;
//             pan[i][sn].change = false;
//         } else {
//             break;
//         }
//     }
//     // 下確認
//     for ( i = vn + 1; i <= 4; i++) {
//         if (pan[i][sn] !== cn && pan[i][sn] > 1) {
//             pan[i][sn].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = vn + 1; i <= 4; i++) {
//         if (pan[i][sn].change) {
//             //  sleep(1000);
//             pan[i][sn] = cn
//             pan[i][sn].change = false;
//         } else {
//             break;
//         }
//     }
//       // 左確認
//       for ( i = sn - 1; i <= 0; i--) {
//         if (pan[vn][i] !== cn && pan[vn][i] > 1) {
//             pan[vn][i].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = sn - 1; i <= 0; i--) {
//         if (pan[vn][i].change) {
//             //  sleep(1000);
//             pan[vn][i] = cn
//             pan[vn][i].change = false;
//         } else {
//             break;
//         }
//     }
//     // 右確認
//     for ( i = sn + 1; i <= 4; i++) {
//         if (pan[vn][i] !== cn && pan[vn][i] > 1) {
//             pan[vn][i].change = true;
//         } else {
//             break;
//         }
//     }
//     // 色変更
//     for ( i = sn + 1; i <= 4; i++) {
//         if (pan[vn][i].change) {
//             //  sleep(1000);
//             pan[vn][i] = cn
//             pan[vn][i].change = false;
//         } else {
//             break;
//         }
//     }
//     // 左上確認
//     leftUpperCheck: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j] !== cn && pan[i][j] > 1) {
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
//                 pan[i][j] = cn
//                 pan[i][j].change = false;
//             } else {
//                 break leftUpperColor;
//             }
//         }
        
//     }
//     // 左下確認
//     leftDownerCheck: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn - 1; j >= 0; j--) {
//             if (pan[i][j] !== cn && pan[i][j] > 1) {
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
//                 pan[i][j] = cn
//                 pan[i][j].change = false;
//             } else {
//                 break leftDownerColor;
//             }
//         }
//     }
//     // 右上確認
//     rightUpperCheck: for ( i = vn - 1; i >= 0; i--) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j] !== cn && pan[i][j] > 1) {
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
//                 pan[i][j] = cn
//                 pan[i][j].change = false;
//             } else {
//                 break rightUpperColor;
//             }
//         }
//     }
//     // 右下確認
//     rightDownerCheck: for ( i = vn + 1; i <= 4; i++) {
//         for (j = sn + 1; j <= 4; j++) {
//             if (pan[i][j] !== cn && pan[i][j] > 1) {
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
//                 pan[i][j] = cn
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