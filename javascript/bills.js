function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
var totalBills = [0, 160, 300];
var totalTips = [];
var totalBillAmount = [];
for (var i = 0; i < totalBills.length; i++) {
    var tip = calculateTip(totalBills[i]);
    totalTips.push(tip);
    totalBillAmount.push(tip + totalBills[i]);
}
console.log("\n            Bills: ".concat(totalBills, ", \n            Tips: ").concat(totalTips, "\n            TotalBill: ").concat(totalBillAmount));
