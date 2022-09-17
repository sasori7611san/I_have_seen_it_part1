import { FC, memo } from 'react';
import { Board } from '../organisms/Board';
import { ChoiceColor } from '../organisms/ChoiceColor';
import { Screen } from '../organisms/Screen';

export const Home: FC = memo(() => {
  return (
    <Screen />
    // <>
    //   <Context.Provider value={ContextType}>
    //   <Board />
    //   <ChoiceColor />
    //   </Context.Provider>
    // </>
  );
});
