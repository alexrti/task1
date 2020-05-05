'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let article = prompt("Введите обязательную статью расходов в этом месяце");
let amount = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        article: amount
    },
    optionalExpenses: {},
    income: [],
    savings: false

};

alert("бюджет на 1 день " + money / 30);