import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import TabPanes from '../tabs';

const Table = () => (
  <TabPanes>
    <Table1 key={1} title={'table1'}></Table1>
    <Table2 key={2} title={'table2'}></Table2>
    <Table3 key={3} title={'table3'}></Table3>
  </TabPanes>
);

export default Table;
