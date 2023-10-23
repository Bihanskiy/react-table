import React from 'react';

import './tablePage.css';

import { clsx } from 'clsx';

import { Table } from '../../components/Table';
import { referralsData } from '../../mock/referralsData.mock';

import TableCell from './components/TableCell';

const TablePage = () => {
  return (
    <div className="App">
      <div className="container">
        <Table
          title="Referrals - 345"
        >
          <Table.Head>
            <span>Referral event</span>
            <span>Advocate</span>
            <span>Frend</span>
            <span>Referral status</span>
          </Table.Head>
          <Table.Body>
            {referralsData?.map((referral, index) => {
              return (
                <Table.Row key={index}>
                  {referral?.map((referralItem, index) => {
                    const subtitleColor = clsx({
                      // eslint-disable-next-line no-mixed-operators
                      "gray": referralItem.subtitle.type === "date" || referralItem.subtitle.type === "status" && referralItem.title === "Pending" || referralItem.subtitle.type === "status" && referralItem.title === "Approved",
                      // eslint-disable-next-line no-mixed-operators
                      "red": referralItem.subtitle.type === "status" && referralItem.title === "Flagged" || referralItem.subtitle.type === "status" && referralItem.title === "Blocked" || referralItem.subtitle.type === "status" && referralItem.title === "Voided"
                    })

                    return (
                      <React.Fragment key={index}>
                        <TableCell
                          title={referralItem.title}
                          subtitle={referralItem.subtitle.text}
                          subtitleColor={subtitleColor as "gray" | "red"}
                          details={referralItem.details}
                        />
                      </React.Fragment>
                    )
                  })}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default TablePage;
