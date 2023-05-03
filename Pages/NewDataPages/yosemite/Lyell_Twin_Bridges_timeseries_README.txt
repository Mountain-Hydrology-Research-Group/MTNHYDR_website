##Metadata for Lyell_Twin_Bridges_timeseries_stage_Q_T_2002_2015.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 2/3/2016
##Title:  Lyell Fork of the Tuolumne River near the twin bridges on the Pacific Crest Trail near Tuolumne Meadows stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celcius), from instruments located on the Lyell Fork of the Tuolumne River both upstream and downstream of the twin bridges on the Pacific Crest Trail near Tuolumne Meadows, Yosemite National Park, for water years 2002 to 2015.  These measurements were taken by Solinst Leveloggers of various models (see metadata associated with instrument IDs). 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  'Raw pressure' is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed 'barocorrected pressure'. At the downstream location, sensors were deployed in a small, concrete anchor that moved occasionally.  These shifts in the datum were estimated by an offset ('downstream offset') which should be added to the barometrically-corrected water depth to provide a consistent datum through time.  Often, precise measurements of when and where the anchor moved were not available, and so the offsets are a best guess based on water depths at times of low and zero flow in addition to comparison with available measurements.  At the upstream location, sensors were deployed in a wilderness-type stilling tube.  The upstream sensor did not move in time and had the same instrument throughout the period of record.  No quality staff plate or datum exists for this location, so the barocorrected instrument-recorded stage was considered the stage of record.  The channel cross-section is not believed to have changed during the period of record.   Rating curves were developed separately for the upstream and downstream gauges, based on manual discharge measurements taken by an acoustic-doppler-sonar set-up on a small boat or by wading with a USGS AA or pygmy meter upstream of the twin bridges (see site photos), following the methods of Le Coz et al. 2014.  Manual measurements are in the file Lyell_Twin_Bridges_manual_measurements.csv. In calculating the downstream rating curve, three anomalous values in water year 2005 were excluded.  These were changed to NaN in the column labeled "discharge_used" in the manual measurements.  The downstream stage datum in 2008 seemed different from the other years, and so water year 2008 measurements were also excluded in the final rating curve calculation. (Sensitivity tests to including 2008 measurements were performed, and while these measurements made the error statistics higher because they did not match well, they did not substantially change the shape and fit of the rating curve.) The rating curve equations used were the following two piecewise functions:
for H < 0.54m, Q = 11.5733*(adjusted_stage-0.187.)^1.512
for 0.54m < H < 0.80m, Q = 35.6095*(H-0.343)^1.66
for 0.80m < H, Q = 30.94*(H-0.3023)^1.67
for upstream 
and 
for H < 1.08m, Q = 9.3003*(adjusted_stage-0.282)^1.526
for 1.08 < H < 2.425m, Q = 25.193*(H-0.6297)^1.685
for 2.425m < H < 2.5m (above which is assumed ice jam), Q = 103.003*(H-1.65)^1.67
for downstream, each with stage in m of water and Q in cubic meters per second.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  The best guess discharge series combines the discharge calculated from the upstream and downstream gauges to provide one continuous estimate through time. Note that is has different units (cfs) from the original series (cms).  All water temperature measurements are raw data and were not verified.  The upstream and downstream temperature data exhibit different variability, with greater diurnal fluctuations at the downstream location.  The downstream location reaches 0 deg C each winter (freezing), while the upstream location does not. The recorded downstream temperature was on average 0.4 degrees C higher than the upstream temperature, with a root mean squared difference of 1.65 degrees C.

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.86948 N, 119.33110 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date - time stamp in UTC, in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
upstream_raw_pressure - raw data from the Levelogger (cm of water) 
upstream_barocorrected_pressure - raw data minus atmospheric pressure (cm of water) 
upstream_estimated_dischargecms - calculated with piecewise function (cubic-meters-per-second, cms) 
upstream_lower_confidence_discharge_cms_bestestimate - Lower bound of 95% confidence interval (cubic-meters-per-second, cms)
upstream_upper_confidence_discharge_cms_bestestimate - Upper bound of 95% confidence interval (cubic-meters-per-second, cms)
upstream_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
upstream_instrument_ID - a number that changes each time the instrument changed 
downstream_raw_pressure - raw data from the Levelogger (cm of water) 
downstream_barocorrected_pressure - raw data minus atmospheric pressure (cm of water)
downstream_estimated_dischargecm - calculated with piecewise function(cubic meters per second, cms) 
downstream_lower_confidence_discharge_cms_bestestimate - Lower bound of 95% confidence interval (cubic-meters-per-second, cms)
downstream_upper_confidence_discharge_cms_bestestimate - Upper bound of 95% confidence interval (cubic-meters-per-second, cms)
downstream_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
downstream_instrument_ID - a number that changes each time the instrument changed  
downstream_offset - number to add to stage to account for shifts in instrument location and datum (cm) 
discharge_bestguess - combined from upstream and downstream to give one continuous estimate of the creek's discharge, used upstream when available and then downstream, during times with apparent ice jams, values were changed to NaN (cubic-feet-per-second, cfs), Note that this series has different units and relied on the least squares fit rating curve instead of on the Bayesian rating curve (which led to very slight differences from the individual series)
discharge_source - origin of the estimate for the best guess discharge: (1=upstream;2=downstream)
NaN = no data