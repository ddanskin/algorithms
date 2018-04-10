// Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let items_swapped;
    do {
        items_swapped = false;
        for (let i = 0; i < n-1; i++) {
            if (arr[i+1] < arr[i]) {
                swapValues(arr, i, i+1);
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
            swapValues(arr, curr, curr-1);
            curr--;
        }
    }
    return arr;
}

// Selection sort
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swapValues(arr, i, min);
    }
    return arr;
}

// Merge sort
function mergeSort(arr) {
    if (arr.length >= 2) {
        let groupSize = 2;
    
        while (groupSize <= arr.length) {
            for (let i = 0; i < arr.length; i+=groupSize) {
                for (let j = i; j < groupSize; j++) {
                    
                }
                if(arr[i] > arr[i+1]) {
                    swapValues(arr, i, i+1);
                }
            }
            groupSize += 2;
        }
    }
    return arr;
}

// Quick sort
function quickSort(arr) {
    return arr;
}

// swap two values
function swapValues(arr, positionOne, positionTwo){
    let temp = arr[positionOne];
    arr[positionOne] = arr[positionTwo];
    arr[positionTwo] = temp;
    return arr;
}

function mergeSortedLists(listOne, listTwo){
    mergedList = []
    while (listOne.length > 0 || listTwo.length > 0) {
        if (listOne.length == 0){
            mergedList.push(listTwo[0]);
            listTwo.shift();
        } else if (listTwo.length == 0) {
            mergedList.push(listOne[0]);
            listOne.shift();
        } else {
            if (listOne[0] > listTwo[0]) {
                mergedList.push(listTwo[0]);
                listTwo.shift();
            } else {
                mergedList.push(listOne[0]);
                listOne.shift();
            }
        }
    }
    return mergedList;
}
