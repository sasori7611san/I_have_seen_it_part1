import '../App.css';
import { BlueButton } from '../atoms/button/BlueButton';
import { ColorButton } from '../atoms/button/ColorButton';
import { GrayButton } from '../atoms/button/GrayButton';
import { GreenButton } from '../atoms/button/GreenButton';
import { RedButton } from '../atoms/button/RedButton';
import { WhiteButton } from '../atoms/button/WhiteButton';
import { YellowButton } from '../atoms/button/YellowButton';

// 色選択
// const colors = (num: number): number => {
//   switch (num) {
//     case 2:
//       console.log('red');
//       return 2;
//       break;
//     case 3:
//       // color = 3;
//       console.log('green');
//       return 3;
//       break;
//     case 4:
//       // color = 4;
//       console.log('white');
//       return 4;
//       break;
//     case 5:
//       // color = 5;
//       console.log('blue');
//       return 5;
//       break;
//     case 1:
//       // color = 1;
//       console.log('yellow');
//       return 1;
//       break;
//     default:
//       // color = 0;
//       console.log('gray');
//       return 0;
//       break;
//   }
// };
export const ChoiceColor = () => {
  return (
    <>
      <RedButton>{}</RedButton>
      <GreenButton>{}</GreenButton>
      <WhiteButton>{}</WhiteButton>
      <BlueButton>{}</BlueButton>
      <YellowButton>{}</YellowButton>
      <GrayButton>{}</GrayButton>
    </>
  );
  // return <Panel backColor={0}>1</Panel>;
  // return <p>Board</p>;
};
