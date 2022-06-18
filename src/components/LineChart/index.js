import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import TabPanes from '../tabs';

const LineChart = () => (
  <TabPanes>
    <Line1 key={1} title={'line1'}></Line1>
    <Line2 key={2} title={'line2'}></Line2>
    <Line3 key={3} title={'line3'}></Line3>
  </TabPanes>
);

export default LineChart;
