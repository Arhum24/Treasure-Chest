var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/users');
var VerifyToken = require('../controllers/VerifyToken');

router.get('/get-all-expenses', VerifyToken, ctrl.get_all_expenses);
router.get('/get-expenses-month', VerifyToken, ctrl.get_expenses_month);
router.get('/get-expenses-year', VerifyToken, ctrl.get_expenses_year);
router.post('/add-expense', VerifyToken, ctrl.add_expense);
router.delete('/delete-expense', VerifyToken, ctrl.delete_expense);
router.put('/update-expense', VerifyToken, ctrl.update_expense);

module.exports = router;