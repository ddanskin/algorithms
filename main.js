// Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let items_swapped;
    do {
        items_swapped = false;
        for (let i = 0; i < n-1; i++) {
            if (arr[i+1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                items_swapped = true;
            }
        }
    } while (items_swapped);
    return arr;
}

// Insertion sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let curr = i;
        while ( i != 0 && arr[curr] < arr[curr-1]) {
            let temp = arr[curr];
            arr[curr] = arr[curr-1];
            arr[curr-1] = temp;
            curr--;
        }
    }
    return arr;
}

// Selection sort
function selectionSort(arr) {
   return arr;
}

// Merge sort
function mergeSort(arr) {
    return arr;
}

// Quick sort
function quickSort(arr) {
    return arr;
}
