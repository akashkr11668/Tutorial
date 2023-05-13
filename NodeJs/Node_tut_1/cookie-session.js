const cookieSession = require('cookie-session')
const express = require('express')
const app = express()
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],

}))
app.use(function(req, res, next){
    req.sessionOptions.maxAge = 15000
    next()
})

app.get('/' , function(req, res, next){
    if(req.session.views){
        req.session.views++
        res.send('No. of Visits ' + req.session.views)
    }
    else{
        req.session.views = 1;
        res.send("no. of visits "+ req.session.views)

    }})
    app.listen(2000)