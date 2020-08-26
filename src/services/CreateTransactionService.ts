import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    // TODO
    const balance = this.transactionsRepository.getBalance();

    if (type === 'outcome') {
      if (balance.total - value < 0) {
        throw Error('Impossible, not enough balance');
      }
    }

    const transiction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transiction;
  }
}

export default CreateTransactionService;
