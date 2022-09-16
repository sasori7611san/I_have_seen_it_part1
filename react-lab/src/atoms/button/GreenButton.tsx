import { FC, memo } from 'react';
import '../../App.css';
import { useRecoilState } from 'recoil';
import { colorNumber } from '../../panel/colorNumber';

export const GreenButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 3 });
  //   return <button className="greenButton" onClick={choiceNo}></button>;
  return <button className="greenButton"></button>;
});
