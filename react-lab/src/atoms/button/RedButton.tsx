import { createContext, FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorButton } from './ColorButton';
import { useContext } from 'react';
import { ColorContext } from '../../ColorProvider';

// type Props = {
//   children: ReactNode;
//   colorNumber: number;
// };

// export const colorNum = createContext(2);

export const RedButton: FC/* <Props> */= memo((): any => {
  let [color, setColor]: any = useContext(ColorContext);
  // const COLORNO = 2;
  // const { children } = props;
  const getColorNo = () => {
    setColor(color = 2);
    return color;
  };

  return <SButton onClick={getColorNo}></SButton>;
  // return <SButton onClick={getColorNo}>{children}</SButton>;
});

const SButton = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;
  background-color: red;
`;
