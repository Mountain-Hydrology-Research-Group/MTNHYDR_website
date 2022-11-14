//JQuery used here. See last lines for the actual implementation into the DOM

/*First, the location and path variables must be found. This is because depending on the servers, the paths are different.
Since the paths vary, this may need to be modified if new servers/filepath systems are added*/

const find_path_origin = () => {
    let return_path = ''
    //If this is not run locally, the port will be defined as an empty string
    if(location.port === '') {
        //Here the paths are going to split into a list, and the 2nd list item will be taken
        location_init_path = location.pathname.split('/')[1]
        return_path = `${location.origin}/${location_init_path}`
        console.log(location_init_path)
        console.log(location.origin)
    }
    return return_path
}

path_origin = find_path_origin()


//HTML for header and footer. Ignore the \ characters, they are just to format the string in a more HTML-friendly way.
const headerHTML = ` \
    <div class="title"> \
        <img class = "logoMain" src="${path_origin}/src/MTNHYDLOGO.png"> \
        <h1>Mountain Hydrology Research</h1> \
    </div> \
    <div class="navBar"> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/index.html">Home</a>    \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/CurrentPeople.html">People</a> \
            <div class="subMenu"> \
                <a href="${path_origin}/Pages/CurrentPeople.html">Current Team</a> \
                <a href="${path_origin}/Pages/Alumni.html">Alumni</a> \
            </div> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/CurrentResearch.html">Research</a> \
            <div class="subMenu"> \
                <a href="${path_origin}/Pages/Research Profiles/SublimationOfSnow.html">Sublimation of Snow</a> \
                <a href="${path_origin}/Pages/Research Profiles/SnowPatterns.html">Repeatable Snow Patterns</a> \
                <a href="${path_origin}/Pages/Research Profiles/snowInformationForWildlifeSystems.html">Snow Information For Wildlife Systems</a> \
                <a href="${path_origin}/Pages/Research Profiles/forestsAndSnow.html">Forests and Snow</a> \
                <a href="${path_origin}/Pages/Research Profiles/snowTemperatureSierra.html">Snow Temperature Readings in the Sierra</a> \
                <a href="${path_origin}/Pages/Research Profiles/SnowIR.html">Snow Temperature Readings in the Sierra</a> \
            </div>    \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/PastResearch.html">Past Research</a> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/Data.html">Data</a> \
            <div class="subMenu"> \
                <a href="${path_origin}/Pages/Data/rainier.shtml">Mt Rainier</a> \
                <a href="${path_origin}/Pages/Data/yosemite.shtml">Yosemite</a> \
                <a href="${path_origin}/Pages/Data/snoqualmie.shtml">Snoqualmie</a> \
                <a href="${path_origin}/Pages/Data/cedar.shtml">Cedar River</a> \
            </div> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/PublicationsPRJ.html">Publications</a> \
            <div class="subMenu"> \
                <a href="${path_origin}/Pages/PublicationsPRJ.html">Peer Reviewed Journals</a> \
                <a href="${path_origin}/Pages/PublicationsCPro.html">Conference Proceedings</a> \
                <a href="${path_origin}/Pages/PublicationsCPre.html">Conference Presentations</a> \
                <a href="${path_origin}/Pages/PublicationsBTR.html">Books And Technical Reports</a> \
            </div> \
            </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/News.html">News</a> \
        </div> \
        <div class="mainMenuOption"> \
            <a href="${path_origin}/Pages/Outreach.html">Outreach</a> \
            <div class="subMenu"> \
                <a href="${path_origin}/Pages/Research Profiles/RainOnSnowModule.html">Rain on Snow Module</a> \
                <a href="">Citizen Science</a> \
                <a href="${path_origin}/Pages/Join Us Pages/joinUsUndergrad.html">Join Us! Undergraduates</a> \
                <a href="${path_origin}/Pages/Join Us Pages/joinUsGraduate.html">Join Us! Graduates</a> \
                <a href="${path_origin}/Pages/Join Us Pages/joinUsPostDoc.html">Join Us! Post-Doctorals</a> \
            </div> \
        </div> \
    <div class="navBarPhone"> \
        <img src="${path_origin}/src/MenuButton.png" alt="Menu Button" /> \
    </div> \
    `; 

    const footerHTML = ` \
        <div class="joinUs"> \
            <h3>Join us!</h3> \
            <h4><a href="${path_origin}/Pages/Join Us Pages/joinUsUndergrad.html">Undergraduate Students</a></h4> \
            <h4><a href="${path_origin}/Pages/Join Us Pages/joinUsGraduate.html">Graduate/Masters Students</a></h4> \
            <h4><a href="${path_origin}/Pages/Join Us Pages/joinUsPostDoc.html">PostDocs</a></h4>  \
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
            <img src="${path_origin}/src/UWLogo.png" /> \
        </div> \
    `;

    const dropdownMenuHTML = `\
    <ul> \
        <li><a href="${path_origin}/index.html">Home</a></li> \
        <li><a href="${path_origin}/Pages/CurrentPeople.html">People</a></li> \
        <li><a href="${path_origin}/Pages/CurrentResearch.html">Research</a></li> \
        <li><a href="${path_origin}/Pages/Data.html">Data</a></li> \
        <li><a href="${path_origin}/Pages/PublicationsPRJ.html">Publications</a></li> \
        <li><a href="${path_origin}/Pages/News.html">News</a></li> \
        <li><a href="${path_origin}/Pages/Outreach.html">Outreach/Join Us</a></li> \
    </ul> \
    `;

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
