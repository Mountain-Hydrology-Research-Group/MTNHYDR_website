##Metadata for Delaney_meadow_timeseries_stage_Q_T_2008_2015.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 11/16/2015
##Title:  Delaney Creek just after it enters Tuolumne Meadows stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celsius), from Delaney Creek where it enters Tuolumne Meadows, Yosemite National Park, for water years 2008 to 2015.  These measurements were taken by Solinst Leveloggers of various models (see metadata associated with instrument IDs). 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  'Raw pressure' is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed 'barocorrected pressure'. The instrument was placed in a stilling tube, but there are offsets when one instrument was removed and another was placed in the tube (due both to instrument calibration and to sediment filling the lower end of the tube).  These shifts in the datum were estimated by an offset ('offset') which should be added to the barometrically-corrected water depth to provide a consistent datum through time.  Stage can be calculated by adding together the 'barocorrected pressure' and the 'offset' columns.  Often, precise measurements of when and where the instrument moved were not available, and so the offsets are a best guess based on water depths at times of low and zero flow in addition to comparison with available measurements.  The channel cross-section is not believed to have changed during the period of record.   A rating curve was developed based on manual discharge measurements taken by wading with a USGS AA or pygmy meter (see site photos), following the methods of Le Coz et al. 2014.  Manual measurements are in the file Delaney_meadow_manual_measurements.csv. In calculating the rating curve, anomalous values measured on 1 July 2009, 15 July 2009, and 26 July 2010 were excluded. These errors are believed to be due to rapid changes in stage (due to a large diurnal cycle on 1 July 2009 and to rain spikes on 26 July 2010 and 15 July 2009). These were changed to NaN in the column labeled "instrument_stage_used" in the manual measurements.  Stage levels above 1.2m are believed to be caused by ice-jams, therefore the rating curve does not apply above this height. The rating curve equation used was the following piecewise function:
for H < 0.37m, Q = 2.903*(adjusted_stage-0.129)^1.525
for 0.37m < H < 1.07m, Q = 6.157*(H-0.1928)^1.685
for 1.07m < H < 1.2m, Q = 41.69*(H-0.7903)^1.692
, with stage in m of water and Q in cubic meters per second.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).   All water temperature measurements are raw data and were not verified.  

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.883357 N, 119.381056 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date_time - time stamp in UTC, in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
raw_pressure - raw data from the Levelogger (cm of water) 
barocorrected_pressure - raw data minus atmospheric pressure (cm of water) 
offset - number to add to stage to account for shifts in instrument location and datum (cm)
estimated_discharge - calculated with piecewise function (cubic-meters-per-second, cms) 
lower_confidence_discharge_cms_bestestimate - calculated lower bound of the 95% confidence interval (cubic-meters-per-second, cms)
upper_confidence_discharge_cms_bestestimate - calculated upper bound of the 95% confidence interval (cubic-meters-per-second, cms)
water_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
instrument_ID - a number that changes each time the instrument was downloaded or changed 
NaN = no data

Serial Numbers associated with instrument IDs:
Note that the instrument ID changed either when it was downloaded or swapped out because it may have moved during the downloading process.
ID's 1 to 8 are all associated with Solinst serial number 41940
ID 9 corresponds to Solinst serial number 70595