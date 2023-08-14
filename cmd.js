#!/usr/bin/env node

const commander = require('commander');
const hand = require('./index'); 

commander
  .version('1.0.0')
  .description('A CLI for your library');


commander
  .command('cfile')
  .description('Create a new file')
  .option('-l, --loc <loc>', 'location of your file')
  .option('-c, --des <des>', 'content of your file')
  .action((obj) => {
    
    if(obj.des){
        console.log("this is content");
        console.log(obj.des);
        hand.createfile(obj.loc,obj.des);
    }else{
        hand.createfile(obj.loc,obj.des)

    }
    
  });



commander
  .command('cfolder')
  .description('Create a new folder')
  .option('-l, --loc <loc>', 'location of your file')
  .action((obj) => {
    if(obj){
        hand.createfile(obj.loc)

    }else{
        console.log("please define path of the folder")
    } 
  });



  commander
  .command('expapp')
  .description('Create your express app')
  .option('-l, --loc <loc>', 'location of your file')
  .option('-p, --port <pos>', 'port of your server')
  .action((obj) => {
    
    if(obj.port && obj.loc){
        console.log("this is port");
        console.log(obj.port);
        hand.expressapp(obj.loc,obj.port);
    }else if(obj.loc){
        hand.expressapp(obj.loc)

    }else{
        hand.expressapp()
    }
    
  });























commander.parse(process.argv);
