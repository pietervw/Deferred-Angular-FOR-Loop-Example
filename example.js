var delayedFORLoop = function (array) {
    var defer = $q.defer();

    var loop = function (count) {
        var item = array[count];

        // Example of a promise to wait for
        myService.DoCalculation(item).then(function (response) {

        }).finally(function () {
          // Resolve or continue with loop
            if (count === array.length - 1) {
                defer.resolve();
            } else {
                loop(++count);
            }
        });
    }
    
    loop(0); // Start loop
    return defer.promise;
}

// To use:
delayedFORLoop(array).then(function(response) {
    // Do something
});
