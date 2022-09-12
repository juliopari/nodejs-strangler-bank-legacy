const express =  require('express')
const router = express.Router();

const BalanceController = require('./controllers/balance.controller')
const balanceController = new BalanceController();

router.get('/modulo1', (req,res)=>{
    const response = balanceController.getBalance1();
    res.json(response)
})

router.get('/modulo2', (req,res)=>{
  const response = balanceController.getBalance2();
  res.json(response)
})

router.get('/modulo3', (req,res)=>{
  const response = balanceController.getBalance3();
  res.json(response)
})

module.exports = router;
