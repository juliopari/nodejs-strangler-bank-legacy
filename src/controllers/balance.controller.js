
const BalanceService = require('../services/balance.service');
const serviceBalance = new BalanceService()

class BalanceController  {

    getBalance() {
        return serviceBalance.getBalance();
    }

}

module.exports = BalanceController;
