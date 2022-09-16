import { FC, memo } from 'react';
import { useRecoilState } from 'recoil';
import '../../App.css';
import { ChoiceColor } from '../../organisms/ChoiceColor';
import { colorNumber } from '../../panel/colorNumber';

export const GrayButton: FC = memo((): any => {
  //   const [colorNo, setColorNo] = useRecoilState(colorNumber);
  //   const choiceNo = () => setColorNo({ colorId: 0 });
  //   return <button className="grayButton" onClick={choiceNo}></button>;
  return <button className="grayButton"></button>;
});
