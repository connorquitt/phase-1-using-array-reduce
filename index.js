const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(batteryCounter, 0)

console.log(totalBatteries)

function batteryCounter(total, arr) {
    return total + arr
}