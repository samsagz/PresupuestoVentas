function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0]; //changed from original post
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    return [max, min, sum / arr.length]; //changed from original post
}
let max = 0, min = 0, avg = 0;
const tableResult = [];
tableResult.push(["Lo que quiero", 2000001, 1000000, 1, 100]);
tableResult.push(["Lo que creo", 2000002, 1000000, 1, 100]);
tableResult.push(["Escenarios", 3000003, 1000000, 1, 100]);
tableResult.push(["Detalle por cliente", 2000004, 1000000, 1, 100]);
tableResult.push(["Punto de equilibrio", 2000005, 1000000, 1, 100]);
tableResult.push(["Costo de adquisición", 2000010, 1000000, 1, 100]);
tableResult.push(["Por colección", 2000007, 1000000, 1, 100]);

[max, min, avg] = maxMinAvg(tableResult.map(a => a[1]));
console.log(max, min, avg);