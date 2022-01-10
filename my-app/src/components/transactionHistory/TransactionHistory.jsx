import {
    TransactionTable,
    TransactionTableTitles,
    TransactionTableRow,
    TransactionTableColumnTitle,
    TransactionTableData,
    TransactionTableCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TransactionTableTitles>
                <TransactionTableRow>
                    <TransactionTableColumnTitle>Type</TransactionTableColumnTitle>
                    <TransactionTableColumnTitle>Amount</TransactionTableColumnTitle>
                    <TransactionTableColumnTitle>Currency</TransactionTableColumnTitle>
                </TransactionTableRow>
            </TransactionTableTitles>
            {items.map(({ id, type, amount, currency }) => (<TransactionTableData key={id}>
                <TransactionTableRow>
                    <TransactionTableCell>{type}</TransactionTableCell>
                    <TransactionTableCell>{amount}</TransactionTableCell>
                    <TransactionTableCell>{currency}</TransactionTableCell>
                </TransactionTableRow>
            </TransactionTableData>))}
        </TransactionTable>
    );
};

export default TransactionHistory;