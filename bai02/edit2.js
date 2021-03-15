let arr = [1,4,7,8,11,10,12,28,32,22];
let max = arr[0];
for (let i = 1; i <= arr.length -1; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
let x = arr.indexOf(max);
document.write("Giá trị lớn nhất là: " + max + " vị trí :" + x);