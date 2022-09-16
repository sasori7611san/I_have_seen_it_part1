import '../App.css';
import { GrayButton } from '../atoms/button/GrayButton';
import { YellowButton } from '../atoms/button/YellowButton';
import { BlueButton } from '../atoms/button/BlueButton';
import { WhiteButton } from '../atoms/button/WhiteButton';
import { GreenButton } from '../atoms/button/GreenButton';
import { RedButton } from '../atoms/button/RedButton';
import { ColorButton, Context } from '../atoms/button/ColorButton';
import { useState, useContext } from 'react';

export const ChoiceColor = () => {
  // const context = useContext(Context);
  const [color, useColor] = useState(0);
  // const setColor = () => {
  //   useColor(context);
  // };
  return (
    <>
      <ColorButton buttonColor={2} children={undefined} />
      <ColorButton buttonColor={3} children={undefined} />
      <ColorButton buttonColor={4} children={undefined} />
      <ColorButton buttonColor={5} children={undefined} />
      <ColorButton buttonColor={1} children={undefined} />
      <ColorButton buttonColor={0} children={undefined} />
      {/* <RedButton />
      <GreenButton />
      <WhiteButton />
      <BlueButton />
      <YellowButton />
      <GrayButton /> */}
    </>
  );
};
