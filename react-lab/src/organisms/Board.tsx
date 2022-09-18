import { Panel } from '../atoms/button/Panel';
import '../App.css';
import { useContext } from 'react';

// const colorNo = useContext()

export const Board = () => {
  // 使用色番号保持
  let color: number = 0;
  // 縦要素番号
  let verNo: number = 0;
  // 横要素番号
  let sideNo: number = 0;
  // パネルID
  let panelId: number = 0;

  // パネル
  let panels: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, -1],
    [-1, -1, -1, -1, -1, -1, -1],
  ];

  // 枚数（赤）
  let sheetsRed: number = 0;

  // 枚数（緑）
  let sheetsGreen: number = 0;

  // 枚数（白）
  let sheetsWhite: number = 0;

  // 枚数（青）
  let sheetsBlue: number = 0;

  // 色選択
  const choiceColor = (num: number): void => {
    switch (num) {
      case 2:
        color = 2;
        console.log('red');
        break;
      case 3:
        color = 3;
        console.log('green');
        break;
      case 4:
        color = 4;
        console.log('white');
        break;
      case 5:
        color = 5;
        console.log('blue');
        break;
      case 1:
        color = 1;
        console.log('yellow');
        break;
      default:
        color = 0;
        console.log('gray');
        break;
    }
  };

  // 番号選択
  const action = (num: number): number => {
    if (num <= 25 && num > 0) {
      // 取得配列要素取得
      if (Math.floor(num / 5) < 5 && num % 5 !== 0) {
        verNo = Math.floor(num / 5) + 1;
      } else {
        verNo = Math.floor(num / 5);
      }
      num % 5 == 0 ? (sideNo = 5) : (sideNo = num % 5);
      panelId = num;
      colorSet(color, panelId, verNo, sideNo);
      panelChange(panels, verNo, sideNo);
      total(panels);
    }
    return color;
  };

  const colorSet = (col: number, id: number, v: number, s: number) => {
    // id文字列化
    let strId: string = id.toString();
    // パネルに色を反映
    let elem: HTMLElement | null = document.getElementById(strId);
    if (elem !== null) {
      switch (col) {
        case 1:
          panels[v][s] = 1;
          elem.style.backgroundColor = 'yellow';
          break;
        case 2:
          panels[v][s] = 2;
          elem.style.backgroundColor = 'red';
          break;
        case 3:
          panels[v][s] = 3;
          elem.style.backgroundColor = 'green';
          break;
        case 4:
          panels[v][s] = 4;
          elem.style.backgroundColor = 'white';
          break;
        case 5:
          panels[v][s] = 5;
          elem.style.backgroundColor = 'blue';
          break;
        default:
          panels[v][s] = 0;
          elem.style.backgroundColor = 'gray';
          break;
      }
      console.log(panels);
    }
  };

  const panelChange = (pan: number[][], v: number, s: number) => {
    // 起点の色
    let cn = pan[v][s];
    console.log(cn);
    // パネル変わる可能性
    let panelPreChange = false;
    // 色判定（0:灰色、1:黄色は除外）
    if (cn >= 2) {
      // 上確認
      // 変わるパネルがあるか判定
      let i: number;
      for (i = v - 1; i >= 0; i--) {
        console.log(`縦:${i}`);
        console.log(`横:${s}`);
        console.log(pan[i][s]);
        if (pan[i][s] !== cn && pan[i][s] > 1) {
          panelPreChange = true;
          console.log('上チェックあり');
        } else if (pan[i][s] <= 1) {
          panelPreChange = false;
          console.log('上チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('上チェック停止2');
            break;
          }
        }
      }
      console.log('上チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v - 1; i >= 0; i--) {
          if (pan[i][s] !== cn && pan[i][s] > 1) {
            let cNum = (i - 1) * 5 + s;
            colorSet(cn, cNum, i, s);
            console.log('上チェンジ');
          } else {
            console.log('上チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('上完了');
      // 下確認
      // 変わるパネルがあるか判定
      for (i = v + 1; i >= 0; i++) {
        console.log(`縦:${i}`);
        console.log(`横:${s}`);
        console.log(pan[i][s]);
        if (pan[i][s] !== cn && pan[i][s] > 1) {
          panelPreChange = true;
          console.log('下チェックあり');
        } else if (pan[i][s] <= 1) {
          panelPreChange = false;
          console.log('下チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('下チェック停止2');
            break;
          }
        }
      }
      console.log('下チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v + 1; i >= 0; i++) {
          if (pan[i][s] !== cn && pan[i][s] > 1) {
            let cNum = (i - 1) * 5 + s;
            colorSet(cn, cNum, i, s);
            console.log('下チェンジ');
          } else {
            console.log('下チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('下完了');
      // 左確認
      // 変わるパネルがあるか判定
      for (i = s - 1; i >= 0; i--) {
        console.log(`縦:${v}`);
        console.log(`横:${i}`);
        console.log(pan[v][i]);
        if (pan[v][i] !== cn && pan[v][i] > 1) {
          panelPreChange = true;
          console.log('左チェックあり');
        } else if (pan[v][i] <= 1) {
          panelPreChange = false;
          console.log('左チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('左チェック停止2');
            break;
          }
        }
      }
      console.log('左チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = s - 1; i >= 0; i--) {
          if (pan[v][i] !== cn && pan[v][i] > 1) {
            let cNum = (v - 1) * 5 + i;
            colorSet(cn, cNum, v, i);
            console.log('左チェンジ');
          } else {
            console.log('左チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('左完了');
      // 右確認
      // 変わるパネルがあるか判定
      for (i = s + 1; i >= 0; i++) {
        console.log(`縦:${v}`);
        console.log(`横:${i}`);
        console.log(pan[v][i]);
        if (pan[v][i] !== cn && pan[v][i] > 1) {
          panelPreChange = true;
          console.log('右チェックあり');
        } else if (pan[v][i] <= 1) {
          panelPreChange = false;
          console.log('右チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('右チェック停止2');
            break;
          }
        }
      }
      console.log('右チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = s + 1; i >= 0; i++) {
          if (pan[v][i] !== cn && pan[v][i] > 1) {
            let cNum = (v - 1) * 5 + i;
            colorSet(cn, cNum, v, i);
            console.log('右チェンジ');
          } else {
            console.log('右チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('右完了');
      // 左上確認
      // 変わるパネルがあるか判定
      let j: number;
      for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
        console.log(`縦:${i}`);
        console.log(`横:${j}`);
        console.log(pan[i][j]);
        if (pan[i][j] !== cn && pan[i][j] > 1) {
          panelPreChange = true;
          console.log('左上チェックあり');
        } else if (pan[i][j] <= 1) {
          panelPreChange = false;
          console.log('左上チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('左上チェック停止2');
            break;
          }
        }
      }
      console.log('左上チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
          if (pan[i][j] !== cn && pan[i][j] > 1) {
            let cNum = (i - 1) * 5 + j;
            colorSet(cn, cNum, i, j);
            console.log('左上チェンジ');
          } else {
            console.log('左上チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('左上完了');
      // 左下確認
      // 変わるパネルがあるか判定
      for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
        console.log(`縦:${i}`);
        console.log(`横:${j}`);
        console.log(pan[i][j]);
        if (pan[i][j] !== cn && pan[i][j] > 1) {
          panelPreChange = true;
          console.log('左下チェックあり');
        } else if (pan[i][j] <= 1) {
          panelPreChange = false;
          console.log('左下チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('左下チェック停止2');
            break;
          }
        }
      }
      console.log('左下チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
          if (pan[i][j] !== cn && pan[i][j] > 1) {
            let cNum = (i - 1) * 5 + j;
            colorSet(cn, cNum, i, j);
            console.log('左下チェンジ');
          } else {
            console.log('左下チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('左下完了');
      // // 右上確認
      // 変わるパネルがあるか判定
      for (i = v - 1, j = s + 1; i >= 0 || j >= 6; i--, j++) {
        console.log(`縦:${i}`);
        console.log(`横:${j}`);
        console.log(pan[i][j]);
        if (pan[i][j] !== cn && pan[i][j] > 1) {
          panelPreChange = true;
          console.log('右上チェックあり');
        } else if (pan[i][j] <= 1) {
          panelPreChange = false;
          console.log('右上チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('右上チェック停止2');
            break;
          }
        }
      }
      console.log('右上チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v - 1, j = s + 1; i >= 0 || j >= 6; i--, j++) {
          if (pan[i][j] !== cn && pan[i][j] > 1) {
            let cNum = (i - 1) * 5 + j;
            colorSet(cn, cNum, i, j);
            console.log('右上チェンジ');
          } else {
            console.log('右上チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('右上完了');
      // 右下確認
      // 変わるパネルがあるか判定
      for (i = v + 1, j = s + 1; i <= 6 || j >= 6; i++, j++) {
        console.log(`縦:${i}`);
        console.log(`横:${j}`);
        console.log(pan[i][j]);
        if (pan[i][j] !== cn && pan[i][j] > 1) {
          panelPreChange = true;
          console.log('右下チェックあり');
        } else if (pan[i][j] <= 1) {
          panelPreChange = false;
          console.log('右下チェック停止1');
          break;
        } else {
          if (panelPreChange) {
            console.log('右下チェック停止2');
            break;
          }
        }
      }
      console.log('右下チェック通過');
      // パネルを変える
      if (panelPreChange) {
        for (i = v + 1, j = s + 1; i <= 6 || j >= 6; i++, j++) {
          if (pan[i][j] !== cn && pan[i][j] > 1) {
            let cNum = (i - 1) * 5 + j;
            colorSet(cn, cNum, i, j);
            console.log('右下チェンジ');
          } else {
            console.log('右下チェンジ停止');
            break;
          }
        }
        panelPreChange = false;
      }
      console.log('右下完了');
    }
  };
  // 集計
  const total = (pan: number[][]) => {
    let k: number;
    let l: number;
    for (k = 0; k <= 6; k++) {
      for (l = 0; l <= 6; l++) {
        switch (pan[k][l]) {
          case 2:
            sheetsRed++;
            break;
          case 3:
            sheetsGreen++;
            break;
          case 4:
            sheetsWhite++;
            break;
          case 5:
            sheetsBlue++;
            break;
          default:
            break;
        }
      }
    }
  };
  return (
    <>
      {/* <Panel onClick={action(color)} colorNo={panels[1][1]}>
        1
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[1][2]}>
        2
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[1][3]}>
        3
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[1][4]}>
        4
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[1][5]}>
        5
      </Panel>
      <br />
      <Panel onClick={action(color)} colorNo={panels[2][1]}>
        6
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[2][2]}>
        7
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[2][3]}>
        8
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[2][4]}>
        9
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[2][5]}>
        10
      </Panel>
      <br />
      <Panel onClick={action(color)} colorNo={panels[3][1]}>
        11
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[3][2]}>
        12
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[3][3]}>
        13
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[3][4]}>
        14
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[3][5]}>
        15
      </Panel>
      <br />
      <Panel onClick={action(color)} colorNo={panels[4][1]}>
        16
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[4][2]}>
        17
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[4][3]}>
        18
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[4][4]}>
        19
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[4][5]}>
        20
      </Panel>
      <br />
      <Panel onClick={action(color)} colorNo={panels[5][1]}>
        21
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[5][2]}>
        22
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[5][3]}>
        23
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[5][4]}>
        24
      </Panel>
      <Panel onClick={action(color)} colorNo={panels[5][5]}>
        25
      </Panel> */}
      <br />
      <Panel colorNo={panels[1][1]}>1</Panel>
      <Panel colorNo={panels[1][2]}>2</Panel>
      <Panel colorNo={panels[1][3]}>3</Panel>
      <Panel colorNo={panels[1][4]}>4</Panel>
      <Panel colorNo={panels[1][5]}>5</Panel>
      <br />
      <Panel colorNo={panels[2][1]}>6</Panel>
      <Panel colorNo={panels[2][2]}>7</Panel>
      <Panel colorNo={panels[2][3]}>8</Panel>
      <Panel colorNo={panels[2][4]}>9</Panel>
      <Panel colorNo={panels[2][5]}>10</Panel>
      <br />
      <Panel colorNo={panels[3][1]}>11</Panel>
      <Panel colorNo={panels[3][2]}>12</Panel>
      <Panel colorNo={panels[3][3]}>13</Panel>
      <Panel colorNo={panels[3][4]}>14</Panel>
      <Panel colorNo={panels[3][5]}>15</Panel>
      <br />
      <Panel colorNo={panels[4][1]}>16</Panel>
      <Panel colorNo={panels[4][2]}>17</Panel>
      <Panel colorNo={panels[4][3]}>18</Panel>
      <Panel colorNo={panels[4][4]}>19</Panel>
      <Panel colorNo={panels[4][5]}>20</Panel>
      <br />
      <Panel colorNo={panels[5][1]}>21</Panel>
      <Panel colorNo={panels[5][2]}>22</Panel>
      <Panel colorNo={panels[5][3]}>23</Panel>
      <Panel colorNo={panels[5][4]}>24</Panel>
      <Panel colorNo={panels[5][5]}>25</Panel>
      <br />
      {/* <Panel colorNo={5}>1</Panel>
      <Panel colorNo={5}>2</Panel>
      <Panel colorNo={5}>3</Panel>
      <Panel colorNo={5}>4</Panel>
      <Panel colorNo={5}>5</Panel>
      <br />
      <Panel colorNo={1}>6</Panel>
      <Panel colorNo={1}>7</Panel>
      <Panel colorNo={1}>8</Panel>
      <Panel colorNo={1}>9</Panel>
      <Panel colorNo={1}>10</Panel>
      <br />
      <Panel colorNo={2}>11</Panel>
      <Panel colorNo={2}>12</Panel>
      <Panel colorNo={2}>13</Panel>
      <Panel colorNo={2}>14</Panel>
      <Panel colorNo={2}>15</Panel>
      <br />
      <Panel colorNo={3}>16</Panel>
      <Panel colorNo={3}>17</Panel>
      <Panel colorNo={3}>18</Panel>
      <Panel colorNo={3}>19</Panel>
      <Panel colorNo={3}>20</Panel>
      <br />
      <Panel colorNo={4}>21</Panel>
      <Panel colorNo={4}>22</Panel>
      <Panel colorNo={4}>23</Panel>
      <Panel colorNo={4}>24</Panel>
      <Panel colorNo={4}>25</Panel>
      <br /> */}
    </>
  );
};
