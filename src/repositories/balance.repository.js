class BalanceRepository {

  constructor(){
    this.balance1 = [];
    this.balance2 = [];
    this.balance3 = [];
  }

  list1(){
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.balance1.push({
        balance: 'modulo 1',
        status: 'bank-legacy',
        id: ''+index+'',
        date: '2022-09-01',
        amount: '1100.00',
        currency: 'USD'
      });
    }

    return this.balance1;

  }

  list2(){
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.balance2.push({
        balance: 'modulo 2',
        status: 'bank-legacy',
        id: ''+index+'',
        date: '2022-09-01',
        amount: '1100.00',
        currency: 'USD'
      });
    }

    return this.balance2;

  }

  list3(){
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.balance3.push({
        balance: 'modulo 3',
        status: 'bank-legacy',
        id: ''+index+'',
        date: '2022-09-01',
        amount: '1100.00',
        currency: 'USD'
      });
    }

    return this.balance3;

  }

}

module.exports = BalanceRepository;
