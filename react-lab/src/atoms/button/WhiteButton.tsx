import { FC, memo } from 'react';
import '../../App.css';
import { useRecoilState } from 'recoil';
import { colorNumber } from '../../panel/colorNumber';

export const WhiteButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 4 });
  //   return <button className="whiteButton" onClick={choiceNo}></button>;
  return <button className="whiteButton"></button>;
});
