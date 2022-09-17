import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { ColorButton } from './ColorButton';

type Props = {
  children: ReactNode;
};

export const RedButton: FC<Props> = memo((props): any => {
  const { children } = props;
  return <SButton>{children}</SButton>;
});

const SButton = styled(ColorButton)`
  background-color: red;
`;
