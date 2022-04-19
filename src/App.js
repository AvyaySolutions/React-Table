
import React from 'react';
import { BasicTable } from './components/BasicTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { SortingTable } from './components/SortingTable';
import './App.css';
import { RowSelection } from './components/RowSelection';
import { ColumnOrder } from './components/ColumnOrder';
import { ColumnHiding } from './components/ColumnHiding';
import { ColumnFilter } from './components/ColumnFilter';
import { GlobalFilter } from './components/GlobalFilter';



const App = () => {
  return (
    <div>
     <h1 id='h1' > React Table </h1> 
     <PaginationTable />
    </div>
  );
};

export default App;