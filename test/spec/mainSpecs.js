/**
 * Created by Adam-antium on 12/03/14.
 */

describe('__adamsnamespace', function(){
    it('privates should be private', function(){
        expect(__privatenamespace.privates).toBeUndefined();
    });
    it('publics should access privates',function(){
        expect(__privatenamespace.sayHello()).toBe(true);
    });
})