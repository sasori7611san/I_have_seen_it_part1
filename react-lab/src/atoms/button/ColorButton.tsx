import { createContext, FC, memo, ReactNode, useState } from 'react';
import '../../App.css';
import { Board } from '../../organisms/Board';
import { Panel } from './Panel';

export type ContextType = number;
export const Context = createContext<ContextType>(0);
type Props = {
  children: ReactNode;
  buttonColor: number;
};

// export const ColorButton: FC = memo((): any => {
export const ColorButton: FC<Props> = memo((props: any): any => {
  const { buttonColor } = props;
  let colors: string = 'grayButton';
  let [panelColor, setPanelColor] = useState(0);
  const updateContext = () => setPanelColor(buttonColor);
  switch (buttonColor) {
    case 1:
      colors = 'yellowButton';
      break;
    case 2:
      colors = 'redButton';
      break;
    case 3:
      colors = 'greenButton';
      break;
    case 4:
      colors = 'whiteButton';
      break;
    case 5:
      colors = 'blueButton';
      break;
    default:
      colors = 'grayButton';
      break;
  }
  return (
    <>
      <button onClick={updateContext} className={colors} />
      <Context.Provider value={panelColor}>
        {/* <Panel colorNo={panelColor} children={undefined} /> */}
      </Context.Provider>
    </>
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
