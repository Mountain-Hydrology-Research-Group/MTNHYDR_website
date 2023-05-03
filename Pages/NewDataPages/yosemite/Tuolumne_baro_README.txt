##Metadata for Tuolumne_baro_2002_2014.txt
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 6/30/2015
##Title:  Tuolumne Meadows Barometric Pressure in cm of water above 2600 m elevation 
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Half-hourly or hourly (depending on instrument) recordings of pressure (in cm of water above 2600 m elevation) and of the logger’s temperature.  These measurements were taken by Solinst Barologgers of various models (see metadata associated with instrument IDs), at various locations near Tuolumne Meadows, with one period patched using NCEP-NCAR Reanalysis data. 

Accuracy & Quality Control:
This file includes data from multiple sources corrected for instrumental offsets and drift to provide a consistent long-term record of barometric pressure to use to correct instruments in streams.  Care was taken to provide a consistent offset, and offsets relative to the original data file are noted at each timestep. Note that whenever site ID B04 (the well) or BRe (reanalysis) is referenced, we first multiplied by 10.1971621298 to convert from kPa to cm of water, before applying the recorded offset. When using these files to correct pressure-based streamflow records, always use a measured depth value for the final offset because the record here is relative to the 2600 m elevation datum and is not absolute atmospheric pressure.  To convert to actual atmospheric pressure in Tuolumne Meadows in kPa, divide by 10.197 (to convert cm of water to kPa) and then add 68.156 kPa (what the Solinst software thought was the baseline pressure for the Tuolumne Meadows elevation), using the following equation:  
baro_kPa_actual = 68.156 + baro_cm_relative/10.197
When patching B05 and B06 (two more well records), the above equation was inverted to convert the well's measurement (in actual kPa) to the relative cm scale measurement.
To estimate atmospheric pressure at a different elevation, we recommend using the hypsometric equation:  p1 = p2*exp(0.0341*(z2-z1)/Tmean), where p2 is the pressure measured and p1 is the pressure desired (in the same units), z2 is the elevation of the measurement (2600 m in this case), z1 is the elevation where pressure is desired (in meters), and Tmean is the mean air temperature for the layer of atmosphere between those two elevations in Kelvin (if air temperature is available at both sites, simply take the mean; if not, assume a constant lapse rate of -6.5 C/km elevation gain for the Yosemite region to estimate the temperature at the other elevation; deg C can be converted to Kelvin by adding 273.16).  Note that the hypsometric equation was not used in processing this dataset; we only applied constant barometric offsets during periods of patching. This may be an issue if rapid temperature changes occurred during periods when patching from Glen Aulin (B03) to Tuolumne.
NCEP-NCAR Reanalysis pressure (Kalnay et al. 1996) was used for a brief period during summer 2005 when all in situ instruments broke.
All temperature measurements are raw data and were not verified.  These represent the temperature of the logger in its particular location and should not be assumed to represent ambient air temperature.  These loggers have some temperature dependencies, and so this data may be used for further corrections.  Note that the time-step varies through the dataset.

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  
B01 - Tuolumne Snow Shed - 37.87638 N, 119.34818 W, 2600 m elevation (datum: NAD 83)
B02 - Tuolumne Bug Camp Lab - 37.8780889 N, 119.3402 W, 2600 m elevation (datum: WGS 84), taken from Google Earth
B03 - Glen Aulin - 37.90991 N, 119.41959 W, 2400 m elevation (datum: NAD 83)
B04 - Well 35 - 37.5223537 N, -119.2301655 W, 2600 m elevation (datum: NAD 83)
B05 - Official Baro Well - 37.5 N, -119.2 W, 2600 m elevation (datum: NAD 83)
B06 - Well 01 - 37.52325193 N, -119.2323854 W, 2600 m elevation (datum: NAD 83)
BRe - Reanalysis Pressure - surface pressure field from the grid cell centered at 37.5 N, 120 W
near Lee Vining, California, USA (Tuolumne County)


Data Citation:
Lundquist, J. D., J. Roche, H. Forrester, C. Moore, E. Keenan, G. Perry, N. Cristea, B. Henn, K. Lapo, B. McGurk, D. R. Cayan, and M. Dettinger (2016), Yosemite Hydroclimate Network:  Distributed Stream and Atmospheric Data for the Tuolumne River Watershed and Surroundings, submitted to Water Resources Research

Variables and Units:
date_time - time stamp in UTC (local daylight time +7hrs), in format 'yyyy/mm/dd HH:MM:SS', midnight = 00:00:00 
barometric_pressure - corrected data to provide consistent timeseries (cm of water above 2600 m elevation) 
site_ID - location of instrument used for this timestep (see location data above for lat-lon) 
offset_applied - This number was added to the original record to provide the reported barometric pressure.  To recreate the original record, subtract this from the reported barometric pressure. (cm of water) 
temperature - raw temperature recorded by the Barologger (degrees Celcius) 
NaN = no data