let i = 0;
let a = [];
for (; i < 10; i++) {
    a[i] = prompt("Nhập giá trị mảng a thứ " + i + ":");
}
let j = 0;
let b = [];
for (; j < 10; j++) {
    b[j] = prompt("Nhập giá trị mảng b thứ " + j + ":");
}
let c = [a, b];
document.write(c);