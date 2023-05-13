const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
app.get('/' , function(req, res){
    res.cookie('course' , 'html')
    res.send('our Website has set the cookies')
    console.log('cookies: ' , req.cookies)

})

app.get('/clear' , function(req, res){
    res.clearCookie('course' , 'html')
    res.send('cookie cleared')
})
app.listen(4000)