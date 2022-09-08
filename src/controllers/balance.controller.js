
const BalanceService = require('../services/balance.service');
const serviceBalance = new BalanceService()

class BalanceController  {

  getBalance1() {
    return serviceBalance.getBalance1();
  }

  getBalance2() {
    return serviceBalance.getBalance2();
  }

  getBalance3() {
    return serviceBalance.getBalance3();
  }

}

module.exports = BalanceController;
