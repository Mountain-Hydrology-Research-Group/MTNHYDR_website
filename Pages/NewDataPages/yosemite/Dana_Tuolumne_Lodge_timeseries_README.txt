##Metadata for Dana_Tuolumne_Lodge_timeseries_stage_Q_T_2001_2006.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 11/16/2015
##Title:  Dana Fork of the Tuolumne River at the Tuolumne Lodge near Tuolumne Meadows stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-meters-per-second), and water temperature (in degrees Celsius), from instruments located on the Dana Fork of the Tuolumne River near the Tuolumne Lodge, Yosemite National Park, for water years 2001 to 2006.  These measurements were taken by a Solinst Levelogger, serial number unknown at this site. 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  Raw_pressure is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed barocorrected_pressure.  The sensor was deployed in a concrete anchor.   No quality staff plate or datum exists for this location, so the barocorrected instrument-recorded stage was considered the stage of record.  The channel cross-section is not believed to have changed during the period of record.   Rating curves were developed based on manual discharge measurements taken by an acoustic-doppler-sonar set-up on a small boat or by wading with a USGS AA or pygmy meter near the Dana Bug Cap site location (see site photos), following the methods of Rantz et al. 1982 (available at: http://pubs.usgs.gov/wsp/wsp2175/) and Le Coz et al. 2014.  Manual measurements are in the file Dana_Lodge_manual_measurements.csv.   The rating curve equation used was the following piecewise function:
for H < 0.46m, Q = 4.036*(adjusted_stage-0.421)^1.49
for 0.46m <= H, Q = 31.25*(H-0.4419)^1.67
 for downstream, each with stage in m of water and Q in cubic meters per second.  Average discharge errors (calculated vs. manually observed) were 0.18 cms or 0.04%.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to difficulty in the discharge measurements at low velocities and uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  
All water temperature measurements are raw data and were not verified.  

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.876 N, 119.333 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date - time stamp in UTC, in format ‘yyyy/mm/dd HH:MM:SS’, midnight = 00:00:00 
raw_pressure - raw data from the Levelogger (cm of water) 
raw_temperature - raw data (degrees C)
barocorrected_pressure - raw data minus atmospheric pressure, during times with apparent ice jams, values were changed to NaN (cm of water)
estimated_discharge - calculated with piecewise function (cubic-meters-per-second, cms) 
lower_confidence_discharge_cms_bestestimate - calculated lower bound of the 95% confidence interval (cubic-meters-per-second, cms)
upper_confidence_discharge_cms_bestestimate - calculated upper bound of the 95% confidence interval (cubic-meters-per-second, cms)
water_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
NaN = no data