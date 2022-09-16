import { FC, memo } from 'react';
import '../../App.css';
import { useRecoilState } from 'recoil';
import { colorNumber } from '../../panel/colorNumber';

export const BlueButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 5 });
  //   return <button className="blueButton" onClick={choiceNo}></button>;
  return <button className="blueButton"></button>;
});
