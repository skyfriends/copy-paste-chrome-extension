popup.js:2 All resources finished loading
popup.js:94 Object
popup.js:95 Objectpassed: {par: Array(4), url: "https://www.etsy.com/cart/1516935690/review"}__proto__: Object
popup.js:97 ***** Array(4)0: "Dustin Byers"1: "3600 SW Genesee St"2: "#5"3: "SEATTLE, WA 98126-2641"length: 4__proto__: Array(0)
popup.js:98 Array(2)
popup.js:99 copiedData after split Array(4)0: "Dustin Byers"1: "3600 SW Genesee St"2: "#5"3: "SEATTLE, WA 98126-2641"length: 4__proto__: Array(0)
popup.js:108 https://www.gooten.com/admin#/simpleOrderForm
popup.js:247 goot 2 https://www.gooten.com/admin#/simpleOrderForm
popup.js:248 copiedData (4) ["Dustin Byers", "3600 SW Genesee St", "#5", "SEATTLE, WA 98126-2641"]
temp
VM609:1 Uncaught ReferenceError: temp is not defined
    at <anonymous>:1:1
(anonymous) @ VM609:1
temp1
(4) ["Dustin Byers", "3600 SW Genesee St", "#5", "SEATTLE, WA 98126-2641"]
temp1
(4) ["Dustin Byers", "3600 SW Genesee St", "#5", "SEATTLE, WA 98126-2641"]
temp1[3]
"SEATTLE, WA 98126-2641"
temp1[3].match(/[0-9]/)
["9", index: 12, input: "SEATTLE, WA 98126-2641"]0: "9"index: 12input: "SEATTLE, WA 98126-2641"length: 1__proto__: Array(0)
temp1[3].match(/[0-9]/i)
["9", index: 12, input: "SEATTLE, WA 98126-2641"]
temp1[3].match(/[0-9]/gi)
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
Array.from(temp1[3].match(/[0-9]/gi))
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
temp = Array.from(temp1[3].match(/[0-9]/gi))
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
temp
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
temp.push('-')
10
temp
(10) ["9", "8", "1", "2", "6", "2", "6", "4", "1", "-"]
temp
(10) ["9", "8", "1", "2", "6", "2", "6", "4", "1", "-"]
temp1[3]
"SEATTLE, WA 98126-2641"
Array.from(temp1[3].match(/[0-9]/i))
["9"]
tempp = Array.from(temp1[3].match(/[0-9]/gi))
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
tempp = tempp.push(Array.from(temp1[3].match(/[0-9]/gi)))
10
tempp
10
temp1[3]
"SEATTLE, WA 98126-2641"
let arr
undefined
arr
undefined
tempp = tempp.push(temp1[3].match(/[0-9]/gi))
VM1049:1 Uncaught TypeError: tempp.push is not a function
    at <anonymous>:1:15
(anonymous) @ VM1049:1
tempp = arr.push(temp1[3].match(/[0-9]/gi))
VM1054:1 Uncaught TypeError: Cannot read property 'push' of undefined
    at <anonymous>:1:13
(anonymous) @ VM1054:1
let arr = []
VM1064:1 Uncaught SyntaxError: Identifier 'arr' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM1064:1
arr
undefined
arr.push(temp1[3].match(/[0-9]/gi))
VM1077:1 Uncaught TypeError: Cannot read property 'push' of undefined
    at <anonymous>:1:5
(anonymous) @ VM1077:1
arr
undefined
arr = []
[]
arr
[]
arr.push(temp1[3].match(/[0-9]/gi))
1
arr
[Array(9)]0: (9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]length: 1__proto__: Array(0)
arr = []
[]
arr.push(temp1[3].match(/[0-9]/gi).join())
1
arr
["9,8,1,2,6,2,6,4,1"]
arr.join()
"9,8,1,2,6,2,6,4,1"
arr.join('')
"9,8,1,2,6,2,6,4,1"
arr.join(' ')
"9,8,1,2,6,2,6,4,1"
typeof arr
"object"
let arr 2 = []
VM1211:1 Uncaught SyntaxError: Unexpected number
let arr2 = []
undefined
arr2
[]
temp1[3].match(/[0-9]/gi).join()
"9,8,1,2,6,2,6,4,1"
temp1[3].match(/[0-9]/gi)
(9) ["9", "8", "1", "2", "6", "2", "6", "4", "1"]
temp1[3].match(/[0-9]/gi).join()
"9,8,1,2,6,2,6,4,1"
temp1[3].match(/[0-9]/gi).join().replace(',' '')
VM1252:1 Uncaught SyntaxError: missing ) after argument list
temp1[3].match(/[0-9]/gi).join().replace(',' ''))
VM1254:1 Uncaught SyntaxError: missing ) after argument list
temp1[3].match(/[0-9]/gi).join().replace(',', '')
"98,1,2,6,2,6,4,1"
temp1[3].match(/[0-9]/gi).join().replace('/[,]/gi', '')
"9,8,1,2,6,2,6,4,1"
temp1[3].match(/[0-9]/gi).join().replace(/[,]/gi, '')
"981262641"
arr2.push(temp1[3].match(/[0-9]/gi).join().replace(/[,]/gi, ''))
1
arr2
["981262641"]