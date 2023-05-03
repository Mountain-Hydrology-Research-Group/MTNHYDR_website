##Metadata for Lyell_blw_Maclure_timeseries_stage_Q_T_2005_2015.txt
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 7/22/2016
##Title:  Lyell Fork of Tuolumne River below confluence with Maclure Creek stage, temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly recordings of raw pressure (in cm of water), water pressure (in cm of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celcius), from instruments located downstream of the footbridge crossing the Lyell Fork of the Tuolumne River, downstream of the confluence with Maclure Creek, in Yosemite National Park, for water years 2005 to 2012.  These measurements were taken by Solinst Leveloggers of various models (see metadata associated with instrument IDs). Water year 2008 is missing due to a failed instrument.

Accuracy & Quality Control:
This file includes raw, corrected, and estimated data.  "Raw pressure" is a temporally-continuous record made up of a number of different loggers deployed through time (generally changed once per summer). Because the loggers record the pressure of both the overlying water and the atmosphere, the records were first corrected by subtracting off barometric pressure observed in the area (Tuolumne_baro_2002_2015.txt), columns labeled "barocorrected pressure".   Shifts in the datum when instruments were changed were estimated by an offset ("offset") which should be added to the barometrically-corrected water depth to provide a consistent datum through time.  The solinst stage with offsets was used as the basis for the rating curve equation and is also included in the file.  

Starting late in water year 2012, a vented pressure transducer was also installed at the site.  This record is maintained by the National Park Service in the Aquarius Database.

The channel cross-section is not believed to have changed during the period of record. Rating curves were developed based on manual discharge measurements taken by wading with a USGS pygmy meter across two river sections upstream of the bridge (see site photos), following the methods of Le Coz et al. 2014. The highest flow measurements were obtained using dye dilution methods downstream of the bridge. Manual measurements are in the file Lyell_blw_Maclure_manual_measurements.txt.  

The rating curve equation used is Q = 9.884*(stage-1.97338)^1.715, with stage in m of water (referenced to 10 minus tapedown from the bolt) and Q in cubic meters per second.   Discharge errors (calculated vs. manually observed) were 0.017 cms and 1.9% of observed.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  In winter, high stage values are likely caused by ice jams.  Times identified as definitely ice jams were changed to NaN values in the discharge time series only, although some other periods remain that likely are associated with ice jams.

All water temperature measurements are raw data.  These were compared with manual measurements of water temperature and generally matched well.

Notes on the datum and manual measurements:
This section can be ignored by most users but is included in case anyone is referencing original field notes and wonders what the recorded manual datum numbers mean at different times.
Starting in water year 2005, sensors were deployed in a wilderness-type stilling tube, which had a total tube height of 81.3 cm.  There were three different reference datums through the observational period:  In 2003-2005, tapedowns were taken from the bridge and measured in feet.  In September 2006, a staff plate (really, a T-post with decimal feet markings on it, with the base marking starting at 5 feet) was installed.  Starting in 2008, people recorded the distance from the top of the stilling tube to the water's surface in cm.  Starting in 2012, people began reporting gage height as 10 ft minus the tapedown from the top of the T-post. This value is 0.15 ft less than that reported from the staff plate T-post before the markings on it wore off.  In 2015, the T-post was removed and replaced with a bolt in a rock, which was surveyed in at 0.69 ft higher than the top of the T-post.   Our corrected pressure, with associated offsets, is referenced to the 10 minus tape down from the 2015 bolt (most recent operational practice), in units of ft.  All of the observations in the file Lyell_blw_Maclure_manual_measurements.csv have also been converted to this bolt reference from the original measurement.  The various datums relate to each other in the following way:  solinst_reference is the baro-corrected solinst plus offset number used for stage in the discharge equation. This should match the recent gage heights of 10 - tapedown.  This can be converted to the equivalent of the T-post staff gage value by solinst_to_match_manual_gage = 3.281*(solinst_reference)/100 - 0.15 ft.  The bridge tapedown can be converted to the T-post reference by the following equation:  bridge_to_match_manual_gage = 12.8(ft) - tapedown_bridge(ft).  The top of tube tapedowns can be converted to the T-post reference by converting them to ft and subtracting them from 9.2:  tapedown_tube_to_match_manual_gage(ft) = 9.22(ft) - tapedown_tube(cm)*3.281/100.  These can be further converted to the 10 minus tapedown from the bolt reference by subtracting 0.69 feet more.

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.77778 N, 119.26139 W (datum: NAD 83)
near Lee Vining, California, USA (Tuolumne County)
Elevation: 2947 m


Data Citation:
Lundquist, J. D., J. W. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. D. Dettinger (2016), Yosemite hydroclimate network: Distributed stream and atmospheric data for the Tuolumne River watershed and surroundings. Water Resour. Res., doi:10.1002/2016WR019261

Variables and Units:
date - time stamp in UTC, in format "yyyy/mm/dd HH:MM:SS", midnight = 00:00:00 
raw_pressure - raw data from the Levelogger (cm of water) 
barocorrected_pressure - raw data minus atmospheric pressure (cm of water)
stage_in_feet - barocorrected pressure plus offset to convert to datum of 10 ft minus tapedown from the bolt (ft of water) 
estimated_discharge - calculated with Q = 9.884*(stage-1.97338)^1.715 (cubic-meters-per-second, cms)
lower_confidence_discharge_cms_bestestimate - calculated lower bound of the 95% confidence interval (cubic-meters-per-second, cms)
upper_confidence_discharge_cms_bestestimate - calculated upper bound of the 95% confidence interval (cubic-meters-per-second, cms) 
water temperature - raw stream temperature recorded by the Levelogger (degrees Celsius) 
instrument_ID - a number that changes each time the instrument changed 
offset_cm - number to add to stage to account for shifts in instrument and datum, to correct barocorrected pressure to bolt reference (cm)
offset_ft - number to add to stage to account for shifts in instrument and datum, to correct barocorrected pressure to bolt reference (ft)
NaN = no data

Instrument IDs and Associated Serial Numbers:
1 - Solinst serial number 47389
2 - Solinst serial number 47406
3 - Solinst serial number 53667
4 - Solinst serial number 48900
5 - Solinst serial number 48521
6 - Solinst serial number 41921
7 - Solinst serial number 53624
8 - Solinst serial number 2004272
9 - Solinst serial number 2017487
10 - Solinst serial number 10554641