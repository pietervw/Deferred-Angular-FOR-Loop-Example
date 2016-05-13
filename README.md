# Deferred-Angular-FOR-Loop-Example
An example of doing a deferred FOR loop in AngularJS, which is handy if you have to finish function execution inside the for loop sequentially, before going to the next iteration of a loop.

# Why not just use FOR?
When using a FOR, the loop continues to execute without waiting for whatever deferred functions need to execute inside the loop. 

# Why not just use Angular.forEach?
Same problem as above. 

# Why not just use Angular's all() defer?
If you simply want to know when all of your promises are resolved, then that's fine. The $q.all() executes all promises simoultaneously and resolves once they have all finished.

# Why this Deferred FOR Loop?
If you want to execute promises SEQUENTIALLY, this example is exactly what you need






