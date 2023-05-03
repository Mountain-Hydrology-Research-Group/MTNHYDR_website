##Metadata for Tuolumne120_timeseries_stage_Q_T_2002_2015.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 11/16/2015
##Title:  Tuolumne River where it passes under Highway 120 stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celsius), from Tuolumne River where it passes under Highway 120 in Tuolumne Meadows, Yosemite National Park, for water years 2002 to 2015.  These measurements were taken by Solinst Leveloggers of various models and by a Seabird STD (see metadata associated with instrument IDs). 

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  'Raw pressure' is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns termed 'barocorrected pressure'. The instrument was placed in a stilling tube, but there are offsets when one instrument was removed and another was placed in the tube (due both to instrument calibration and to sediment filling the lower end of the tube.  These shifts in the datum were estimated by an offset ('offset') which should be added to the barometrically-corrected water depth to provide a consistent datum through time.  The 'stage' column is referenced to the staff plate and equals 'barocorrected pressure' plus 'offset'. The channel cross-section is not believed to have changed during the period of record.   A rating curve was developed based on manual discharge measurements taken by wading with a USGS AA or pygmy meter (see site photos), following the methods of Rantz et al. 1982 and Le Coz et al. 2014.  Manual measurements are in the file Tuolumne_120_manual_measurements.csv.  The rating curve equation used was the following piecewise function:
for H < 0.76m, Q = 34.099*(H-0.7460)^1.468
for 0.76m < H < 2.5m, Q = 18.007*(H-0.7169)^1.713
for H > 2.5 m, Q = 409.312*(H-2.22812)^1.63361
, with H is stage in m of water and Q in cubic meters per second.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).   All water temperature measurements are raw data and were not verified.  Rating curve values above a stage 2.5m are often ice jams, and these were edited out in the file with combined streamflow from all 6 sites but not in the raw data files. 

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.87629 N, 119.35475 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date_time - time stamp in UTC, in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
raw_pressure - raw data from the Levelogger (cm of water) 
barocorrected_pressure - raw data minus atmospheric pressure (cm of water) 
offset - number to add to stage to account for shifts in instrument location and datum (cm)
stage - barocorrected_pressure + offset (cm), referenced to staff plate
estimated_discharge - calculated with piecewise function (cubic-meters-per-second, cms) 
lower_confidence_discharge_cms_bestestimate - calculated lower bound of the 95% confidence interval (cubic-meters-per-second, cms)
upper_confidence_discharge_cms_bestestimate - calculated upper bound of the 95% confidence interval (cubic-meters-per-second, cms)
instrument_ID - a number that changes each time the instrument was downloaded or changed 
water_temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
NaN = no data

Serial Numbers associated with instrument IDs:
1 Seabird instrument (no serial number available)
2 Solinst serial number 08457 (issues with instrument)
3 Solinst serial number 41950
4 Solinst serial number 47408
5 Solinst serial number 52341
6 Solinst serial number 72887
7 Solinst serial number 48784
8 Solinst serial number 17925 (originated in different units, had to be multiplied by 10)
9 Solinst serial number 1017951
10 Solinst serial number 72838
11 Solinst serial number 70663
12 Solinst serial number 72838
13 Solinst serial number 62236