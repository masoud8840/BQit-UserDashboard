// Toggle 'deposit requests' tables


let currentTab = 'active users';
const toggleDepositRequestsTabs = (clickedTab, htmlEl) => {
    const activeUsersTable = document.querySelector('.active-users__table');
    const historyRequestsTable = document.querySelector('.history-requests__table');
    const pendingUsersTable = document.querySelector('.pending-users__table')
    const referralProfitTable = document.querySelector('.referral-profit__table');
    const depositProfitTable = document.querySelector('.deposit-profit__table');
    const summaryProfitTable = document.querySelector('.summary-profit__table');
    const summaryBtnArrow = document.querySelector('.summary-btn__arrow-down');
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
        if (window.location.pathname === '/views/DepositRequests.html')
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
    if (clickedTab === 'referral profit') {
        depositProfitTable.style.display = 'none'
        // summaryProfitTable.style.display = 'none';
        referralProfitTable.style.display = 'block'
        summaryBtnArrow.src = '/public/images/icon/dashboard/Arrow_Down.svg'
    }
    if (clickedTab === 'deposit profit') {
        depositProfitTable.style.display = 'block'
        // summaryProfitTable.style.display = 'none';
        referralProfitTable.style.display = 'none'
        summaryBtnArrow.src = '/public/images/icon/dashboard/Arrow_Down.svg'
    }
    if (clickedTab === 'summary profit') {
        depositProfitTable.style.display = 'none'
        // summaryProfitTable.style.display = 'block';
        referralProfitTable.style.display = 'none'
        htmlEl.childNodes[1].src = '/public/images/icon/dashboard/Arrow_Down_Active.svg'
    }
}

// Toggle all rows checkboxes
const selectAllTableRows = (input) => {
    const activeUsersTableInputs = document.querySelectorAll('.active-users__table .table__row input');
    const historyRequestsTableInputs = document.querySelectorAll('.history-requests__table .table__row input')
    const pendingUsersTableInputs = document.querySelectorAll('.pending-users__table .table__row input')
    const withdrawRequestTableInputs = document.querySelectorAll('.withdraw-requests__table .table__row input');
    const galleryManagementTableInputs = document.querySelectorAll('.gallery-management .table__row input');
    const adminManagementTableInputs = document.querySelectorAll('.admin-management__table .table__row input');
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
        if (window.location.pathname === '/views/WithdrawRequests.html') {
            withdrawRequestTableInputs.forEach(input => {
                input.checked = true;
            })
        }

        if (window.location.pathname === '/views/GalleryManagements.html') {
            galleryManagementTableInputs.forEach(input => {
                input.checked = true;
            })
        }
        if (window.location.pathname === '/views/AdminManagement.html') {
            adminManagementTableInputs.forEach(input => {
                input.checked = true;
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
        if (window.location.pathname === '/views/WithdrawRequests.html') {
            withdrawRequestTableInputs.forEach(input => {
                input.checked = false
            })
        }

        if (window.location.pathname === '/views/GalleryManagements.html') {
            galleryManagementTableInputs.forEach(input => {
                input.checked = false;
            })
        }

        if (window.location.pathname === '/views/AdminManagement.html') {
            adminManagementTableInputs.forEach(input => {
                input.checked = false;
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



const switchBetween2Tab = (elShouldHide, shouldVisible, toggleVisibleBtn) => {
    const shouldHide = elShouldHide;
    elShouldHide.style.display = 'none';

}



const switchBetween2Element = (currentRoute) => {

    if (currentRoute === 'withdraw requests') {
        const withdrawRequestEl = document.querySelector('.withdraw-requests .statistics-table__container');
        const newWithdrawRequestEl = document.querySelector('.new-withdraw-request');
        const toggleWithdrawRequestOffBtn = document.querySelector('.withdraw-amount__btn');

        withdrawRequestEl.style.display = 'none';
        newWithdrawRequestEl.style.display = 'block';

        // send some information to back-end then disappear back

        toggleWithdrawRequestOffBtn.addEventListener("click", () => {
            newWithdrawRequestEl.style.display = 'block';
            withdrawRequestEl.style.display = 'none'
        })
    }
    if (currentRoute === 'gallery management') {
        const galleryManagementEl = document.querySelector('.gallery-management .statistics-table__container');
        const newGalleryManagementEl = document.querySelector('.new-gallery-image');
        const toggleOffBtn = document.querySelectorAll('.new-gallery-image button');

        galleryManagementEl.style.display = 'none';
        newGalleryManagementEl.style.display = 'block'

        toggleOffBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                galleryManagementEl.style.display = 'block';
                newGalleryManagementEl.style.display = 'none'
            })
        })
    }
    if (currentRoute === 'admin management') {
        const adminManagementEl = document.querySelector('.admin-management .statistics-table__container');
        const newAdminManagement = document.querySelector('.new-admin-management');
        const toggleOffBtn = document.querySelectorAll('.new-admin-management button');

        adminManagementEl.style.display = 'none';
        newAdminManagement.style.display = 'block'

        toggleOffBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                adminManagementEl.style.display = 'block';
                newAdminManagement.style.display = 'none'
            })
        })
    }
}