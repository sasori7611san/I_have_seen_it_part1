import { FC, memo, ReactNode, useState } from 'react';
import '../../App.css';

type Props = {
  children: ReactNode;
  backColor: number;
};

export const Panel: FC<Props> = memo((props: any): any => {
  const { children, backColor } = props;
  const [colors, useColors] = useState<number>(0);
  let panelColor: string;
  useColors(backColor);
  switch (colors) {
    case 1:
      panelColor = 'yellow';
      break;
    case 2:
      panelColor = 'red';
      break;
    case 3:
      panelColor = 'green';
      break;
    case 4:
      panelColor = 'white';
      break;
    case 5:
      panelColor = 'blue';
      break;
    default:
      panelColor = 'gray';
      break;
  }
  return <button color={panelColor}>{children}</button>;
});
