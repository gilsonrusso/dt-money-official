import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Web Development</td>
              <td>R$ 12.000,00</td>
              <td>Sales</td>
              <td>13/06/2023</td>
            </tr>
            <tr>
              <td width="50%">Laptop</td>
              <td> - R$ 12.000,00</td>
              <td>Sales</td>
              <td>13/06/2023</td>
            </tr>
            <tr>
              <td width="50%">Mouse</td>
              <td>R$ 12.000,00</td>
              <td>Sales</td>
              <td>13/06/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
