import React from 'react'

import './Table.css';

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
{
  title?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      className,
      title,
      ...props
    },
    ref
  ): JSX.Element => {


    return (
      <div className="table-wrapper">
        <h4 className="table-title">
          Refrrrals - 345
        </h4>
        <div className="table-container">
          <table
            {...props}
            className={"table"}
            ref={ref}
          >
            {children}
          </table>
        </div>
      </div>
    )
  }
)

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
})