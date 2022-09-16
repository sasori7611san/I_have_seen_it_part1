import '../App.css';
import { GrayButton } from '../atoms/button/GrayButton';
import { YellowButton } from '../atoms/button/YellowButton';
import { BlueButton } from '../atoms/button/BlueButton';
import { WhiteButton } from '../atoms/button/WhiteButton';
import { GreenButton } from '../atoms/button/GreenButton';
import { RedButton } from '../atoms/button/RedButton';

export const ChoiceColor = () => {
  return (
    <>
      <RedButton />
      <GreenButton />
      <WhiteButton />
      <BlueButton />
      <YellowButton />
      <GrayButton />
    </>
  );
  // return <Panel backColor={0}>1</Panel>;
  // return <p>Board</p>;
};
