# MTNHYDR_website
## Intro
Welcome to the repository for the Mountain Hydrology Research Group's website.
## For future developers
### Technologies Used
- HTML
- CSS
- JavaScript
- jQuery

### Site Structure
The site is organized into several different folders:
- CSS folder holds all CSS files. 
  - All pages use the general index.css file for basic universal styles, including the header and footer.
  - For style code specific to the index.html page, see indexContent.css
- The JS folder holds all JavaScript files:
  - There is one index.js file that holds all of the in site code.
  - The second file is a jQuery file that holds all of the code that allows for jQuery to run. This is not necessarily needed as it can be linked as a url in the browser. To make things easier, the source code is included in this site. Relatively speaking it is a very small file compared to the whole site and does not seem to slow things down.
- Pages holds all html files other than the index.html file.
  - Site was built to be modular, meaning that many of the html files follow very specific formats. Be mindful of the format when creating new pages. Because of this modular structure, CSS and JS are reused many times.
  - There are subfolders in here just to keep things organized. These sections include:
    - Research Profiles
      - All research is organized in the general profile format. All research projects, whether they are linked to the current or past research general page, are included in this section.
      - The profiles in this section all use the index.css and Profiles.css stylesheets.
    - People Profiles
      - All people profiles are kept in this folder and use the general profile format. Note that most alumni do not have personal profiles. As time goes by there will probably be more alumni with profiles, so be aware that the pages here can be linked to both the current people or the alumni pages.
      - The profiles in this section all use the index.css and Profiles.css stylesheets.
    - Archived Pages
      - Archived pages are pages from the old site that do not have a great place on the new site but are still widely used. Currently there is just one page on the archives, but more might be added in time.
    - Join Us Pages
      - The Join Us pages are for student recruitment.
    - Toolbox Profiles
      - Not widely used, currently only one page is on the toolbox folder.
      - The toolbox was a prominant part of the old site, but has not been updated in a while and has since been removed. The file remaining is kept just in case it is to be reused in the future.
- the src folder holds all media that is used in the site.
  - This includes all graphics for research, profile pictures, field work pictures, etc...
