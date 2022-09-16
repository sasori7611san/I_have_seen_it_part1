import { FC, memo } from 'react';
import { Board } from '../organisms/Board';
import { ChoiceColor } from '../organisms/ChoiceColor';

export const Home: FC = memo(() => {
  return (
    <>
      <Board />
      <ChoiceColor />
    </>
  );
});
