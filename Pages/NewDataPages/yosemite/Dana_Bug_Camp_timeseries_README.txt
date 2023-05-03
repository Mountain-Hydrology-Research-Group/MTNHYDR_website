##Metadata for Dana_Bug_Camp_timeseries_stage_Q_T_2006_2015.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 11/16/2015
##Title:  Dana Fork of the Tuolumne River near Bug Camp and the Dog Lake Parking Lot near Tuolumne Meadows stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-meters-per-second), and water temperature (in degrees Celsius), from instruments located on the Dana Fork of the Tuolumne River near the Pacific Crest Trail near Tuolumne Meadows, Yosemite National Park, for water years 2006 to 2015.  These measurements were taken by a Solinst Levelogger with serial number 70692. 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  'Raw pressure' is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed 'barocorrected pressure'.  The sensor was deployed in a wilderness-type stilling tube.   The barocorrected instrument-recorded stage was converted to match a staff gauge, which recorded in feet by converted from cm of water to feet of water and adding and offset of 0.2 ft.  This converted stage is in the column 'adjusted_stage.'  The channel cross-section is not believed to have changed during the period of record.   Rating curves were developed based on manual discharge measurements taken by an acoustic-doppler-sonar set-up on a small boat or by wading with a USGS AA or pygmy meter at the site (see site photos), following the methods of Rantz et al. 1982 (available at: http://pubs.usgs.gov/wsp/wsp2175/) and Le Coz et al. 2014.  Manual measurements are in the file Dana_Bug_Camp_manual_measurements.csv. In calculating the rating curve, anomalous values in water year 2012 were excluded. All manual measurements, which were in ft and cfs, were converted to meters and cms. The rating curve equation used was the following piecewise function:
for H < 0.36m, Q = 8.822*(adjusted_stage-0.2066)^1.52
for 0.36m < H < 0.98m, Q = 37.16*(H-0.2854)^1.64
for 0.98m < H, Q = 119.294*(H-0.623132)^1.70361
 for downstream, each with stage in m of water and Q in cubic meters per second.  Average discharge errors (calculated vs. manually observed) were 0.0066 cms or 3.9%.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to difficulty in the discharge measurements at low velocities and uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  
All water temperature measurements are raw data and were not verified.  

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.877 N, 119.338 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date - time stamp in UTC, in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
raw_pressure - raw data from the Levelogger (cm of water) 
barocorrected_pressure - raw data minus atmospheric pressure, during times with apparent ice jams, values were changed to NaN (cm of water)
adjusted_stage - pressure adjusted to match stage datum (ft) - barocorrected_pressure*3.281/100 + 0.2 ft. 
estimated_discharge - calculated with piecewise function (cubic-meters-per-second, cms) 
lower_confidence_discharge_cms_bestestimate - calculated lower bound of the 95% confidence interval (cubic-meters-per-second, cms)
upper_confidence_discharge_cms_bestestimate - calculated upper bound of the 95% confidence interval (cubic-meters-per-second, cms)
water_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
NaN = no data