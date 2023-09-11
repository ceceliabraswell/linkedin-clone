const profileMenu = document.getElementById("profileMenu");
const sidebarActivity = document.getElementById("sidebarActivity");
const moreLink = document.getElementById("showMoreLink");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}   

function toggleActivity() {
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    }else{
        moreLink.innerHTML = "Show more <b>+</b>";
    }
}



