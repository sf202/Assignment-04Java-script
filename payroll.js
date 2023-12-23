document.addEventListener('DOMContentLoaded', function () {
    let totalPay = 0;
    let employeeIndex = 1;

    while (true) {
        let hoursWorkedStr = prompt(`Enter hours worked for Employee ${employeeIndex} (enter -1 to finish):`);
        let hoursWorked = parseInt(hoursWorkedStr);

        if (hoursWorked === -1) {
            break;
        }

        if (isNaN(hoursWorked) || hoursWorked < 0) {
            alert('Invalid input. Please enter a non-negative number or -1 to finish.');
            continue;
        }

        let regularPay = Math.min(hoursWorked, 40) * 15;
        let overtimePay = Math.max(0, hoursWorked - 40) * 15 * 1.5;
        let totalEmployeePay = regularPay + overtimePay;

        totalPay += totalEmployeePay;

        displayPayrollInfo(employeeIndex, hoursWorked, totalEmployeePay);

        employeeIndex++;
    }

    displayTotalPay(totalPay);
});

function displayPayrollInfo(index, hoursWorked, totalPay) {
    let table = document.getElementById('payrollTable') || createTable();
    
    let row = table.insertRow();
    let indexCell = row.insertCell(0);
    let hoursCell = row.insertCell(1);
    let payCell = row.insertCell(2);

    indexCell.textContent = index;
    hoursCell.textContent = hoursWorked;
    payCell.textContent = totalPay;
}

function displayTotalPay(totalPay) {
    let totalPayLabel = document.createElement('p');
    totalPayLabel.innerHTML = `<b>Total Pay for All Employees:</b> $${totalPay}`;
    document.body.appendChild(totalPayLabel);
}

function createTable() {
    let table = document.createElement('table');
    table.id = 'payrollTable';

    let thead = table.createTHead();
    let row = thead.insertRow();
    createCell(row, '<b>Index</b>');
    createCell(row, '<b>Hours Worked</b>');
    createCell(row, '<b>Employee Pay</b>');

    document.body.appendChild(table);
    return table;
}

function createCell(row, content) {
    let cell = row.insertCell();
    cell.innerHTML = content;
}
