const filtres = document.querySelectorAll('#filtres button')
const menuItems = document.querySelectorAll('#menu-items div')
let categorie = 'tous'

filtres.forEach(filtre => {
    
    filtre.addEventListener('click', () => {
        categorie = filtre.id
        filtres.forEach(item => {
            item.classList.remove('bg-[#493629]')
        })
        filtre.classList.add('bg-[#493629]')
        console.log(categorie);

        menuItems.forEach(item => {
            item.classList.add('hidden')
            if (categorie == 'tous' || item.classList.contains(categorie)) {
                item.classList.remove('hidden')
            }
        });
    })
});