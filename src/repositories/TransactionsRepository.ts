import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionProps {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    const { transactions } = this;

    return transactions;
  }

  public getBalance(): Balance {
    // TODO
    const income: number[] = [];
    const outcome: number[] = [];
    const initialValue = 0;

    this.transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        income.push(transaction.value);
      } else if (transaction.type === 'outcome') {
        outcome.push(transaction.value);
      }
    });

    const reducer = (accumulator: number, currentValue: number): number =>
      accumulator + currentValue;

    const incomeTotal = income.reduce(reducer, initialValue);
    const outcomeTotal = outcome.reduce(reducer, initialValue);
    const creditTotal = incomeTotal - outcomeTotal;

    const balance = {
      income: incomeTotal,
      outcome: outcomeTotal,
      total: creditTotal,
    };

    return balance;
  }

  public create({ title, value, type }: TransactionProps): Transaction {
    // TODO
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
