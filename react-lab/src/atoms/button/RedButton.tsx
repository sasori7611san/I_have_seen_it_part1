import { FC, memo } from 'react';
import '../../App.css';
import { useRecoilState } from 'recoil';
import { colorNumber } from '../../panel/colorNumber';

export const RedButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 2 });
  //   return <button className="redButton" onClick={choiceNo}></button>;
  return <button className="redButton"></button>;
});
