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

function toggleActiveComponent(from, to) {
  const fromEl = document.querySelector(from);
  const toEl = document.querySelector(to);

  fromEl.classList.add("hidden");
  toEl.classList.remove("hidden");

  const cancelBtn = document.querySelector(".cancel-btn");
  if (cancelBtn)
    cancelBtn.addEventListener("click", () => toggleActiveComponent(to, from));
  else return;
}

let isAllRowsSelected = false;
function selectAllRows() {
  isAllRowsSelected = !isAllRowsSelected;
  const otherRowsCheckbox = document.querySelectorAll(
    '.table__body input[type="checkbox"]'
  );
  isAllRowsSelected
    ? otherRowsCheckbox.forEach((checkbox) => {
      checkbox.checked = true;
    })
    : otherRowsCheckbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
}
