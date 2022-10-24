// Toggle Password Visibility Function
let isUserPasswordVisible = false;
function togglePasswordVisibility() {
  const passwordCharecterField = document.querySelector(
    ".user__password-character"
  );
  const passwordTextField = document.querySelector(".user__password-text");

  isUserPasswordVisible = !isUserPasswordVisible;

  if (isUserPasswordVisible) {
    passwordCharecterField.classList.add("hidden");
    passwordTextField.classList.remove("hidden");
  } else {
    passwordCharecterField.classList.remove("hidden");
    passwordTextField.classList.add("hidden");
  }
}

// Toggle Active Tab
function toggleActiveTab(allOtherTabs, activeTabIndex) {
  const allTabsWhichIsExist = document.getElementsByClassName(allOtherTabs);
  const allTabsBtn = document.querySelectorAll(".table__btn");

  for (let index = 0; index < allTabsWhichIsExist.length; index++) {
    allTabsWhichIsExist[index].classList.add("hidden");
    allTabsBtn[index].classList.remove("table-btn__active");
  }

  allTabsWhichIsExist[activeTabIndex].classList.remove("hidden");
  allTabsBtn[activeTabIndex].classList.add("table-btn__active");
}

function toggleActiveComponent(from, to, type = null) {
  const fromEl = document.querySelector(from);
  const toEl = document.querySelector(to);
  let detailComponent = document.querySelector(type);
  fromEl.classList.add("hidden");
  const cancelBtn = document.querySelector(".cancel-btn");
  // for show deposit requests details
  if (type !== null) {
    detailComponent.classList.remove('hidden')
    cancelBtn.addEventListener("click", () => toggleActiveComponent('.show-deposit-request', '.statistics-table__container'));
  }
  else {
    // detailComponent.classList.add('hidden')
    toEl.classList.remove("hidden");
    if (cancelBtn)
      cancelBtn.addEventListener("click", () => toggleActiveComponent(to, from));
    else return;
  }
}

function selectAllRows(subCheckboxesSelector, headerCheckbox) {
  let isAllRowsSelected = headerCheckbox.checked;

  const otherRowsCheckbox = document.querySelectorAll(`${subCheckboxesSelector} .table__body input[type="checkbox"]`);
  isAllRowsSelected ? otherRowsCheckbox.forEach(checkbox => {
      checkbox.checked = true
  }) : otherRowsCheckbox.forEach(checkbox => {
      checkbox.checked = false
  })
  isAllRowsSelected = !isAllRowsSelected
}