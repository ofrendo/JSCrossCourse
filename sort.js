var Sort = (function() {
    function bubbleSort(a) {
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    function selectionSort(a) {
        var min;
        var stack = [{arr: a.slice()}];

        for (i=0; i < a.length; i++){
            var change = false;

            // set minimum to this position
            min = i;

            // check the rest of the array to see if anything is smaller
            for (j=i+1; j < a.length; j++){
                if (items[j] < items[min]){
                    min = j;
                }
            }

            // if the minimum isn't in the position, swap it
            if (i != min){
                var temp = a[i];
                a[i] = a[min];
                a[min] = temp;
                change = true;
            }

            stack.push({c1: i, c2: min, change: change, arr: a.slice()});
        }
        //return items;
        return stack;
    }

    // Merge function used for merge sort
    function merge(left, right){
        var result  = [],
            il      = 0,
            ir      = 0;

        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        return result.concat(left.slice(il)).concat(right.slice(ir));
    }
    function mergeSort(a){
        // Terminal case: 0 or 1 item arrays don't need sorting
        if (a.length < 2) {
            return a;
        }

        var middle = Math.floor(a.length / 2),
            left    = a.slice(0, middle),
            right   = a.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function quickSort(a) {
        if (a.length == 0) return [];
         
            var left = [], right = [], pivot = a[0];
         
            for (var i = 1; i < a.length; i++) {
                a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
            }
         
        return quickSort(left).concat(pivot, quickSort(right));
    }

    function insertionSort(a) {
        var value,                      // the value currently being compared
            i,                          // index into unsorted section
            j;                          // index into sorted section
        var stack = [{arr: a.slice()}];
        var change = false;

        for (i=0; i < a.length; i++) {
        
            // store the current value because it may shift later
            value = a[i];
            
            /*
             * Whenever the value in the sorted section is greater than the value
             * in the unsorted section, shift all items in the sorted section over
             * by one. This creates space in which to insert the value.
             */
            for (j=i-1; j > -1 && a[j] > value; j--) {
                a[j+1] = a[j];
                change = true;
            }

            a[j+1] = value;
            stack.push({c1: i, c2: j, change: change, arr: a.slice()});
        }
        
        //return a;
        return stack;
    }

    var module = {};
    module.algorithms = [
        {name: "Bubblesort", fn: bubbleSort},
        {name: "Selectionsort", fn: selectionSort},
        {name: "Mergesort", fn: mergeSort},
        {name: "Quicksort", fn: quickSort},
        {name: "Insertionsort", fn: insertionSort}
    ];
    module.onSort = function(e) {
        var selectSort = document.getElementById("selectSortAlgorithm");
        var index = selectSort.options[selectSort.selectedIndex].value;
        var alg = module.algorithms[index];
        visualizeSorting(alg.fn);
    };

    module.visualizeSorting = function(fn) {
        //Get array somehow

        loop(stack, function(instruction) {
            //c1 is instruction counter
            //c2 is index being changed
            //change is boolean indicating whether change took place
            //arr is current state of array

        });
    };

    return module;
})();

