import { lazy } from 'react';
// import Table1 from './Table1';
// import Table2 from './Table2';
// import Table3 from './Table3';
import TabPanes from '../tabs';

const Table1 = lazy(() => import('./Table1'));
const Table2 = lazy(() => import('./Table2'));
const Table3 = lazy(() => import('./Table3'));

const Table = () => (
  <TabPanes isDynamic={true} defaultTab={1}>
    <Table1 key={1} title={'table1'}></Table1>
    <Table2 key={2} title={'table2'}></Table2>
    <Table3 key={3} title={'table3'}></Table3>
  </TabPanes>
);

export default Table;
