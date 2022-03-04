const menu = document.getElementById("myMenu");
const indexMenu = document.getElementById("indexMyMenu");
totalClicks = -1;

const openNav = () => {
    console.log('went through');
    menu.style.height = "40vh";
    menu.style.visibility = "visible";
    indexMenu.style.height = "40vh";
    indexMenu.style.marginTop = "10vh";
    indexMenu.style.visibility = "visible";
};

const closeNav = () => {
    menu.style.height = "0";
    menu.style.marginTop = "0";
    menu.style.visibility = "hidden";
    indexMenu.style.height = "0";
    indexMenu.style.marginTop = "0";
    indexMenu.style.visibility = "hidden";
};

const buttonFunction = () => {
    totalClicks++;

    if (totalClicks > 1) {
        totalClicks = 0;
    }

    if (totalClicks === 0) {
        openNav();
    }
    
    if (totalClicks === 1) {
        closeNav()
    }
}