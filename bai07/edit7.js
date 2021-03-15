let i = 0;
let arr = [];
for (; i < 10; i++) {
    arr[i] = prompt("Nhập giá trị mảng thứ " + i + ":");
} 
document.write(arr + "<br>");
let ktra = prompt("Nhập số cần kiểm tra V:");
let arr2 = arr.filter(el => el != ktra);
document.write(arr2);