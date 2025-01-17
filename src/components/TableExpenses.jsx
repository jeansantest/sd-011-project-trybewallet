import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRowExpenses from './TableRowExpenses';

class TableExpenses extends Component {
  render() {
    const { stateExpenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {
            stateExpenses.length >= 1 ? stateExpenses
              .map((e, i) => <TableRowExpenses key={ i } expenses={ e } />) : null
          }
        </tbody>
      </table>
    );
  }
}

TableExpenses.propTypes = {
  stateExpenses: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

const mapStateToProps = (state) => ({
  stateExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
