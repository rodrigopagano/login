const {Router} = require('express')
const sessionController= require('../controller/session.controller')
const router = Router()


router.post('/register', sessionController.loginRegister)
router.post('/login', sessionController.sessionLogin)
module.exports = router;