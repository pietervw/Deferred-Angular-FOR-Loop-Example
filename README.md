# Deferred-Angular-FOR-Loop-Example
An example of doing a deferred FOR loop in AngularJS, which is handy if you wish to execute promises sequentially inside your loop, and only move to the next iteration after your promise is resolved.

# Why not just use FOR?
When using a FOR, the loop continues to execute without waiting for whatever deferred functions need to execute inside the loop. 

# Why not just use Angular.forEach?
Same problem as above. 

# Why not just use Angular's all() defer?
If you simply want to know when all of your promises are resolved, then that's fine. The $q.all() executes all promises simultaneously  and resolves once they have all finished.

# Why this Deferred FOR Loop?
If you want to execute promises SEQUENTIALLY, this example is exactly what you need






