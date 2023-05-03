const calcTip = function (bill) {
  return bill >=50 && bill <=300 ? bill * .15 : bill * .2;
}

const bills = [20,160, 300]

const tips = []
const totalBill = []

for(i=0; i < bills.length; i++){
  const tip = calcTip(bills[i])
  tips.push(tip);
  totalBill.push(tip + bills[i])
}
console.log(`
            Bills: ${bills}, 
            Tips: ${tips}
            TotalBill: ${totalBill}`)





