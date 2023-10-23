import React, { ReactElement } from 'react'

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> &
{
  children?: ReactElement[]
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, ...props }, ref): JSX.Element => {

    return (
      <tr
        {...props}
        className={"table-head"}
        ref={ref}
      >
        {children?.map((child, i) =>
          <td key={i}>{child}</td>
        )}
      </tr>
    )
  }
)

export default TableRow;