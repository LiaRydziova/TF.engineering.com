//vytvorime instanci observer
let instanceObservera = new IntersectionObserver((argPoleVechHlidanychSekci) => {
    for (let hlidaSekce of
        argPoleVechHlidanychSekci) {
        //vlastnost isIntersection rika jestli element na strance je nebo neni
        //tato vlastnost vraci true nebo false
        if (hlidaSekce.isIntersecting){
            //.target nam vrati, na kterem pak muzem pouzivatv style, classList,..
            hlidaSekce.target.classList.add("active");
        } else {
            hlidaSekce.target.classList.remove("active");
        }
    }
}, {
threshold: 0.3
});
    
//zamerime vsechny tagy "section"
let poleVcechSekci = document.querySelectorAll("section");
for (let sekce of poleVcechSekci) {
    //zde rikame ze instance ma hlidat stav teto sekce
    instanceObservera.observe(sekce);
};