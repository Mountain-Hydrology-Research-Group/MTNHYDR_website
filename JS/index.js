//JQuery used here. See last lines for the actual implementation into the DOM

//HTML for header and footer. Ignore the \ characters, they are just to format the string in a more HTML-friendly way.
const headerHTML = ' \
    <div class="title"> \
        <img src="/src/MTNHYDLOGO.png"> \
        <h1>Mountain Hydrology Research</h1> \
    </div> \
    <div class="navBar"> \
        <div class="mainMenuOption"> \
            <a href="/index.html">Home</a>    \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/CurrentPeople.html">People</a> \
            <div class="subMenu"> \
                <a href="/Pages/CurrentPeople.html">Current Team</a> \
                <a href="/Pages/Alumni.html">Alumni</a> \
            </div> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/CurrentResearch.html">Research</a> \
            <div class="subMenu"> \
                <a href="/Pages/Research Profiles/SnowPatterns.html">Repeatable Snow Patterns</a> \
                <a href="/Pages/Research Profiles/snowInformationForWildlifeSystems.html">Snow Information For Wildlife Systems</a> \
                <a href="/Pages/Research Profiles/forestsAndSnow.html">Forests and Snow</a> \
                <a href="/Pages/Research Profiles/snowTemperatureSierra.html">Snow Temperature Readings in the Sierra</a> \
            </div>    \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/PastResearch.html">Past Research</a> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/Data.html">Data</a> \
            <div class="subMenu"> \
                <a href="/Pages/Data/rainier.shtml">Mt Rainier</a> \
                <a href="/Pages/Data/yosemite.shtml">Yosemite</a> \
                <a href="/Pages/Data/snoqualmie.shtml">Snoqualmie</a> \
                <a href="/Pages/Data/cedar.shtml">Cedar River</a> \
            </div> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/PublicationsPRJ.html">Publications</a> \
            <div class="subMenu"> \
                <a href="/Pages/PublicationsPRJ.html">Peer Reviewed Journals</a> \
                <a href="/Pages/PublicationsCPro.html">Conference Proceedings</a> \
                <a href="/Pages/PublicationsCPre.html">Conference Presentations</a> \
                <a href="/Pages/PublicationsBTR.html">Books And Technical Reports</a> \
            </div> \
            </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/News.html">News</a> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="/Pages/Outreach.html">Outreach</a> \
            <div class="subMenu"> \
                <a href="/Pages/Research Profiles/RainOnSnowModule.html">Rain on Snow Module</a> \
                <a href="">Citizen Science</a> \
                <a href="/Pages/Join Us Pages/joinUsUndergrad.html">Join Us! Undergraduates</a> \
                <a href="/Pages/Join Us Pages/joinUsGraduate.html">Join Us! Graduates</a> \
                <a href="/Pages/Join Us Pages/joinUsPostDoc.html">Join Us! Post-Doctorals</a> \
            </div> \
        </div> \
    <div class="navBarPhone"> \
        <img src="/src/MenuButton.png" alt="Menu Button" /> \
    </div> \
    '; 

    const footerHTML = ' \
        <div class="joinUs"> \
            <h3>Join us!</h3> \
            <h4><a href="/Pages/Join Us Pages/joinUsUndergrad.html">Undergraduate Students</a></h4> \
            <h4><a href="/Pages/Join Us Pages/joinUsGraduate.html">Graduate/Masters Students</a></h4> \
            <h4><a href="/Pages/Join Us Pages/joinUsPostDoc.html">PostDocs</a></h4>  \
        </div> \
        <div class="copyRights"> \
            <h3>Our Home</h3> \
            <p> \
                University of Washington<br> \
                Department of Civil and Environmental Engineering<br> \
                Copyright 2022 \
            </p> \
        </div> \
        <div class="UWLogo"> \
            <img src="/src/UWLogo.png" /> \
        </div> \
    ';

    const dropdownMenuHTML = '\
    <ul> \
        <li><a href="/index.html">Home</a></li> \
        <li><a href="/Pages/CurrentPeople.html">People</a></li> \
        <li><a href="/Pages/CurrentResearch.html">Research</a></li> \
        <li><a href="/Pages/Data.html">Data</a></li> \
        <li><a href="/Pages/PublicationsPRJ.html">Publications</a></li> \
        <li><a href="/Pages/News.html">News</a></li> \
        <li><a href="/Pages/Outreach.html">Outreach/Join Us</a></li> \
    </ul> \
    ';



//Here is the actual JQuery portion    
$(document).ready(() => {
    //Header code
    $('.heading').html(headerHTML)
    //Footer code
    $('.footer').html(footerHTML)
    //Dropdown menu code
    $('.dropdownMenu').hide();
    $('.dropdownMenu').html(dropdownMenuHTML);
    $('.navBarPhone').on('click', () => {
        $('.dropdownMenu').slideToggle();
    });
});