import { FC, memo, ReactNode } from 'react';
import panel from 'styled-components';
import { BasePanel } from './BasePanel';

type Props = {
  children: ReactNode;
  colorNo: number;
  // onClick: ReactNode;
};

export const Panel: FC<Props> = memo((props: any): any => {
  const { children, colorNo, onClick } = props;
  switch (colorNo) {
    case 1:
      return (
        <S1button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S1button>
      );
    case 2:
      return (
        <S2button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S2button>
      );
    case 3:
      return (
        <S3button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S3button>
      );
    case 4:
      return (
        <S4button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S4button>
      );
    case 5:
      return (
        <S5button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S5button>
      );
    default:
      return (
        <S0button>
          {children}
          {/* <button onClick={onClick}>{children}</button> */}
        </S0button>
      );
  }
});

const S0button = panel(BasePanel)`
  background-color: gray;
`;

const S1button = panel(BasePanel)`
  background-color: yellow;
`;

const S2button = panel(BasePanel)`
  background-color: red;
`;

const S3button = panel(BasePanel)`
  background-color: green;
`;

const S4button = panel(BasePanel)`
  background-color: white;
`;

const S5button = panel(BasePanel)`
  background-color: blue;
`;
