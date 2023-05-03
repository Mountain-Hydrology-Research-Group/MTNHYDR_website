##Metadata for Maclure_timeseries_stage_Q_T_2013_2015.csv
##Contact: Jessica D. Lundquist (jdlund@uw.edu), University of Washington
##Updated: 7/29/2015
##Title:  Maclure Creek stage, water temperature, and discharge
##PI:  Jessica D. Lundquist (jdlund@uw.edu), University of Washington 
##Funding:  National Science Foundation, CBET-0729830, and NASA Grant-NNX15AB29G

Summary: 
Ten-minute recordings of vented water pressure (in ft of water, with atmospheric pressure removed), estimated discharge (in cubic-feet-per-second), and water temperature (in degrees Celcius), from a vented pressure transducer in Maclure Creek, in Yosemite National Park, for water years 2013 to 2015.  Data from 20 April 2014 to 13 August 2014 are missing.  

Accuracy & Quality Control:
This file includes raw stage and temperature data and estimated dischargedata.   From 20 April to 13 August 2014, stage data were not available.  Manual observations of stage and discharge, as well as instrument-recorded stage data at the same times, are in the file Maclure_manual_measurements.csv. 

The channel cross-section is not believed to have changed during the period of record. Rating curves were developed based on manual discharge measurements taken by wading with a USGS pygmy meter , following the methods of Rantz et al. 1982 (available at: http://pubs.usgs.gov/wsp/wsp2175/).  Manual measurements are in the file Maclure_manual_measurements.csv.  

  The rating curve equation used was Q=18.7194.*(stage_in_feet-8.9).^(3.3267), with stage in ft of water (referenced to 10 minus tapedown from the bolt) and Q in cubic feet per second.   RMSE discharge errors (calculated vs. manually observed) were 1.3 cfs and 14% of observed.  The greatest uncertainties occur at very high flows (due to the small number of manual measurements in that range) and at very low flows (due to uncertainty in the gauge datum and the exact water depth above the sensor when discharge stops).  Because of the absolute limitation on high flows, we estimate discharge values above 16 cfs may be in error by as much as a factor of 2.   In winter, high stage values are likely caused by ice jams.  

All water temperature measurements are raw data.  These were compared with manual measurements of water temperature and generally matched well.

Location:
Tuolumne River Watershed, Yosemite National Park
Approximate Coordinates:  37.7722 N, 119.2644 W (datum: WGS84)
near Lee Vining, California, USA (Tuolumne County)
Elevation: 3050 m


Data Citation:
Lundquist, J.D., J. Roche, C. E. Moore, B. Huggett, H. Forrester, D. R. Cayan, and M. D. Dettinger, (2015, in preparation for WRR), Upper Tuolumne River Watershed Stream Observations

Variables and Units:
date_time - time stamp in UTC, in format "yyyy/mm/dd HH:MM:SS", midnight = 00:00:00 
instrument_recorded_stage - raw data from the vented transducer or estimated data, see flag (ft of water) 
estimated_discharge - calculated with Q=18.7194.*(stage_in_feet-8.9).^(3.3267) (cubic feet per second, cfs)
water_temperature - raw stream temperature recorded by the transducer(degrees Celcius) 

NaN = no data

