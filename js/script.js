const parent = document.querySelector('#parent')
const menu = document.querySelector('.menu')
const tabs = document.querySelectorAll('.tab')

tablist.addEventListener('click', (e) => {
    console.log(e.target.dataset.city);

    let targetBtn = e.target;
    let dataCity = targetBtn.dataset.city;

    for (let tab of tabContent) {
        tab.classList.remove('active');

        if (dataCity === tab.id) {
            for (let tablink of tablinks) {
                tablink.style.backgroundColor = "";
            }
            tab.classList.add('active');
            targetBtn.style.backgroundColor = getComputedStyle(tab).backgroundColor
        }
    }
})