import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web Development</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Sales</td>
              <td>13/06/2023</td>
            </tr>
            <tr>
              <td width="50%">Laptop</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Sales</td>
              <td>13/06/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div >
  );
}
