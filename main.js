
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
}

// Insertion sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let prev = arr[i];
        while (arr[i+1] < prev) {
            let temp = prev;
            prev = arr[i+1];
            arr[i+1] = temp;
        }
    }
}


