const BalanceRepository = require("../repositories/balance.repository");

const balance = new BalanceRepository();

class BalanceService  {

    getBalance() {
      return balance.list();
    }

}

module.exports = BalanceService;
