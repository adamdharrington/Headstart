__privatenamespace = (function(){
    //private
    var privates = {
        sayHello : function(){
            console.log("hello");
            return true
        }
    }
    //public
    return {
        sayHello : function (){
            return privates.sayHello();
        }
    }
})();