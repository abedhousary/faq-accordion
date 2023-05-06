
const collapseHeaders = document.querySelectorAll('.collapse-header');
const toggletitle = document.querySelectorAll(".toggletitle");
collapseHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        header.classList.toggle('collapsed', content.style.display === 'none');
    });
});

toggletitle.forEach((head)=> {
    head.addEventListener("click",(e)=> {
        toggletitle.forEach((i) => { i.classList.remove("bolding")});
        head.classList.add("bolding")
    })
})