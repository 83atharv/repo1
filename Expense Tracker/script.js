let totalExpense = 0;
let expenses = []; // Array to hold expenses data
let totalActivityExpenses = 0;
let activities = []; // Array to hold activity data

// Show the selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Handle expense tracking
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const payer = document.getElementById('expense-payer').value;

    // Store the expense data
    expenses.push({ name, amount, payer });

    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} (Paid by: ${payer}, Amount: ₹${amount.toFixed(2)})`;
    expenseList.appendChild(listItem);
    
    totalExpense += amount;
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
    this.reset();
});

// Handle activity tracking in trip planner
document.getElementById('activity-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const activityName = document.getElementById('activity-name').value;
    const activityExpense = parseFloat(document.getElementById('activity-expense').value);
    
    totalActivityExpenses += activityExpense;

    // Store the activity data
    activities.push({ activityName, activityExpense });

    const activityList = document.getElementById('activity-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${activityName}: ₹${activityExpense.toFixed(2)}`;
    activityList.appendChild(listItem);
    
    document.getElementById('total-activity-expenses').textContent = totalActivityExpenses.toFixed(2);
    this.reset();
});

// Handle subscription tracking
document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const subName = document.getElementById('subscription-name').value;
    const subCost = parseFloat(document.getElementById('subscription-cost').value);
    const dueDate = document.getElementById('subscription-due-date').value;

    const subscriptionList = document.getElementById('subscription-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${subName}: ₹${subCost.toFixed(2)}, Due: ${dueDate}`;
    subscriptionList.appendChild(listItem);
    
    this.reset();
});
