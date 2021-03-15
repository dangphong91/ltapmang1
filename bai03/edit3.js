let arr = [1,4,7,8,11,10,12,28,32,22];
let max = arr[0];
for (let i = 1; i <= arr.length -1; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
let sum = arr.reduce((result, el) => result + el, 0);
let trungbinh = sum / arr.length;
document.write("Giá trị lớn nhất là :" + max + ", giá trị trung bình là :" + trungbinh);