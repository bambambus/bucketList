function calculateTip(bill: number): number {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const totalBills: number[] = [20, 160, 300];
const totalTips: number[] = [];
const totalBillAmount: number[] = [];
for (let i = 0; i < totalBills.length; i++) {
  const tip: number = calculateTip(totalBills[i]);
  totalTips.push(tip);
  totalBillAmount.push(tip + totalBills[i]);
}

console.log(`
            Bills: ${bills}, 
            Tips: ${tips}
            TotalBill: ${totalBill}`);
