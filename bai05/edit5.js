let i = 0;
let arr = [];
for (; i < 10; i++) {
    arr[i] = prompt("Nhập giá trị mảng thứ " + i + ":");
}
let arr1 = arr.filter(el => el < 0);
for (let j = 0; j <= arr1.length - 1; j++) {
    document.write(arr1[j] + "<br>");
}