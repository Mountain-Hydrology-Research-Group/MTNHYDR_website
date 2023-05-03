##Metadata for Budd_Ck_timeseries_stage_Q_T_2002_2015.txt
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 8/31/2016
##Title:  Budd Creek at Highway 120 stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celsius), from instruments located both upstream and downstream of a culvert, where Budd Creek, a tributary of the Tuolumne River, passes under Highway 120 in Yosemite National Park, for water years 2002 to 2015.  These measurements were taken by Solinst Leveloggers of various models (see metadata associated with instrument IDs). 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  'Raw pressure' is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed 'barocorrected pressure'. At the downstream location, sensors were deployed in a small, concrete anchor that moved occasionally.  These shifts in the datum were estimated by an offset ('downstream offset') which should be added to the barometrically-corrected water depth to provide a consistent datum through time.  Often, precise measurements of when and where the anchor moved were not available, and so the offsets are a best guess based on water depths at times of low and zero flow in addition to comparison with available measurements.  At the upstream location, sensors were deployed in a wilderness-type stilling tube, slightly upstream from a staff gauge, which was adjacent to the culvert.  The upstream sensor did not move in time, but the upstream location was subject to backwater effects from the culvert.  The staff gauge next to the culvert routinely recorded higher water levels than the pressure sensor located slightly further upstream (see site photos).  Comparing manual stage measurements with those of the corrected instrument, the root-mean-squared difference was 7.6 cm for the downstream location and 4.1 cm for the upstream location, where the largest sources of error are assumed to be the uncertainty in the datum downstream and the backwater effects upstream.  The channel cross-section is not believed to have changed during the period of record, although the sand bars downstream of the culvert may have shifted slightly.   Rating curves were developed separately for the upstream and downstream gauges, based on manual discharge measurements taken by wading with a USGS AA or pygmy meter downstream of the culvert (see site photos), following the methods of Rantz et al. 1982 (available at: http://pubs.usgs.gov/wsp/wsp2175/).  Manual measurements are in the file Budd_manual_measurements.txt.  The rating curve equations used were Q=0.1392*(upstream_barocorrected_pressure+upstream_offset-8)^1.4840 for upstream and Q=0.0246*(downstream_barocorrected_pressure+downstream_offset-10)^1.7963 for downstream, each with stage in cm of water and Q in cubic feet per second. [We apologize for the horrible mix of metric and English units there.]  Average discharge errors (calculated vs. manually observed) were 29% for downstream and 33% for upstream estimates.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  The best guess discharge series combines the discharge calculated from the upstream and downstream gauges to provide one continuous estimate through time.  In winter, ice jams frequently occur in the meadow, with the greatest impact on the downstream stage.  Times identified as ice jams were changed to NaN values in the combined 'best guess' discharge time series only.
All water temperature measurements are raw data and were not verified.  The upstream and downstream temperature data at times with greater than 0 discharge compare well, with the recorded downstream temperature 0.06 degrees C higher than the upstream temperature on average, with a root mean squared difference of 0.38 degrees C.

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.89489 N, 119.67380 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date - time stamp in UTC, in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
upstream_raw_pressure - raw data from the Levelogger (cm of water) 
upstream_barocorrected_pressure - raw data minus atmospheric pressure (cm of water) 
upstream_offset - add this to upstream_barocorrected_pressure to get stage (cm of water)
upstream_estimated_discharge - calculated with Q=0.1392*(upstream_barocorrected_pressure+upstream_offset-8)^1.4840 (cubic feet per second, cfs) 
upstream_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
upstream_instrument_ID - a number that changes each time the instrument changed 
downstream_raw_pressure - raw data from the Levelogger (cm of water) 
downstream_barocorrected_pressure - raw data minus atmospheric pressure (cm of water)
downstream_estimated_discharge - calculated with Q=0.0246*(downstream_barocorrected_pressure+downstream_offset-10)^1.7963 (cubic-feet-per-second, cfs) 
downstream_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
downstream_instrument_ID - a number that changes each time the instrument changed  
downstream_offset - add this to downstram_barocorrected_pressure to get stage and account for shifts in instrument location and datum (cm) 
discharge_bestguess - combined from upstream and downstream to give one continuous estimate of the creek's discharge, used upstream when available and then downstream, during times with apparent ice jams, values were changed to NaN (cubic-feet-per-second, cfs),
discharge_source - origin of the estimate for the best guess discharge: (1=upstream;2=downstream; 0=editedout)
NaN = no data