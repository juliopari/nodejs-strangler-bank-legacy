const BalanceRepository = require("../repositories/balance.repository");

const balance = new BalanceRepository();

class BalanceService  {

    getBalance1() {
      return balance.list1();
    }

    getBalance2() {
      return balance.list2();
    }

    getBalance3() {
      return balance.list3();
    }

}

module.exports = BalanceService;
