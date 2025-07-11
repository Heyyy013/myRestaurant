const filtres = document.querySelectorAll('#filtres button')
const menuItems = document.querySelectorAll('#menu-items div')
let categorie = 'tous'

filtres.forEach(filtre => {
    filtre.addEventListener('click', () => {
        categorie = filtre.id
        console.log(categorie);

        menuItems.forEach(item => {
            item.classList.add('hidden')
            if (categorie == 'tous' || item.classList.contains(categorie)) {
                item.classList.remove('hidden')
            }
        });
    })
});