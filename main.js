
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
        let prev = arr[i];
        let curr = arr[i+1];
        while (curr < prev) {
            let temp = prev;
            prev = curr;
            curr = temp;
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
