import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 400px;
    border: 1px solid #66A5AD;
    background-color: #ffffff;
`;

export const TransactionTableTitles = styled.thead`
    text-transform: uppercase;
    background-color: #C4DFE6;
`;

export const TransactionTableRow = styled.tr`
    border: 1px solid #66A5AD;
    width: calc(100% / 3);
`;

export const TransactionTableColumnTitle = styled.th`
    text-align: center;
    color: #003B46;
    border: 1px solid #66A5AD;
    padding: 10px 0;
`;

export const TransactionTableData = styled.tbody`
    :nth-child(odd) {
        background-color: #C4DFE6;
    }
`;

export const TransactionTableCell = styled.td`
    text-align: center;
    color: #07575B;
    border: 1px solid #66A5AD;
    padding: 10px 0;
`;