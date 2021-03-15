let i = 0;
let arr = [];
for (; i < 10; i++) {
    arr[i] = prompt("Nhập giá trị mảng thứ " + i + ":");
}
let ktra = prompt("Nhập số cần kiểm tra V:");
let x = arr.indexOf(ktra);
if (x >= 0) {
    document.write("V is in the array.");
} else {
    document.write("V is not in the array");
}