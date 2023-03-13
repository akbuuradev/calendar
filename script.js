const headerData = document.querySelector(".header-data")
const days = document.querySelector(".days")
const icons = document.querySelectorAll(".icons span")

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let first = new Date(currYear, currMonth,  1).getDay(),
    last = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDay = new Date(currYear, currMonth, last, ).getDay(),
    lastDate = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";


    for (let i = first; i > 0; i--) {
        liTag += `<li class="active">${lastDate - i + 1}</li>`
    }


    for (let i = 1; i <= last; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                           && currYear === new Date().getFullYear() ? "actives" : "";
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDay; i <= 5; i++) {
        liTag += `<li class="active">${ i - lastDay + 1}</li>`;
    }



    headerData.innerText = `${months[currMonth]} ${currYear}`;
    days.innerHTML = liTag;
}
renderCalendar();

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
})







