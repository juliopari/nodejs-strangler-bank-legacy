const express =  require('express')
const router = express.Router();

const BalanceController = require('./controllers/balance.controller')
const balanceController = new BalanceController();

router.get('/balance', (req,res)=>{
    const response = balanceController.getBalance();
    res.json(response)
})

module.exports = router;
