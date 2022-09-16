import { FC, memo } from 'react';
import '../../App.css';
import { useRecoilState } from 'recoil';
import { colorNumber } from '../../panel/colorNumber';

export const YellowButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 1 });
  //   return <button className="yellowButton" onClick={choiceNo}></button>;
  return <button className="yellowButton"></button>;
});
