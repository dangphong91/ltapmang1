let i = 0;
let arr = [];
for (; i < 10; i++) {
    arr[i] = prompt("Nhập giá trị mảng thứ " + i + ":");
}
document.write(arr + "<br>");
document.write(arr.sort((a,b) => b - a));