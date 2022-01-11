import {
    TransactionTable,
    TransactionTableTitles,
    TransactionTableRow,
    TransactionTableColumnTitle,
    TransactionTableData,
    TransactionTableCell,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
  

export default TransactionHistory;