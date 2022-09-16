import { FC, memo, useContext } from 'react';
import '../App.css';
import { Panel } from '../atoms/button/Panel';
import { useRecoilValue } from 'recoil';
import { ColorButton, Context } from '../atoms/button/ColorButton';

export const Board: FC = memo(() => {
  // export const Board: FC = memo((props) => {
  //   const { buttonColor } = props;
  // const panelCOlorNo = useContext(Context);
  // const colorNo = useRecoilValue(colorNumber);
  return (
    <>
      <Panel colorNo={0}>1</Panel>
      <Panel colorNo={0}>2</Panel>
      <Panel colorNo={0}>3</Panel>
      <Panel colorNo={0}>4</Panel>
      <Panel colorNo={0}>5</Panel>
      <br />
      <Panel colorNo={0}>6</Panel>
      <Panel colorNo={1}>7</Panel>
      <Panel colorNo={2}>8</Panel>
      <Panel colorNo={3}>9</Panel>
      <Panel colorNo={4}>10</Panel>
      <br />
      <Panel colorNo={5}>11</Panel>
      <Panel colorNo={0}>12</Panel>
      <Panel colorNo={0}>13</Panel>
      <Panel colorNo={0}>14</Panel>
      <Panel colorNo={0}>15</Panel>
      <br />
      <Panel colorNo={0}>16</Panel>
      <Panel colorNo={0}>17</Panel>
      <Panel colorNo={0}>18</Panel>
      <Panel colorNo={0}>19</Panel>
      <Panel colorNo={0}>20</Panel>
      <br />
      <Panel colorNo={0}>21</Panel>
      <Panel colorNo={0}>22</Panel>
      <Panel colorNo={0}>23</Panel>
      <Panel colorNo={0}>24</Panel>
      <Panel colorNo={0}>25</Panel>
      <br />
    </>
  );
});
