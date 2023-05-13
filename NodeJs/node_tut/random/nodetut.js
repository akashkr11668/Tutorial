import {  createServer } from 'http';
import fs from 'fs'

const testing = fs.readFileSync('./nothing.txt')
console.log('fs')
const server  = createServer((req,res)=>{
    if(req.url==="/"){
         res.end("<h1>HOME</h1>")
    }
   else if(req.url==="/contact"){
        res.end("<h1>Contact Us</h1>")
    }
    else if(req.url==="/about"){
        res.end("<h1>About</h1>")
   }
   else if(req.url==="/testing"){
    res.end(`<h1>${testing}</h1>` )
}
    else{
        res.end("<h1>Page not Found</h1>")
    } 
})
