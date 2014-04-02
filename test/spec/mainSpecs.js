/**
 * Created by Adam-antium on 12/03/14.
 */

describe('__nameSpace accessability', function(){
    it('privates should be private', function(){
        expect(__nameSpace.methods).toBeUndefined();
    });
    it('publics should be accessible',function(){
        expect(__nameSpace.publicMethod()).toBeDefined();
    });
    it('publics should access privates',function(){
        expect(__nameSpace.publicMethod()).toBe("hi");
    });
})