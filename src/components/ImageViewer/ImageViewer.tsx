import {
  ReactElement, useEffect, useState, useRef, ReactNode, MouseEvent, TouchEvent
} from 'react';
import css from './ImageViewerCSS.module.css';
import { Forward, Add, Remove, Close, Style } from '@mui/icons-material/';
import { Button } from '@mui/material';
import {
  ImageViewerI, operationI, comparisonI, currentZoomI
} from '../../interfaces/interfaces';

// declare global {
//   interface Window { // ⚠️ notice that "Window" is capitalized here
//     warnStatements: any;
//   }
// }

declare global {
  interface Window { warnStatements: any[]; }
}

window.warnStatements = window.warnStatements || {};

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  // Log the error here -- perhaps using an AJAX call
  console.log(errorMsg, url, lineNumber)
}

//interface Errorr extends Error {
type Error = {
  /* prepareStackTrace(thisArg: any, func: any): void */
  prepareStackTrace: () => void
}

function ImageViewer({ images, index, setShowImageViewer, controlsOutside }: ImageViewerI): ReactElement {

  // if (setShowImageViewer === undefined) console.log("setShowImageViewer IS EMPTY !")
  if (setShowImageViewer === undefined) {
    //console.trace({})
    //console.trace = () => null
    //console.trace = () => null
    //console.warn('setShowImageViewer IS EMPTY !')
    //console.error("asdasd")
    //console.error("asdasd")
    //console.warn(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)
    //console.warn()
    //console.warn()
    //console.log.apply(console, args)
    //console.log.apply(console, "asdasd")
    //console.info('⚠️ Warning from\n%s\n%s', stack, '🟨');
    //console.info('⚠️ Warning from\n%s\n%s');

    //console.info('Warning from\n%s\n%s');

    // let foo = () => {
    //   //interWarn("foo warning, %s", "okay?");
    //   //interWarn("foo warning, %s");
    //   //let args = argumentss;
    //     // save arguments;
    //     let err = new Error( "trace");
    //     var stack = err.stack;
    //     if( !stack) try {
    //         throw err;
    //     }
    //     catch( err:any) {
    //         stack = err.stack;
    //     }
    //     if( stack) {
    //         stack = stack.split('\n').slice(1,3).join('\n');
    //         //console.info('⚠️ Warning from\n%s\n%s', stack, '🟨');
    //         console.info('Warning from\n%s\n%s', stack, '🟨');
    //     }
    //     else console.trace();
    //     console.log.apply(console);
    // }
    // foo();

    //console.log('%c Oh my heavens!\nasd ', 'background: red; color: #bada55, width: 100%');
    //console.warn('%c Oh my heavens!\nasd ', 'background: red; color: #bada55, width: 100%');
    //console.log('\x1b[32m', {a:1,b:2,c:3}, '\x1b[0m');

    //window.warnStatements = [];

    // console.warn = function (message) {
    //   //window.warnStatements = [];
    //   //var oldWarn = console.warn;
    //   //oldWarn.apply(console, arguments);
    //   //console.warn.apply(console, arguments);
    //   console.warn.apply(console);
    //   //oldWarn.apply(args);
    //   //oldWarn.apply(...args);
    //   window.warnStatements.push({
    //   type: 'console.warn',
    //   data: "AAAAAAAA",
    //   });  
    //  };

    //  console.warn = function () {

    //  };


    //  console.warn('Hello World');

    //console.log.apply(console, [arguments]);

  //   window.trace = function stackTrace() {
  //     var err = new Error();
  //     return err.stack;
  // }
  
  // window.my_log = function (x) {
  //     // var line = trace();
  //     var lines = line.split("\n");
  //     console.log(x + "%c " + lines[2].substring(lines[2].indexOf("("), lines[2].lastIndexOf(")") + 1), 'background: rgba(255, 255, 0, 0.5); color: #bada55, width: 100%')
  // }

  //   window.trace = function stackTrace() {
  //     var err = new Error();
  //     return err.stack;
  // }

  //var line = trace();
  // var line = "(AAAAAAAAA)\n(AAAAAAAAA)\n(AAAAAAAAA)\n";
  // var lines = line.split("\n");
  // console.log("%c BBBBB" + lines[2].substring(lines[2].indexOf("("), lines[2].lastIndexOf(")") + 1), 'background: rgba(255, 255, 0, 0.2); color: #bada55, width: 100%')
  //console.log("%c aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n \n", 'background: rgba(255, 255, 0, 0.2); color: #bada55, width: 100%')
  //console.log("%c \nAAAAAAAAAAAAAAAAAAA\n", 'background: rgba(255, 255, 0, 0.5); color: #bada55, width: 100%')
  // let style = `
  //   background: rgba(255, 255, 0, 0.5);
  //   color: white;
  //   /* display: flex!important; */
  //   /* position: relative!important; */
  //   /* top: 0px!important; */
  //   /* left: 100px!important; */
  //   /* flex-direction: column; */
  //   /* max-width: 0px; */
  //   /* width: 600px; */
  //   /* display: block; */
  //   /* margin-top: 0%; */
  //   /* margin-right: 50%; */
  //   /* margin-bottom: 0%; */
  //   /* margin-left: 0%; */
  //   /* height: 500px; */
  //   /* background-color: red; */
  //   /* width: 100vw; */
  //   /* padding-top: 0%; */
  //   /* padding-right: 5%; */
  //   padding-right: 55%;
  //   width: 200%;
  //   min-width: 200%;
  //   max-width: 200%;
  //   /* padding-bottom: 0%; */
  //   /* padding-left: 0% */
  // `

  /* padding-bottom: 100%; */
  // let style = `
  //   background: linear-gradient(#D33106, #571402);
  //   border: 1px solid #3E0E02;
  //   color: white;
  //   display: block;
  //   text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  //   box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset;
  //   line-height: 40px;
  //   text-align: center;
  //   font-weight: bold;
    
  // `
  //console.log("\n%c \nAAAAAAAAAAAAAAAAAAA\n", style)
  //console.log('\x1b[45m%s\x1b[0m', 'I am cyan'); 
  //console.log('\x1b[36msometext\x1b[0m');


  //   const betterLogColors = {
  //     bright: '\x1b[1m',
  //     dim: '\x1b[2m',
  //     underscore: '\x1b[4m',
  //     blink: '\x1b[5m',
  //     reverse: '\x1b[7m',
  //     hidden: '\x1b[8m',

  //     black: '\x1b[30m',
  //     red: '\x1b[31m',
  //     green: '\x1b[32m',
  //     yellow: '\x1b[33m',
  //     blue: '\x1b[34m',
  //     magenta: '\x1b[35m',
  //     cyan: '\x1b[36m',
  //     white: '\x1b[37m',
  //     gray: '\x1b[90m',

  //     bgBlack: '\x1b[40m',
  //     bgRed: '\x1b[41m',
  //     bgGreen: '\x1b[42m',
  //     bgYellow: '\x1b[43m',
  //     bgBlue: '\x1b[44m',
  //     bgMagenta: '\x1b[45m',
  //     bgCyan: '\x1b[46m',
  //     bgWhite: '\x1b[47m',
  //     bgGray: '\x1b[100m',
  // }

  // type ArgSet = [...[keyof typeof betterLogColors, ...any]];

  // let ColorLog = (...argSets: [string[]] | ArgSet[]) => {
  //     if (!Array.isArray(argSets[0])) return console.log(betterLogColors.bgGreen + '>>' + betterLogColors.bgBlack + argSets[0] + '\x1b[0m')

  //     console.log(...argSets.map(([color, ...oput]) => betterLogColors[color as keyof typeof betterLogColors] +
  //         oput.map(t => {
  //             if (!t || ['bigint', 'boolean', 'number', 'string'].includes(typeof t)) {
  //                 return t;
  //             } else {
  //                 return JSON.stringify(t, undefined, 1)
  //             }
  //         })
  //         + '\x1b[0m'))
  // }

  //ColorLog(['red', 'this is'], ['green', 'a test'], ['bgRed', ['with', 'an', 'array']])
  //ColorLog(['bgRed', ['with', 'an', 'array']])

  //console.log("%c ", "font-size: 1px; padding: 240px 123.5px; background-size: 247px 480px; background: no-repeat url(https://cdn.pixabay.com/photo/2017/01/31/22/47/tree-2027899_1280.png);");

  //console.log("%c ", "font-size: 1px; padding: 166.5px 250px; background: no-repeat url(https://www.shutterstock.com/image-illustration/treejpg-eps-vector-version-id-260nw-122687560.jpg);");

  //console.log('%c a colorful message\n ', 'display: flex; background: green; color: white; display: block; text-align: center;');

  //console.log('%cProperties supported include padding and background-color; even gradients like this 🦄', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; color: white; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);');

  

  //Error.stackTraceLimit = 2;
   //Error.captureStackTrace = ""
  //Error.prepareStackTrace = () => {return "A"}
  //Error.captureStackTrace = () => {}
  //Error.prepareStackTrace = () => {}
  //console.dir(Error)

  //console.warn('%c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB') // DONT DISPLAY STACK !!!
  //let sss = console.warn('%c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB') // DONT DISPLAY STACK !!!
 
    //console.warn('%c')
    //console.warn('%c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB') // DONT DISPLAY STACK !!!
    //let qqqq = '%c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB'
    //let qqqq = '                                                                      %c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB'

    

    
    

    // // First time:
    // let backupconsolelog = console.warn.bind(console);
    // console.warn = function() {
    //     backupconsolelog.apply(this, [arguments]);
    //     /* Do other stuff */
    // }
    // // console.log is now redirected correctly
    
    // // Second time:
    // backupconsolelog = console.warn;
    // // Congratulations, you now have infinite recursion
    // //.then((res) => ccc(res))

    //console.warn(console.warn(qqqq), "asd")
    //console.warn(qqqq.slice(2))
    //let qqqq1 = '%c'
    //let qqqq2 = '%cAAAAAAAAAAAAAAAAAAA\nBBBBBBBBBBBBBBBBBBBBBBBB'
    //console.warn(qqqq)
    //console.log(JSON.stringify(result))
    //console.warn(qqqq1 + qqqq2)
    //console.warn(JSON.stringify(qqqq1 + qqqq2))
    //console.warn(qqqq1 + qqqq2)
    //console.warn('%cAAAAAAAAAAAAAAAAAAA\nBBBBBBBBBBBBBBBBBBBBBBBB', 'display: flex')
    //console.warn('%cAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB', 'display: flex')
    //let kk = new Error()
    //kk.type = "warning"
    //kk.type = "warn"
    //kk.message = "ASDASDAD"
    //console.warn(`%cAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`,)
    //console.warn(`%c${kk}`)
    //console.warn(`%c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`)
    //console.warn(`                                                            %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`)
    //console.warn(`                                                            %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`)
    //console.warn(`                        %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`) // APARECE A VECES
    //console.warn(`                           %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`) // APARECE A VECES
    //console.warn(`                                                                           %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`) // APARECE A VECES


    //let qq1 = () => { return console.warn(`                        %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`) } // APARECE A VECES
    //let qq1 = () => { return console.warn(`                %c\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB`.concat(' ')) } // APARECE A VECES
    //let qq1 = () => { return console.warn('\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB%c') } // APARECE A VECES
    //let qq1 = () => { return console.warn('\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB           %c') } // APARECE A VECES
    //let qq1 = () => { return console.warn('\nAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB                                           %c') } // APARECE A VECES
    //console.warn('%c\x1B[41;93;4mHello\x1B[m')
    //console.warn('%c%cAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB')
    //console.warn('%c' + 'AAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB')
    //console.warn()
    //console.warn('%cAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBB')
    //console.log(console)
    //console.log("AAAAAAAAAAAAAAAA")
    //console.clear()
    //console.info("%cAAAAAAAAAAAAAAAA", "background: red;")

    let style = `
      line-height: 18px;
      /* rgb() */
      /* background: rgb(65, 60, 38); */ /* EXACT CHROME BG DARK */
      background: light-dark(rgb(254 246 213), rgb(253 243 170));
      /* color: rgb(253, 243, 170); */ /* EXACT CHROME TEST DARK */
      color: light-dark(rgb(62, 47, 0), rgb(253, 243, 170)); /* EXACT CHROME TEST DARK */
      border-radius: 4px;
      margin-left: -24px;
      padding-left: 24px;
      padding-right: calc(100% + 22px);
      text-wrap: nowrap;
      background-repeat: no-repeat;
      background-position-x: 5px;
      background-position-y: 1px;
      background-size: 16px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAYAAADjsjsAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAANkSURBVHhe7ZpPaxNBGIenBnuoNT00ReshUAhqD9qCF0E9eKp3j6L9EOJdvYofQsHvYLwK3gT/HKogQnOwolGolhwsonnjzMGJk3Z2fu/Mu/V9IHQ3LW33ycw+O9lMXb548pdRIByyXxUAKhOIygSiMoGoTCAqE4jKBKIygahMICoTSG1krrZmzZV2y+7JpDYyb51bMteXF83xmWn7jDxqIXP99B+J9Fhrz9tn5SFeJgm8sXzC7pnRttTRKV4mTW8fmu4SES2TokMPHwqRxBiJlvmvUemQGCOxMl10QkiMkUiZfnRCSIuRSJmTprePpBiJkxmKTghJMRInM2ZUOqTESJTMvaITQkqMxMjcb3RCSIiRGJlVprdP6RiJkBkbnRClYyRCJmJUOkrGqPhnjSg6oXPli/6OefX5m937m7MLzeBofrjxwTx4s2X38lFUJo2gR2tn7N44k6RMehGIa93X5uPgh93LQ9FpjpzePiViVEwmKjohSsSomEzOUenIHaMiMquudGKhv5FzZZRdJh1gykonlpwro+wyc0xvn1wxyiqTOzohcsUoq8wSo9KRI0bZZOaKTogcMcoiM3d0QnDHKIvMktPbhzNG7DJLRScEZ4zYZUoalQ6uGLHKLB2dEFwxYpMpJTohOGLEJlPi9PZBx4jlzWEKzv1Lp+yebO493zSPe327lwbLyKzDqHQgYwSXKTU6IZAxgsrkig7dC6J7Ojefvh1NSfS9HVSMGkvt+dt2O5k75zvwUUkCu72vZmf350jis61t8357YFYWmmb2cMP+VDpHphuj350CbGRyrHRoRNLtXh967skmJhoOxMoIJpMjOi/73+3WOJO+V5XUGEFklogOxz1xOoaUGCXLpH+Aa6Wz0jpqt8bhem8yJUbJMjmvKUMHxvkCElVXRkk1p+CsMx4UcbVzzEwNv9JjtdU0FxbnzN3hVQMnnbkZ82mwa94NrxpiSFpO0ueEqk4J6dA5mS7LYs7Nlad53VY6sdCxxZ6XK8nkPmdJITZGlWTW6Y2MVGJiFC2TY6UjmZiVUbTM/2lUOva7MoqqOY3ISRfSB5lu78ueZS/+mfaDROVLI2UclQlEZQJRmUBUJhCVCURlAlGZQFQmEJUJRGUCUZlAVCYQlQlEZQJRmUBUJhCVCcOY3xKYvIc3R4ZkAAAAAElFTkSuQmCC)
    `

    //console.log("%cAAAAAAAAAAAAAAAA                                                                                                                  ", style)
    //console.log("%c⚠️AAAAAAAAAAAAAAAA                                                                                                                           ", style)
    console.log("%c  AAAAAAAAAAAAAAAA                                                                                                                           ", style)
    //console.log("%cAAAAAAAAAAAAAAAA                                                                                                                  ", style)
    console.warn("%cAAAAAAAAAAAAAAAA")
   

    //console.log('My Console!!!')
    //console.log('\x1B[41;93;4mHello\x1B[m');
    //qq1()
    //qq1()
    //console.log(qq1())
    //console.log(qq1)
    //console.warn(kk)
    //console.log(console)
  //   let ttt = () => {
  //     var oldLog = console.log;
  //     console.log = function (message) {
  //         // DO MESSAGE HERE.
  //         console.log("BBBBB", message)
  //         oldLog.apply(console, [arguments]);
  //     };
  // }
  //ttt()
  //console.log("AAAAAAAA")
  //   try {
  //     //alert(foo);
      
  //     //console.log(console.log(qqqq))
  //     throw new Error()
  //     //console.log("ERROR")
      
  // } catch(e) {
  //    //console.log("ERROR", e)
  //    console.warn(qqqq)
  //     //alert('The code got the following error: '+e.message);
  // }

    
    
    //console.warn(qqqq)
    // setTimeout(() => {
    //   console.warn() // DONT DISPLAY STACK !!!
    // },0)
    
  
  // .then(() => {
  //   console.warn()
  // })
  // console.warn()
  //   console.warn('%c\nBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBBB') // DONT DISPLAY STACK !!!

  // const console = { log: () => void 0 };
  // console.log();

  //console.warn(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)

  //console.log(process.env.LIGHT_MODE_DIMMED_WARNING_COLOR)

  
  //console.log('%cAAAAAAAAAAAAAAAAAAAA', style);
  //console.log('%c                      ', style);
  //console.log('%caaaaaaaaaaaaaaaaaaaa', style);
  /* console.log('%ciiiiiiiiiiiiiiiiiiii', style); */
  //console.log("%cold text\u001b[2K\u001b[0Enew text")
  //process.stdout.columns
  //console.log(NodeJS.Process)
  //console.log('%cAAAAAAAAAAAAAAAAAAAAAAAAAAA\x1bBBBBBBBBBBBBBBBBB', style);
  //console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA\xa0\nBBBBBBBBBBBBBBBBB');
  //console.warn("AAAAAAAAAAAAAAAAAAA")
  // console.trace = function(){}
  // //console.warn = function(){}
  // console.warn("AAAAAAAAAAAAAAAAAA")

  const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    fg: {
     Black: "\x1b[30m",
     Red: "\x1b[31m",
     Green: "\x1b[32m",
     Yellow: "\x1b[33m",
     Blue: "\x1b[34m",
     Magenta: "\x1b[35m",
     Cyan: "\x1b[36m",
     White: "\x1b[37m",
     Crimson: "\x1b[38m"
    },
    bg: {
     Black: "\x1b[40m",
     Red: "\x1b[41m",
     Green: "\x1b[42m",
     Yellow: "\x1b[43m",
     Blue: "\x1b[44m",
     Magenta: "\x1b[45m",
     Cyan: "\x1b[46m",
     White: "\x1b[47m",
     Crimson: "\x1b[48m"
    }
   };
   
   //console.log(`\x1b[44m, \x1b[37m, "%c Created by %c www.google.com",                                                                                                                                              \x1b[0m`);

  // console.trace = function(){}

  //const error = new Error("Your message");
  //const error = new Warning("Your message")
    //error.stack = ""
    //console.warn.
    //throw error

    //let error = new Error("Your message");
    //error.stack = ""
    //console.warn("AAAAAAAAAAAAAAAAAA")
    //console.warn("AAAAAAAAAAAAAAAAAA")
    //console.warn = function overrideMethod() {}
    //console.warn = 
    //console.dir(console.warn)
    //console.log((console.error).toString())
    //console.log(new Error().stack = "AAA");
    //Error.captureStackTrace = () => {}
    //Error.captureStackTrace = ""
    //Error.prepareStackTrace = () => {return "A"}
    // Property 'getFunction' does not exist on type '(err: Error, stackTraces: CallSite[]) => any'.
    //Error.prepareStackTrace.getFunction()
    //Error.prepareStackTrace = (err: Error, stackTraces: []) => {}

    //Error.stackTraceLimit = 0;
    
    // qq.stack = "AAA\nBBB\nCCC"

    // if (Error.prepareStackTrace !== undefined) Error.prepareStackTrace(qq, [])
    
    //   console.trace = () => {}
      //console.warn(qq)
      
      //Error.captureStackTrace(qq, []);
      // Error.captureStackTrace = (err, stack) => {
      //   return null
      // }

      // Error.prepareStackTrace = (err, stack) => {
      //   return null
      // }

      //Error.prepareStackTrace = (err, stack) => { return err}
      //let x = { stack: "" }
      Error.stackTraceLimit = 0;
      let qq: any = (new Error("AAAAAAAAAAAAAAAAAAAAA\x1bBBBBBBBBBBBBBBBBBBBBBBB") as any).prepareStackTrace = (x:any) => { return "AAAAAAAAAAAAAAAAAAAA" }


      // qq.captureStackTrace = (x:any) => { return null }
      //qq.prepareStackTrace = (x:any) => { return "AAAAAAAAAAAAAAAAAAAA" }

      //console.log(qq)
      //console.warn(qq)
      // console.warn(new Error("...").stack)

      //console.table([{" ":"AAAAAAAAAAAAAAA"}])
      //console.log(console)
      //console.warn(JSON.stringify("AAAAAAAAAAAAAAA"))

      // "Yellow" )      colorString='\033[1;93m';;
      // "Magenta" )     colorString="${colorString}\033[105m";;

      // Reset colors to defaults
      // \x1b === \033
      //local resetColor="\033[0m"
      //local resetColor="\x1b[0m"

      //OK console.log("\x1b[1;93m\x1b[105m")
      //printf "${colorString}%s${resetColor}" "${str}"
      //console.warn("\x1b[1;93m\x1b[105m%s\x1b[0m", "AAAAAAAAAAAA")
      

      // 21 void clearLine(void) {
      // 22 	printf("\x1b[%dK", CLEAR_ALL);
      // 23 }
        

      //console.log("\x1b[31m\x1b[44mHello, World")
      //console.log("\x1b[32;1mSome bright green text")

      
      //console.warn("AAAAAAAAAAAAAAAAAAAAA\nBBBBBBBBBBBBBBBBBBBBBBB")
      

    //console.log((Error.prepareStackTrace))
    //Error.captureStackTrace = null
    //Error.prepareStackTrace = null
    //Error.prepareStackTrace = ""
    
    //qq.stackTraceLimit = 1;
    //Error.stackTraceLimit = Infinity;
    //qq = new Error()
    
    //qq = () => { new Error().stack = "AAA" }

    //console.error(qq);
    
    //console.warn(console.log("AAAAAAAAAAAAAAAAAAA"))
    
  //console.error(error.message);
  //console.log(console);

  //console.assert(true, "ASDASDSAD")
  //console.debug("ASDASDSAD")
  //console.info("ASDASDSAD", style)

  //console.log('default \x1B[43m color \n color \x1B[49m default')

  //console.log("%c aaaaaaaaBBBBBBBBBBBBBB", style)
  //console.log("%c aaaaaaaaBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", style)
  // console.log('\x1b[43mHighlighted');
  //console.log('\033[91m\033[107mThis is red text on a white background\033[0m')
  //console.log('\x1b[91m\x1b[107mThis is red text on a white background\x1b[0m')
  //console.log('BBBBBBBBBBBBBBBBBBB\x1b[106m')

  // "Magenta" )     colorString="${colorString}\033[105m";;

  // local colorString=$(Color ${forecolor} ${backcolor})
  // printf "${colorString}%s${resetColor}" "${str}"
  // local colorString='\033['
  // local resetColor='\033[0m'

  //console.log('\033[\033[105m%s\033[0m" "BBBBBBBBBBBBBBBBBBBBB');

  //printf 
  //console.log("\033[105m%s\033[0m", "BBBBBBBBBBBBBBBBBBBBB")
  //console.log("\x1b[105m%s\x1b[0m\n", "BBBBBBBBBBBBBBBBBBBBB")

  //console.log("\x1b[103m%s\x1b[0m\n", "BBBBBBBBBBBBBBBBBBBBB")

  //console.log("\x1b[\x1b[95mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  //console.log('${red}${bold}Hello World!${reset}')

  // let red="\x1b[0;91m"
  // let blue="\x1b[0;94m"
  // let expand_bg="\x1b[K"
  // let blue_bg=`\x1b[0;104m${expand_bg}`
  // let red_bg=`\x1b[0;101m${expand_bg}`
  // let green_bg=`\x1b[0;102m${expand_bg}`
  // let green="\x1b[0;92m"
  // let white="\x1b[0;97m"
  // let bold="\x1b[1m"
  // let uline="\x1b[4m"
  // let reset="\x1b[0m"


  //console.log(`${red}${bold}Hello World!${reset}`)
  //console.log(`${blue_bg}${reset}`)
  //console.log('%c a colorful message', 'background: green; color: white; display: block;');

  //console.log('\x1b[\x1b[105m%s\x1b[0m BBBBBBBBBBBBBBBBBBBBB');

  //colorString="${colorString}\033[106m";;
  // console.log('\x1b[36m sometext \x1b[0m');
  //console.log("%c \nAAAAAAAAAAAAAAAAAAA\n", `<marquee behavior="alternate" 100% scrollamount="2" bgcolor="#dfeded"><b>Aire Acondicionado LG Art Cool 3000 frigorías Inverter frío/calor<div style="display:none">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0095AB">VER COMPLETO</span></div></b></marquee>`)


  

  //console.log('%c a colorful message', 'background: green; color: white; display: block;');
  //console.log("%c What light through yonder window breaks?", 'background: rgba(255, 255, 0, 0.5); color: #bada55, width: 100%')
  
  //window.my_log("What light through yonder window breaks?")
  

     //console.warn.apply(console);
     //console.log(window)

     //console.warn("AAAAAAAAAA")
    //console.error("asd", 'background: red; color: #bada55')
    //console.log("asd", 'background: red; color: #bada55')
    //console.error({message:  "asdad"})
    //console.log(console)
    //console.warn(console.warn)
    //const error = new Error("Your message").stack = ""
    //console.warn({a:"asdasdasd"})
    //console.trace({a:"asdasdasd"})
    //console.trace(null)
    //error.stack = ""
    //console.trace = () => {}
    //console.error(error.stack)
    //throw "Oh no! 'n' is too small!"
    // var err = new Error();
    // //return err.stack;
    // console.warn(err.stack)
    //console.warn("asd")
    // try {
    //     // Code throwing an exception
    //     throw new Error();
    // } catch(e:any) {
    //     console.warn(e.stack);
    // }
    //throw error
    // try {
    //     // Code throwing an exception
    //     throw new Error();
    // } catch(e:any) {
    //     //console.log(e.stack);
    //     console.warn("asdasd");
    // }
    //const error = new Error("asdasd")
    //error.stack = ""
    //throw error
    //console.warn(Error.message)
    //console.groupCollapsed('name to show to identify trace');
    
    //console.trace.message = 'sadasd' 
    //window.console.trace=null;
    //console.log("ASD", console.trace)
  }
  // if (setShowImageViewer === undefined) console.error('setShowImageViewer IS EMPTY !')
  //if (setShowImageViewer === undefined) throw new Error('setShowImageViewer IS EMPTY !');
  //if (setShowImageViewer === undefined) throw new Warning("setShowImageViewer IS EMPTY !");



  let clickOnBG = useRef({ // CLICK ON BACKGROUND MODAL
    start: false, // CLICK BEGINS ON BG MODAL
    end: false    // CLICK ENDS ON BG MODAL
  })

  useEffect(() => { // DISABLES MOUSE (DESKTOP) EVENT WHEN MOUSE DRAG LEAVE CANVAS
    let canvas = document.getElementById('canvasImage')
    if (canvas !== null) canvas.onmouseout = function() { allowMove.current = false }
  }, [])

  window.onmousedown = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.start =  true
    else clickOnBG.current.start =  false
  }

  window.onmouseup = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.end =  true
    else clickOnBG.current.end =  false
    if (setShowImageViewer !== undefined && clickOnBG.current.start && clickOnBG.current.end) setShowImageViewer(false)
  }

  const [ currentIndex, setCurrentIndex ] = useState<number>(index !== undefined ? index : 0)

  // mORd = multiplication OR division
  // aORs = addition OR subtraction
  // lORm = less OR more
  // dF = dimensionFactor
  const [ currentZoom, setCurrentZoom ] = useState<currentZoomI>({ // (cZ)
    val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2
  })

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let image = useRef(new Image())
  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION

  useEffect(() => { // LOAD NEW IMAGE
    if (images !== undefined && currentIndex !== undefined) {
      image.current.src = images[currentIndex]
      image.current.onload = function() {
        if (refCanvas.current !== null) { //
          let ref = refCanvas.current
          let ctx = ref.getContext("2d");
          ref.width = image.current.naturalWidth
          ref.height = image.current.naturalHeight

          // e.g.:               x: -480            y: -260               // (1920 x 1040)
          // WHEN 1.0 TO 1.5, SET POSITION TO CENTER OF IMAGE
          initImgPos.current = { x: ref.width / -4, y: ref.height / -4 }

          imgPo.current = { x: 0, y: 0 }

          if (ctx !== null) {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(
              image.current,
              0, 0,
              ref.width, ref.height
            ); // FIRST IMAGE DRAW
          }
        }
      }
    }
  }, [currentIndex, images])

  useEffect(() => { // ZOOM CHANGED
    const operation: operationI = {
      'x': function(a: number, b: number) { return a * b },
      '/': function(a: number, b: number) { return a / b },
      '+': function(a: number, b: number) { return a + b },
      '-': function(a: number, b: number) { return a - b }
    }

    const comparison: comparisonI = {
      '<=': function(a: number, b: number) { return a <= b },
      '>=': function(a: number, b: number) { return a >= b }
    }

    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        let targetZoom = currentZoom.mORd === 'x' ? currentZoom.val - 0.5 : currentZoom.val
        let divider = targetZoom + (targetZoom - 2) // dvdr //   0,   1,   2,   3,   4..
        let factor =                                // fctr // 1/2, 1/3, 1/4, 1/5, 1/6..
          divider === 0 ? 1 :
          1 + (1 / divider)

        // *** // LESS -> MORE // MORE -> LESS //
        // cZ  // dvdr // fctr // dvdr // fctr //
        // 1.0 // -1   // 0    // 0    // 1    //
        // 1.5 //  0   // 1    // 1    // 2    //
        // 2.0 //  1   // 2    // 2    // 1.5  //
        // 2.5 //  2   // 1.5  // 3    // 1.33 //
        // 3.0 //  3   // 1.33 // 4    // 1.25 //

        let halfDim = { w: ref.width / 2, h: ref.height / 2 }
        let basePos = { x: imgPo.current.x, y: imgPo.current.y }
        let baseDim = { w: halfDim.w * (divider + currentZoom.dF), h: halfDim.h * (divider + currentZoom.dF) };
        //         'x' --> halfDim.w * (divider + 2)
        //         '/' --> halfDim.w * (divider + 3)

        currentZoom.val === 1 ? imgPo.current = { x: 0, y: 0 } : // WHEN 1.0 SET POSITION TO 0, 0
        currentZoom.val === 1.5 && currentZoom.mORd === 'x' ? imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } : // WHEN 1.0 TO 1.5, SET POSITION TO CENTER OF IMAGE
        imgPo.current = { x: operation[currentZoom.mORd](imgPo.current.x, factor), y: operation[currentZoom.mORd](imgPo.current.y, factor) } // ELSE DO TARGET CALC

        let targetPosition = { x: imgPo.current.x, y: imgPo.current.y } // TARGET (UPDATED ↑↑↑) POSITION

        let offset = 10 // ANIMATION FRAMES BETWEEN X.0 --> X.5
        let eachFramePos = { x: (targetPosition.x - basePos.x) / offset, y: (targetPosition.y - basePos.y) / offset } // EACH FRAME POS TO INCREASE/DECREASE
        let eachFrameDim = { w: halfDim.w / offset, h: halfDim.h / offset } // EACH FRAME WIDTH TO INCREASE/DECREASE // (1920 / 2) / offset

        let currPos = { x: basePos.x, y: basePos.y }
        let currentDim = { w: baseDim.w, h: baseDim.h }

        let targetWidth = ref.width * currentZoom.val

        let render = () => {
          if (ctx !== null) {
            ctx.drawImage(
              image.current,
              currPos.x, currPos.y,
              currentDim.w, currentDim.h
            );
            currPos = { x: currPos.x + eachFramePos.x, y: currPos.y + eachFramePos.y }
            currentDim.w = operation[currentZoom.aORs](currentDim.w, eachFrameDim.w)
            currentDim.h = operation[currentZoom.aORs](currentDim.h, eachFrameDim.h)
          }
          if (comparison[currentZoom.lORm](currentDim.w, targetWidth)) requestAnimationFrame(render);
        }
        if (((currentZoom.val !== 1 && currentZoom.mORd === 'x') || currentZoom.mORd === '/')) render()
      }
    }
  }, [currentZoom])

  let mouseDown = (e: TouchEvent | MouseEvent) => {
    if ('touches' in e) { // TOUCH EVENT
      arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      allowMove.current = true
    } else { // MOUSE EVENT
      arbPos.current = { x: e.clientX, y: e.clientY }
      allowMove.current = true
    }
  }

  let mouseUp = (e: TouchEvent | MouseEvent) => {
    allowMove.current = false
  }

  let mouseMove = (e: TouchEvent | MouseEvent) => {
    if (allowMove.current && currentZoom.val !== 1) {
      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        if (ctx !== null) {
          let targetXPosition;
          let targetYPosition;

          if ('touches' in e) { // TOUCH EVENT
            targetXPosition = imgPo.current.x + (e.touches[0].clientX - arbPos.current.x) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
            targetYPosition = imgPo.current.y + (e.touches[0].clientY - arbPos.current.y) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
          } else { // MOUSE EVENT
            targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
            targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
          }

          let factor = ((currentZoom.val * 2) - 2) * 2
          //   cZ                factor
          // ((1.5 * 2) - 2) * 2 = 2
          // ((2.0 * 2) - 2) * 2 = 4
          // ((2.5 * 2) - 2) * 2 = 6
          // ((3.0 * 2) - 2) * 2 = 8

          if (
            (targetXPosition < 0 && targetXPosition > initImgPos.current.x * factor) &&
            (targetYPosition < 0 && targetYPosition > initImgPos.current.y * factor)
          ) {
            ctx.drawImage(
              image.current,
              targetXPosition, targetYPosition,
              ref.width * currentZoom.val, ref.height * currentZoom.val
            );
            imgPo.current = { x: targetXPosition, y: targetYPosition }
          }
        }
      }
      if ('touches' in e) arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      else arbPos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const zoomIn = () => setCurrentZoom((curr: currentZoomI) => ({ val: curr.val + 0.5, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 }))

  const zoomOut = () => setCurrentZoom((curr: currentZoomI) => ({ val: curr.val - 0.5, mORd: '/', aORs: '-', lORm: '>=', dF: 3 }))

  const goLeftHandler = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: number) => curr - 1)
      setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const goRightHandler = () => {
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: number) => curr + 1)
      setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const controls: ReactNode =
    <div
      id={`bottomBar`}
      className={css.bottomBar}
    >
      <div className={css.buttonsContainer}>
        <div className={css.imageCounter}>
          { currentIndex !== undefined && images !== undefined ? currentIndex + 1 : 0 }/{ currentIndex !== undefined && images !== undefined ? images.length : 0 }
        </div>
        <Button
          variant="contained"
          className={css.button}
          onClick={() => goLeftHandler()}
        >
          <Forward className={css.icon}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => goRightHandler()}
        >
          <Forward className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomOut()}
          disabled={ currentZoom.val === 1 ? true : false }
        >
          <Remove className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          disabled={ currentZoom.val === 8 ? true : false }
        >
          <Add className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { if (setShowImageViewer !== undefined) setShowImageViewer(false)} }
        >
          <Close className={`${css.icon} ${css.right}`}/>
        </Button>
        <div className={css.zoomContainer}>
          { currentZoom.val.toFixed(1) }x
        </div>
      </div>
    </div>

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <div
        id={`innerModal`}
        className={css.innerModal}
      >
        <canvas
          id={`canvasImage`}
          ref={refCanvas}
          className={css.canvasImage}
          onTouchStart={(e) => mouseDown(e)} // TOUCH START
          onMouseDown={(e) => mouseDown(e)} // MOUSE START
          onTouchEnd={(e) => mouseUp(e)} // TOUCH END
          onMouseUp={(e) => mouseUp(e)} // MOUSE END
          onTouchMove={(e) => mouseMove(e)} // TOUCH MOVE
          onMouseMove={(e) => mouseMove(e)} // MOUSE MOVE
        />
        { !controlsOutside && controls }
      </div>
      { controlsOutside && controls }
    </div>
  )
}

export default ImageViewer;