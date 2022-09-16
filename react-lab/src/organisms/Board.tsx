import { memo } from 'react';
import '../App.css';
import { Panel } from '../atoms/button/Panel';
import { useRecoilValue } from 'recoil';
import { colorNumber } from '../panel/colorNumber';

export const Board = memo((props) => {
  // const { colorNo } = props;
  // const colorNo = useRecoilValue(colorNumber);
  return (
    <>
      <Panel colorNo={0}>1</Panel>
      <Panel colorNo={1}>2</Panel>
      <Panel colorNo={2}>3</Panel>
      <Panel colorNo={3}>4</Panel>
      <Panel colorNo={4}>5</Panel>
      <br />
      <Panel colorNo={5}>6</Panel>
      <Panel colorNo={6}>7</Panel>
      <Panel colorNo={0}>8</Panel>
      <Panel colorNo={0}>9</Panel>
      <Panel colorNo={0}>10</Panel>
      <br />
      <Panel colorNo={0}>11</Panel>
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
