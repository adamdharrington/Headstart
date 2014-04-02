
/*P"""""""MM""""""'YMM""MMMMM""MM""""""'YM\              |/
M' .mmmm  MM  mmmm. `M  MMMMM  MM  mmmm. `M
M         `M  MMMMM  M         `M  MMMMM  .b8888b.d8888b N .d8888b88d888b.
M  MMMMM  MM  MMMMM  M  MMMMM  MM  MMMMM  88oooodY8ooooo N 88'  `888'  `88
M  MMMMM  MM  MMMM' .M  MMMMM  MM  MMMM' .88.          8 N 88.  .888    88
M  MMMMM  MM       .MM  MMMMM  MM       .M`88888P`88888P N `8888P8dP    dP
\MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/                     .88
                                                            d888*/
var __nameSpace = (function(){
    var localVars = {
            hi:"hi"
        },
        methods = {
            sayHi :function(){
                return localVars.hi;
            }
        }
    return {
        publicMethod : function(){
            return localVars.hi;
        },
        publicVar : methods.sayHi()
    }
})();