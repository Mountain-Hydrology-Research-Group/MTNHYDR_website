##Metadata for Dana_Meadows_model_forcing_dataset.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 4/25/2016
##Title:  Dana Meadows observed and estimated hourly weather data: temperature, wind speed, relative humidity, shortwave radiation, longwave radiation, and precipitation
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Hourly values of temperature (in degree Celsius), wind speed (in meters-per-second), relative humidity (in percent), shortwave radiation (in watts-per-meter-square), longwave radiation (in watts-per-meter-square), and precipitation (in m-per-hour) at Dana Meadows location (Lat: 37.897000, Long: -119.257000).

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  Data failures at the main site were patched as detailed below to provide a continuous record for model forcing.

Air temperature was observed at the California Data Exchange Center (CEDC) Dana Meadows DAN site (Lat: 37.897000, Long: -119.257000, http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=DAN). Missing data of fewer than three hours were filled trough linear interpolation. For longer periods, other nearby available sensors were used as following:

1. 3/31/2003  12:00:00 PM -  3/31/2003  8:00:00 PM (9 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996	Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
2. 4/1/2003  9:00:00 AM - 4/1/2003  2:00:00 PM(6 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996 Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
3. 9/19/2003  7:00:00 PM - 9/20/2003  3:00:00 AM (9 values), CDEC Ellery Lake ERY (Lat: 37.9349670410156 Long: -119.232200622559), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=ERY
4. 10/2/2003  10:00:00 AM - 10/2/2003  1:00:00 PM (4 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996	Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
5. 7/16/2005  1:00:00 AM - 7/16/2005  12:00:00 PM (12 values), CDEC Ellery Lake ERY (Lat: 37.9349670410156 Long: -119.232200622559), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=ERY
6. 6/7/2006  7:00:00 AM- 6/7/2006  1:00:00 PM (6 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996 Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
7. 11/28/2006  11:00:00 PM- 11/29/2006  5:00:00 AM (6 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996 Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
8. 9/23/2010  10:00:00 AM - 10/7/2010  3:00:00 PM (342 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/airtemp/), http://cnap.ucsd.edu/data/yosemite/airtemp/air-temp-site25.out, derived from 1-min observations
9. 3/21/2012  1:00:00 PM - 3/22/2012  6:00:00 AM (18 values), CDEC Ellery Lake ERY (Lat: 37.9349670410156 Long: -119.232200622559), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=ERY
10. 8/15/2012  1:00:00 PM - 10/25/2012  3:00:00 PM (1707 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/airtemp/), http://cnap.ucsd.edu/data/yosemite/airtemp/air-temp-site25.out, derived from 1-min observations
11. 5/17/2013  7:00:00 PM - 6/19/2013  8:00:00 AM (782 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/airtemp/), http://cnap.ucsd.edu/data/yosemite/airtemp/air-temp-site25.out, derived from 1-min observations
12. 8/22/2013  5:00:00 PM - 8/23/2013  8:00:00 AM (16 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996	Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
13. 7/21/2015  2:00:00 PM - 9/8/2015  12:00:00 AM (1163 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/airtemp/), http://cnap.ucsd.edu/data/yosemite/airtemp/air-temp-site25.out, derived from 1-min observations

Relative humidity was observed at the CEDC Dana Meadows DAN site (Lat: 37.897000, Long: -119.257000, http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=DAN). Missing data of fewer than three hours were filled trough linear in interpolation. For longer periods, other nearby available sensors were used as following:

1. 1/28/2003  9:00:00 AM - 1/31/2003  5:00:00 AM (69 values), Tuolumne Meadows NPS, TMM station (Lat:37.868000, Long:-119.319000), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TMM
2. 7/16/2005  1:00:00 AM - 7/16/2005  12:00:00 PM (12 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
3. 9/23/2010  10:00:00 AM - 10/7/2010  3:00:00 PM (342 values ), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
4. 3/21/2012  1:00:00 PM - 3/22/2012  7:00:00 AM (19 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
5. 5/30/2012  4:00:00 PM - 6/26/2012  9:00:00 PM (654 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
6. 8/15/2012  1:00:00 PM - 10/25/2012  3:00:00 PM (1707 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
7. 5/17/2013  7:00:00 PM - 6/19/2013  8:00:00 AM (782 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
8. 8/22/2013  5:00:00 PM - 8/23/2013  8:00:00 AM (16 values), Hydroclimate dataset, site 25, Dana Meadows (Lat:37.8961 Long:-119.2576) (http://cnap.ucsd.edu/data/yosemite/humidity/), http://cnap.ucsd.edu/data/yosemite/humidity/humidity-site25.out, derived from 1-min observations
9. 7/21/2015  12:00:00 AM - 9/8/2015  12:00:00 AM, (1177 values), Tioga Lake (Lat:37.929, Long:-119.252,2940,tidbit,T_E2950, http://tenaya.ucsd.edu/~esumargo/yosemite/all_tidbit/tidbit_H_tiogalake_2002.txt, Hydroclimate dataset(http://tenaya.ucsd.edu/),  derived from 30-min observations

Wind speed data were recorded at at the CEDC Dana Meadows DAN site (Lat: 37.897000, Long: -119.257000, http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=DAN). Periods with missing data were filled in with data from other available nearby CDEC stations data as following:

1. 1/28/03 9:00 AM - 1/31/2003  5:00:00 AM (69 values), Tuolumne Meadows NPS, TMM station (Lat:37.868000, Long:-119.319000), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TMM
2. 9/19/03 7:00 PM - 9/20/2003  3:00:00 AM (9 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996	Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
3. 10/2/2003  10:00:00 AM - 10/15/2003  12:00:00 PM (315 values), Tuolumne Meadows NPS, TMM station (Lat:37.868000, Long:-119.319000), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TMM
4. 7/6/05 3:00 PM - /8/2005  12:00:00 PM (46 values), Tuolumne Meadows NPS, TMM station (Lat:37.868000, Long:-119.319000), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TMM
5. 7/16/05 1:00 AM - 7/16/05 12:00 PM (12 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
6. 6/7/2006  7:00:00 AM - 6/7/2006  12:00:00 PM (6 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
7. 11/28/06 11:00 PM - 11/29/2006  4:00:00 AM (6 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
8. 3/28/10 10:00 PM - 3/29/10 3:00 AM (6 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
9. 3/21/12 12:00 PM - 3/22/2012  6:00:00 AM (18 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
10. 5/30/12 4:00 PM - 6/26/2012  9:00:00 PM (654 values), CDEC Tioga Pass Entry Station TES (Lat: 37.9108543395996 Long: -119.258453369141), http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TES
11. 8/15/2012  1:00:00 - 10/25/2012  4:00:00 PM PM (1708 values), CDEC Tenaya Lake TNY http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TNY
12. 5/17/2013  7:00:00 PM - 6/19/2013  8:00:00 AM(782 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM
13. 2/9/2015  1:00:00 PM - 9/8/2015  12:00:00 AM (5052 values), Gem Pass,GEM (Lat: 37.780000, Long: -119.170000) http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=GEM

Daily precipitation was estimated from recorded accumulated precipitation at the CDEC Tuolumne Meadows TUM site. http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=TUM. The precipitation series was scaled up using a multiplier (1.26) estimated based on PRISM and limited overlapping TUM and Dana Meadows observations (Cristea et al., 2013). 
Hourly values in m were generating using Distributed Hydrology Soil Vegetation Model (DHSVM, http://www.hydro.washington.edu/Lettenmaier/Models/DHSVM/) pre-processing tools assuming uniform distribution. 
Shortwave radiation was recorded the CEDC Dana Meadows site (Lat: 37.897000, Long: -119.257000, http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=DAN). The data was quality controlled for snow obscuring the pyrometer (Lapo et al., 2015), local shading effects from both topography and vegetation, thermal leaking, and non-physical values. These quality control tools can be found at: github.com/Mountain-Hydrology-Research-Group/moq. Data were also screened for tilting of the pyranometer away from horizontal. Short gaps (< 2 days in length, predominantly from shading effects) were filled by interpolating transmissivity (github.com/klapo/shin). Longer gaps (listed below) were filled using MTCLIM (Bohn et al., 2013; vic.readthedocs.org/en/vic.4.2.c/Overview/ModelOverview/#meteorology) estimated shortwave. Downward longwave radiation was estimated using MTCLIM.

Long gaps in shortwave data (> 2 days in length), were filled with MTCLIM:
1. (2.2083 days) :       17-Dec-2002 05:00:00 - 19-Dec-2002 10:00:00
2. (2.2083 days) :       28-Apr-2003 05:00:00 - 30-Apr-2003 10:00:00
3. (3.3333 days) :       03-Nov-2003 01:00:00 - 06-Nov-2003 09:00:00
4. (3 days)  :       11-Dec-2003 - 14-Dec-2003
5. (2.75 days)   :       26-Oct-2004 15:00:00 - 29-Oct-2004 09:00:00
6. (2.3333 days) :       25-Jan-2005 14:00:00 - 27-Jan-2005 22:00:00
7. (3.2083 days) :       28-Nov-2005 - 01-Dec-2005 05:00:00
8. (2.9167 days) :       02-Dec-2005 13:00:00 - 05-Dec-2005 11:00:00
9. (2.75 days)   :       18-Jan-2006 16:00:00 - 21-Jan-2006 10:00:00
10. (2.9583 days)    :       11-Feb-2007 06:00:00 - 14-Feb-2007 05:00:00
11. (2.4583 days)    :       28-Dec-2007 01:00:00 - 30-Dec-2007 12:00:00
12. (4 days) :       23-Jan-2009 15:00:00 - 27-Jan-2009 15:00:00
13. (4.7083 days)    :       06-Feb-2009 20:00:00 - 11-Feb-2009 13:00:00
14. (2.75 days)  :       04-Mar-2009 16:00:00 - 07-Mar-2009 10:00:00
15. (2.3333 days)    :       12-Nov-2009 02:00:00 - 14-Nov-2009 10:00:00
16. (2.125 days) :       07-Dec-2009 12:00:00 - 09-Dec-2009 15:00:00
17. (3.75 days)  :       21-Jan-2010 16:00:00 - 25-Jan-2010 10:00:00
18. (3.0833 days)    :       05-Feb-2010 04:00:00 - 08-Feb-2010 06:00:00
19. (2.2917 days)    :       20-Apr-2010 17:00:00 - 23-Apr-2010
20. (2.5833 days)    :       04-Oct-2010 02:00:00 - 06-Oct-2010 16:00:00
21. (2.375 days) :       07-Nov-2010 01:00:00 - 09-Nov-2010 10:00:00
22. (2.25 days)  :       09-Dec-2010 03:00:00 - 11-Dec-2010 09:00:00
23. (3.2917 days)    :       14-Dec-2010 20:00:00 - 18-Dec-2010 03:00:00
24. (4.875 days) :       19-Feb-2011 13:00:00 - 24-Feb-2011 10:00:00
25. (2.75 days)  :       21-Mar-2011 16:00:00 - 24-Mar-2011 10:00:00
26. (4.3333 days)    :       04-Nov-2011 01:00:00 - 08-Nov-2011 09:00:00
27. (71.0833 days)   :       15-Aug-2012 12:00:00 - 25-Oct-2012 14:00:00
28. (3.3333 days)    :       16-Nov-2012 01:00:00 - 19-Nov-2012 09:00:00
29. (4.4583 days)    :       12-Dec-2012 15:00:00 - 17-Dec-2012 02:00:00
30. (5.8333 days)    :       25-Dec-2012 14:00:00 - 31-Dec-2012 10:00:00
31. (32.5417 days)   :       17-May-2013 18:00:00 - 19-Jun-2013 07:00:00
32. (2.25 days)  :       28-Oct-2013 03:00:00 - 30-Oct-2013 09:00:00
33. (2.875 days) :       03-Dec-2013 16:00:00 - 06-Dec-2013 13:00:00
34. (2.4583 days)    :       30-Jan-2014 02:00:00 - 01-Feb-2014 13:00:00
35. (4.3333 days)    :       06-Feb-2014 02:00:00 - 10-Feb-2014 10:00:00
36. (2.2917 days)    :       12-Dec-2014 04:00:00 - 14-Dec-2014 11:00:00
37. (5.7917 days)    :       15-Dec-2014 14:00:00 - 21-Dec-2014 09:00:00

The entire model forcing dataset (with corrected and gap filled shortwave) has timestamps in both Universal Time (UTC) and Pacific Standard Time (PST), not adjusted for daylight savings time. The data were corrected from the original timestamps on CDEC using the scripts stored on github page: https://github.com/klapo/time_tools .

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.897000 N, 119.257000 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)
Elevation: 3000 m

Data Citation:
Lundquist, J. D., J. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. Dettinger (2016), Yosemite Hydroclimate Network:  Distributed Stream and Atmospheric Data for the Tuolumne River Watershed and Surroundings, submitted to Water Resources Research

Variables and Units:
datetime_UTC - hourly time stamp, in format 'yyyy/mm/dd HH:MM:SS', in UTC (PST + 8 hours)
datetime_PST - hourly time stamp, in format 'yyyy/mm/dd HH:MM:SS', in Pacific Standard Time
T_deg_C - air temperature, in degrees Celcius
Wind_m_per_s - wind speed, meters per second
RH_percent - relative humidity, in percent, ranging from 0 to 100
SWdwnGapFill - downwelling solar irradiance, in W/m^2, primarily observations, with values estimated to fill gaps as noted
LWdwnMTCLIM - downwelling longwave irradiance, in W/m^2, estimated based on MTCLIM methods
precip_m - precipitation, in meters

References:

Bohn, T. J., B. Livneh, J. W. Oyler, S. W. Running, B. Nijssen, and D. P. Lettenmaier (2013), Global evaluation of MTCLIM and related algorithms for forcing of ecological and hydrological models, Agric. For. Meteorol., 176, 38-49, doi:10.1016/j.agrformet.2013.03.003.

Cristea, N. C., Lundquist, J. D., Loheide, S. P., Lowry, C. S. and Moore, C. E. (2014), Modelling how vegetation cover affects climate change impacts on streamflow timing and magnitude in the snowmelt-dominated upper Tuolumne Basin, Sierra Nevada. Hydrol. Process., 28: 3896–3918. doi: 10.1002/hyp.9909

Lapo, K. E. , L. M. Hinkelman, C. C. Landry, A. K. Massmann, and J. D. Lundquist (2015) A simple algorithm for identifying periods of snow accumulation on a radiometer. Water Resources Research, 51, 7820-7828 doi: 10.1002/2015WR017590.