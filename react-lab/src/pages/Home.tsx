import { FC, memo } from 'react';
import { ColorProvider } from '../ColorProvider';
import { Board } from '../organisms/Board';
import { ChoiceColor } from '../organisms/ChoiceColor';
import { Screen } from '../organisms/Screen';

// type Props = {
//   colorNo: string = '0';
// }

export const Home: FC = memo(() => {
  // const {colorNo} = props;
  // let numColorNo: number = parseInt(colorNo);
  return (
    // <Screen />
    <>
      <ColorProvider>
        <Board />
        <ChoiceColor />
      </ColorProvider>
    </>
  );
});
