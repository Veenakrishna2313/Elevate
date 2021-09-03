
import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({onSort,sortColumn,data,columns}) => {
  return ( 
     <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} ></TableHeader>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
   );
}
 
export default Table;