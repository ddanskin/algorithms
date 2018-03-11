//Bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < n-1; i++) {
            if (arr[i+1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }
}

