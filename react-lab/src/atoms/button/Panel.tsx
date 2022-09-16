import { FC, memo, ReactNode, useState } from 'react';
import '../../App.css';

type Props = {
  children: ReactNode;
  colorNo: number;
};

export const Panel: FC<Props> = memo((props: any): any => {
  const { children, colorNo } = props;
  let colors: string = 'grayPanel';
  // let [panelColor, setPanelColor] = useState(props.colorNo);
  switch (colorNo) {
    case 1:
      colors = 'yellowPanel';
      break;
    case 2:
      colors = 'redPanel';
      break;
    case 3:
      colors = 'greenPanel';
      break;
    case 4:
      colors = 'whitePanel';
      break;
    case 5:
      colors = 'bluePanel';
      break;
    default:
      colors = 'grayPanel';
      break;
  }
  return (
    <button id={children} className={colors}>
      {children}
    </button>
  );
  // const { children, backColor } = props;
  // let [colors, useColors] = useState<number>(0);
  // let panelColor: string;
  // useColors(backColor);
  // switch (colors) {
  //   case 1:
  //     panelColor = 'yellow';
  //     break;
  //   case 2:
  //     panelColor = 'red';
  //     break;
  //   case 3:
  //     panelColor = 'green';
  //     break;
  //   case 4:
  //     panelColor = 'white';
  //     break;
  //   case 5:
  //     panelColor = 'blue';
  //     break;
  //   default:
  //     panelColor = 'gray';
  //     break;
  // }
  // return (
  //   <button id="panel" color={panelColor}>
  //     {children}
  //   </button>
  // );
});
