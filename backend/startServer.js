const expressLibrary = require('express')
const pathLibrary = require('path');
const stringifyLibrary = require('stringify-object')
// const importedUtil = require('util')
const expressApp = expressLibrary()
const importedConfigFile = require('../aConfigFiles/config');
const portStr = importedConfigFile.portStr;

pathToThisJavascriptFileDirectory = __dirname
pathToFrontEnd = pathLibrary.join(pathToThisJavascriptFileDirectory, '../frontend')

expressApp.get('/canary', function(reqObj, resObj) {
    
    lengthOfStringToPrint = 10000;

    reqObjStr = 'Printed reqObj: ' + stringifyLibrary(reqObj, {indent: ' ', singleQuotes: false}).substr(0, lengthOfStringToPrint)
    resObjStr = 'Printed resObj: ' + stringifyLibrary(resObj, {indent: ' ', singleQuotes: false}).substr(0, lengthOfStringToPrint)
    
    printingOn = false;

    if (printingOn) {    
        console.log(reqObjStr + resObjStr)
    }

    resObj.send('The server is running...')

})

expressApp.get('/cat', function(reqObj, resObj) {

    resObj.json({
        'cat eyes': 'yellow',
        'collar': 'red'
    });
        
})



expressApp.use('/', expressLibrary.static(pathToFrontEnd))

expressApp.listen(portStr, () => console.log(`Example app listening at http://localhost:${portStr}`))
