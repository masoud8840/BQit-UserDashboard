// Toggle 'deposit requests' tables


let currentTab = 'active users';
const toggleDepositRequestsTabs = (clickedTab, htmlEl) => {
    const activeUsersTable = document.querySelector('.active-users__table');
    const historyRequestsTable = document.querySelector('.history-requests__table');
    const pendingUsersTable = document.querySelector('.pending-users__table')
    const tableBtns = document.querySelectorAll(".table__btn");
    tableBtns.forEach(btn => {
        btn.classList.remove('table-btn__active')
    })
    htmlEl.classList.add("table-btn__active")

    if (clickedTab === 'active users') {
        if (window.location.pathname === '/views/UserManagement.html') {
            activeUsersTable.style.display = 'flex';
            pendingUsersTable.style.display = 'none';
        }
        if(window.location.pathname === '/views/DepositRequests.html')
        historyRequestsTable.style.display = 'none'
        activeUsersTable.style.display = 'flex';
        currentTab = 'active users'
    }
    if (clickedTab === 'history requests') {
        activeUsersTable.style.display = 'none';
        historyRequestsTable.style.display = 'flex'
        currentTab = 'history requests'
    }
    if (clickedTab === 'pending users') {
        activeUsersTable.style.display = 'none';
        pendingUsersTable.style.display = 'flex'
        currentTab = 'pending users'
    }
}

// Toggle all rows checkboxes
const selectAllTableRows = (input) => {
    const activeUsersTableInputs = document.querySelectorAll('.active-users__table .table__row input');
    const historyRequestsTableInputs = document.querySelectorAll('.history-requests__table .table__row input')
    const pendingUsersTableInputs = document.querySelectorAll('.pending-users__table .table__row input')
    if (input.checked) {
        if (currentTab === 'active users') {
            activeUsersTableInputs.forEach(input => {
                input.checked = true
            })
        }
        if (currentTab === 'history requests') {
            historyRequestsTableInputs.forEach(input => {
                input.checked = true
            })
        }
        if (currentTab === 'pending users') {
            pendingUsersTableInputs.forEach(input => {
                input.checked = true
            })
        }
    } else {
        if (currentTab === 'active users') {
            activeUsersTableInputs.forEach(input => {
                input.checked = false
            })
        }
        if (currentTab === 'history requests') {
            historyRequestsTableInputs.forEach(input => {
                input.checked = false
            })
        }
        if (currentTab === 'pending users') {
            pendingUsersTableInputs.forEach(input => {
                input.checked = false
            })
        }
    }
}


// Toggle 'deposit requests' PopUp
const togglePopup = (type) => {
    const approvedPopUp = document.querySelector('.pop-up__approved');
    const deletedPopUp = document.querySelector('.pop-up__deleted')
    if (type === 'approve') {
        approvedPopUp.style.display = 'flex'
        deletedPopUp.style.display = 'none'

    } else {
        deletedPopUp.style.display = 'flex'
        approvedPopUp.style.display = 'none'
    }
    setTimeout(() => {
        approvedPopUp.style.display = 'none'
        deletedPopUp.style.display = 'none'
    }, 2000)
}