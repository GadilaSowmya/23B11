function runLinearSearch() {
    const input = document.getElementById('linear-input').value;
    const target = parseInt(document.getElementById('linear-target').value);
    const arr = input.split(',').map(Number);

    // Input validation
    if (arr.some(isNaN)) {
        document.getElementById('linear-result').textContent = 'Invalid input. Please enter numbers only.';
        return;
    }

    const result = linearSearch(arr, target);
    const output = result !== -1 ? `Element found at index ${result}` : 'Element not found';
    document.getElementById('linear-result').textContent = output;
}

function runBinarySearch() {
    const input = document.getElementById('binary-input').value;
    const target = parseInt(document.getElementById('binary-target').value);
    const arr = input.split(',').map(Number);

    // Input validation
    if (arr.some(isNaN)) {
        document.getElementById('binary-result').textContent = 'Invalid input. Please enter numbers only.';
        return;
    }

    // Sort the array for binary search
    arr.sort((a, b) => a - b);
    const result = binarySearch(arr, target);
    const output = result !== -1 ? `Element found at index ${result}` : 'Element not found';
    document.getElementById('binary-result').textContent = output;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
}
