'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
* identity: Return whatever value is input 
*
* @param {Anything} The value that's being given at call time
* @return {Anything} Returns the same value that is called
*/
 
function identity(anything){
    return anything;
    
}
module.exports.identiy = identity; 

/**
 * typeOf: Return what type of data whatever is input
 * 
 * @param {Anything}  The value we will return
 * @return {Anything} The data type as a string (string, array,
 * object, undefined, number, boolean, null, or function)
 */
 
function typeOf (anything) {
    if (Array.isArray(anything)) {
        return "array";
    } else if (anything === null) {
        return "null";
    } else if (anything instanceof Date) {
        return "date";
    } else {
        return typeof anything;
    }
    
    
}
module.exports.typeOf = typeOf;

/**
 * first: Return the first item in a data collection.
 * 
 * for
 * @param {Array} The data collection we will iterate
 * @param {number} The number represents up to what number you will extract values out of the array
 * @return {Array} Returns the copied first values from the array
 * 
 */
 
function first (array, number) {
    var newArray = [];
    for (var i = 0; i < array.length; i++);
    if (Array.isArray(array) === false) {
        return newArray;
    }else if (!number) {
        return array[0];    
    }else if (Array.isArray) {
        for (var i = 0; i < array.length; i++)
        if (i < number) {
            newArray.push(array[i]);
        }
      
    }
    return newArray;


}

module.exports.first = first;

/**
 * last: Return the last item in a data collection.
 * 
 * @param{Array} The data collection we will will iterate over
 * @param{Number}The number represents up to what number of of values taken from the array
 * @Return{Anything} Returns the copied values from the array.
 * 
 */
 
function last (array, number) {
         var newArray = [];
    
    for (var i = array.length-1; i > 0; i--) {
        if (Array.isArray(array) === false) {
            return newArray;
        }else if (!number || NaN) {
            return array[array.length-1];
        }else if ( number > array.length) {
            return array; 
        }else if (i <= number) {
            newArray.push(array[i]);
            newArray.reverse();
        } 
    
    }

    return newArray;
}
module.exports.last = last; 
 
/**
 * indexOf: Loops through arrays and object to find the index position of the value in the array
 * @param {array} The collection you will loop through to find the value
 * @param {value} The value that will be tested to see at which ocurrence it appears in array
 * @Return {Anything} The index of the array that is the first occurance of value
 */


function indexOf (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
        
    }
    return -1;
}
module.exports.indexOf = indexOf; 

/**
 * filter: Designed to filter values in a collection based on a test. Takes a collection, Array or Object, and passes each value in the collection through a test Function. The test Function returns true if the value passes the test, false otherwise. Values that pass the test are collected and returned in an output Array.
 * @param {Array or Object} The collection you will loop through to filter out values
 * @param {function}test: The Function to be applied to each value in the collection. The test Function must return a Boolean based on some logic which tests the value given to it
 * @Return {Array} A new array containing the filtered collection values. The array will only contain the values that passed the test.
 */
 
 // Great ^

function filter (collection, test) {
    const filtered = [];
     each(collection, function(value, position, collection) {
        if (test(value,position, collection)) filtered.push(value); 
     }); 
    return filtered;
}
module.exports.filter = filter; 

/**
 * reject: Creates a new array with filtered values that returned false when ran through the function
 * @param {array} The collection you will loop through to filter out values that are false
 * @param {function} The test that will be performed on the array to filter out the elements
 * @Return {Anything} A new array of elements for which calling the test <function> returned false (logical inverse of _.filter())
 */
 
function reject (collection, test) {
    return filter(collection, function(value, position, collection) {
        if (test(value, position, collection) ===false) {
            return value;
        }
      
    });
}
module.exports.reject = reject; 

/**
 * partition: Run a function call on each element in the array which results in two sub arrays
 * @param {array} The collection you will loop through to filter out values into two seperate arrays
 * @param {function} The test that will be performed on the array that seperates the elements into different arrays of truthy and falsey values
 * @Return {Anything} An array of arrays that have had the original array elements seperated into different arrays of truthy and falsey values
 */

function partition (array, func) {
    var partitioned1 = [];
    var partitioned2 = [];
    var partitioned3 = [];
   each(array, function(value, index, array) {
        if (func(value, index, array) === true) {
            partitioned1.push(value);
        } else if (func(value, index, array)=== false) {
            partitioned2.push(value);
        }
    });

    partitioned3.push(partitioned1);
    partitioned3.push(partitioned2);
    return partitioned3;
    
}


module.exports.partition = partition; 

/**
 * unique: Creates a new array with duplicate values eliminated. 
 * @param {array} The collection you want to remove dupplicates from
 * @Return {Anything} A new array with duplicates removed
 */

function unique (array) {
 var newArray = [];
 each(array,function(value, index, array) {
    if ( indexOf(newArray, value) === -1) {
        newArray.push(value);
         }
     });
      return newArray; 
 }
module.exports.unique = unique; 



/**
 * map: Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param {collection} The collection you will loop through to map out values into a seperate array
 * @param {function} The function that will operate on the array  to seperate values
 * @Return {Anything} A new array
 */

function map (collection, func) {
    var newArray = [];
    each(collection, function(value, index, collection) {
           newArray.push(func(value,index, collection)); 
        }); 
        return newArray;
    
 }
module.exports.map = map; 

/**
 * pluck: Designed to give an new array containing the values of the properties of each element in an array
 * @param {array of objects} An array that will be looped through to seek the values of the properties in each object
 * @param {property} The key of the objects
 * @Return {Anything} A new array with the values of the properties
 */

function pluck (array, property) {

    return map(array,function(value, index, array) {
       return value[property];
    });
}
module.exports.pluck = pluck; 

/**
 * contains: Designed to test if an array contains a value
 * @param {array} The array that will be looped through to seek if it contains values and return a boolean statement
 * @param {value} What is evaluated against the array
 * @Return {Boolean} Will return true if an array contains a value, and false otherwise
 */

function contains (array, value) {
    return indexOf(array,value) === -1;

}
module.exports.contains = contains;

/**
 * every: If the values of a collection return true after running through the fuction, the function will return true. 
 * @param {collection} The array/object that will be targeted by the funciton
 * @param {function} Will act on the collection
 * @Return {Boolean} Returns a boolean statement; if all the values return true, the function will return true;
 * else, will return false
 */
 

function every (collection, func) {
    var check = func || identity;   
    for (var i = 0; i < collection.length; i++) {
        if (! check(collection[i])) {
            return false;
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: Filters out a new collection based upon the truthy/falsey value. If one component is true, they will all turn true. 
 * @param {collection} The array/object that will be targeted by the funciton
 * @param {function} Will act on the collection to elicit a boolean condition
 * @Return {Boolean} Returns a true or false; if any of the values return true, the function will return true;
 * else, will return false
 */


function some (collection, func) {
       return filter(collection, function(element, index, collection) {
        if(!func) {
            return !!element;
        }
        else {
            return func(element, index, collection);
        }
    }).length >0;
    
}

module.exports.some = some;

/**     
 * reduce: Combining the elements of an array down to a single or select few values based on the call of a function on a collection.
 * @param {Array} The array/object that will be targeted by the funciton
 * @param {function} Will act on the array
 * @param {seed} The starting value in iteration (the previous result)
 * @Return {Anything} Anything
 */
function reduce(array, func, seed) {
    var theArray = array;
    var previousResult;
    var i = 0;
    if (seed !== null && seed !== undefined) {
        previousResult = seed;
    } else {
        previousResult = array[0];
        theArray = array.slice(1, array.length);
        i =1;
    }
    each(theArray, function(value, index, collection) {
        previousResult = func(previousResult, value, index + i);
    });
    return previousResult;
}
module.exports.reduce = reduce;
 
/**
 * extend: Modifying the properties on an object by copy/pasting them onto other objects. Limitless object parameters
 * @param {object} The object whose properties will be coppied to another object in the order that they are passed in
 * @Return {object} Updated object
 */

function extend(obj) {
    each(arguments, function(extendObj) {
        for (var key in extendObj)
        obj[key] = extendObj[key];
    });
    return obj;
}
module.exports.extend = extend;


