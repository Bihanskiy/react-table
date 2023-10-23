import React from 'react';

import { clsx } from 'clsx';

type tableCellProps = {
  title?: string;
  subtitle?: string;
  subtitleColor?: "gray" | "black" | "red";
  details?: string;
}

const TableCell = ({
  title,
  subtitle,
  subtitleColor = "black",
  details
}: tableCellProps): JSX.Element => {

  const subtitleClasses = clsx({
    "table-cell_subtitle": true,
    "subtitle-gray": subtitleColor === "gray",
    "subtitle-black": subtitleColor === "black",
    "subtitle-red": subtitleColor === "red",
  })

  return (
    <div className='table-cell'>
      {title &&
        <p className='table-cell_title'>
          {title}
        </p>
      }
      {subtitle &&
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      }
      {details &&
        <p className='table-cell_details'>
          {details}
        </p>
      }
    </div>
  )
}

export default TableCell;