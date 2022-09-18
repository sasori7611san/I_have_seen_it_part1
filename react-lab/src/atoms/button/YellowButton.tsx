import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorButton } from './ColorButton';

type Props = {
  children: ReactNode;
};

export const YellowButton: FC<Props> = memo((props): any => {
  const { children } = props;
  const getColorNo = () => {
    return 1;
  };
  return <SButton onClick={getColorNo}>{children}</SButton>;
});

const SButton = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;
  background-color: yellow;
`;
