let credit = +prompt("Введите сумму кредита");
let procent = +prompt("Введите годовою процентную ставку");
let term = +prompt("Введите срок кредитования");
let monthRate = procent / 12 / 100;

let monthDebt = (
  credit *
  (monthRate + monthRate / (Math.pow(1 + monthRate, term) - 1))
).toFixed(2);

let mainDebt = monthDebt * term;
let monthProcent = 0;
let mainProcent = 0;
let monthMainDebt = 0;
let generalDebt = credit;
let sumWithProc = 0;

for (let i = 1; i < term + 1; i++) {
  if (i == 1) {
    monthProcent = ((generalDebt * (procent / 100)) / 12).toFixed(2);
    monthMainDebt = (monthDebt - monthProcent).toFixed(2);
    mainProcent += +monthProcent;
    sumWithProc += +monthDebt;
    document.write(
      `
        <div>
          ${i} месяц,процент по кредиту: <span>${monthProcent}</span>,погашение кредита: <span>${monthMainDebt}</span>, общая выплата за месяц: <span>${monthDebt}</span>, задолженость по кредиту: <span>${generalDebt.toFixed(
        2
      )}</span> </br>
        </div>
      `
    );
  } else if (i > 1 && i < term) {
    generalDebt = generalDebt - monthMainDebt;
    monthProcent = ((generalDebt * (procent / 100)) / 12).toFixed(2);
    monthMainDebt = (monthDebt - monthProcent).toFixed(2);
    mainProcent += +monthProcent;
    sumWithProc += +monthDebt;

    document.write(
      `
        <div>
          ${i} месяц,процент по кредиту: <span>${monthProcent}</span>,погашение кредита: <span>${monthMainDebt}</span>, общая выплата за месяц: <span>${monthDebt}</span>, задолженость по кредиту: <span>${generalDebt.toFixed(
        2
      )}</span> </br>
        </div>
      `
    );
  } else {
    generalDebt = generalDebt - monthMainDebt;
    monthProcent = ((generalDebt * (procent / 100)) / 12).toFixed(2);
    mainProcent += +monthProcent;
    mainProcent = Math.ceil(mainProcent * 100) / 100;
    monthDebt = (credit + mainProcent - monthDebt * (term - 1)).toFixed(2);

    monthMainDebt = (credit + mainProcent - sumWithProc - monthProcent).toFixed(
      2
    );
    sumWithProc += +monthDebt;

    document.write(
      `
        <div>
          ${i} месяц,процент по кредиту: <span>${monthProcent}</span>,погашение кредита: <span>${monthMainDebt}</span>, общая выплата за месяц: <span>${monthDebt}</span>, задолженость по кредиту: <span>${generalDebt.toFixed(
        2
      )}</span> </br>
        </div>
      `
    );
  }
}
document.write(
  `
    <div>
       Общий процент по кредиту: <span>${mainProcent}</span>,
        общая сумма с учетом процентов <span>${credit + mainProcent}</span>
    </div>
  `
);
