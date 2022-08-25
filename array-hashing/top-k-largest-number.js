function FirstKelements(arr, size, k) {

    var minHeap = [];
    for (var i = 0; i < k; i++) {
        minHeap.push(arr[i]);
    }

    // Loop For each element in array
    // after the kth element
    for (var i = k; i < size; i++) {
        minHeap.sort((a, b) => a - b);
        console.log(minHeap)
        // If current element is smaller
        // than minimum ((top element of
        // the minHeap) element, do nothing
        // and continue to next element
        if (minHeap[minHeap.length - k] > arr[i])
            continue;

        // Otherwise Change minimum element
        // (top element of the minHeap) to
        // current element by polling out
        // the top element of the minHeap
        else {
            minHeap[minHeap.length - k] = arr[i]
        }
    }

    // Now min heap contains k maximum
    // elements, Iterate and print
    for (var iterator of minHeap) {
        console.log(iterator + " ");
    }
}

// Driver code
var arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
var size = arr.length;

// Size of Min Heap
var k = 3;
FirstKelements(arr, size, k);

// This code is contributed by gauravrajput1