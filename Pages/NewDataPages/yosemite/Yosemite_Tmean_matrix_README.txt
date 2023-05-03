##Metadata for Yosemite_Tmean_matrix.csv & Yosemite_Tmax_matrix.csv & Yosemite_Tmin_matrix.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 7/24/2015
##Title:  Daily values of mean, maximum, and minimum air temperature at 62 surface locations in and around Yosemite National Park, California
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Daily summary recordings (daily mean, minimum, and maximum) of air temperature (in degrees Celsius), from instruments from a variety of measurement networks (see Yosemite_temperature_matrix_site_information.csv).

Accuracy & Quality Control:
All data were converted to local standard time (UTC-8). Site and instrument characteristics for each of the sampling networks are detailed in Table 1 of Lundquist and Cayan (2007), and a map is provided in Figure 1 of Lundquist and Cayan (2007).   Daily mean, maximum, and minimum temperatures were calculated for each automatically recording sensor for the period of 0:00 to 23:00 LST occurring on that day, and daily means were calculated as the average of the reported maximum and minimum temperatures at each coop station. All data were manually checked, and repeated values, extreme outliers and inconsistencies were removed.   

Location:
Tuolumne and Merced River Watersheds, Yosemite National Park
Approximate Coordinates:  see Yosemite_temperature_matrix_site_information.csv (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)
Elevation: see Yosemite_temperature_matrix_site_information.csv


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261
and
Lundquist, J. D. and D. R. Cayan, 2007. Surface temperature patterns in complex terrain: daily variations and long-term change in the central Sierra Nevada, California. J. Geophys. Res., 112, D11124, doi:10.1029/2006JD007561.

Variables and Units:
The first four rows include summary information for each site.  The first column of these rows specifies the information in that row, which are:
row 1: NumberID - a number from 1 to 62 identifying the site, for use in cross-referencing with Yosemite_temperature_matrix_site_information.csv
row 2: latitude (in NAD 83)
row 3: longitude (in NAD 83)
row 4: elevation (in meters above sea level)
Starting in row five, the first column specifies the date, and all other columns correspond to a specific temperature site (referenced with the information in the first 4 rows of that column)
date - daily, in format 'mm/dd/yy', representing summary values from midnight = 00:00 until 23:00 each day using local time
temperature - degrees C  (separate matrices are provided for each of Tmean, Tmax, and Tmin)
NaN = no data

