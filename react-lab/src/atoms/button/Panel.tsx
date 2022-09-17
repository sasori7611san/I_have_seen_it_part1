import { FC, memo, ReactNode, useContext, useState } from 'react';
import '../../App.css';
import { Context } from './ColorButton';

type Props = {
  children: ReactNode;
  colorNo: number;
};

export const Panel: FC<Props> = memo((props: any): any => {
  const { children, colorNo } = props;
  const panelColorNo = useContext(Context);
  let colors: string = 'grayPanel';
  // let [panelColor, setPanelColor] = useState(props.colorNo);
  switch (colorNo) {
    case 1:
      colors = 'yellowPanel';
      console.log('yellow');
      break;
    case 2:
      colors = 'redPanel';
      console.log('red');
      break;
    case 3:
      colors = 'greenPanel';
      console.log('green');
      break;
    case 4:
      colors = 'whitePanel';
      console.log('white');
      break;
    case 5:
      colors = 'bluePanel';
      console.log('blue');
      break;
    default:
      colors = 'grayPanel';
      console.log('gray');
      break;
  }
  return <button className={colors}>{children}</button>;
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
