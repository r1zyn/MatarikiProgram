export const TIME: string = "06:00";

export const GEOPHYSICAL_DATA: string = `
*******************************************************************************
 Revised: July 31, 2013             Moon / (Earth)                          301
 
 GEOPHYSICAL DATA (updated 2018-Aug-15):
  Vol. mean radius, km  = 1737.53+-0.03    Mass, x10^22 kg       =    7.349
  Radius (gravity), km  = 1738.0           Surface emissivity    =    0.92
  Radius (IAU), km      = 1737.4           GM, km^3/s^2          = 4902.800066
  Density, g/cm^3       =    3.3437        GM 1-sigma, km^3/s^2  =  +-0.0001  
  V(1,0)                =   +0.21          Surface accel., m/s^2 =    1.62
  Earth/Moon mass ratio = 81.3005690769    Farside crust. thick. = ~80 - 90 km
  Mean crustal density  = 2.97+-.07 g/cm^3 Nearside crust. thick.= 58+-8 km 
  Heat flow, Apollo 15  = 3.1+-.6 mW/m^2   Mean angular diameter = 31'05.2"
  Heat flow, Apollo 17  = 2.2+-.5 mW/m^2   Sid. rot. rate, rad/s = 0.0000026617
  Geometric Albedo      = 0.12             Mean solar day        = 29.5306 d
  Obliquity to orbit    = 6.67 deg         Orbit period          = 27.321582 d
  Semi-major axis, a    = 384400 km        Eccentricity          = 0.05490
  Mean motion, rad/s    = 2.6616995x10^-6  Inclination           = 5.145 deg
  Apsidal period        = 3231.50 d        Nodal period          = 6798.38 d
                                 Perihelion  Aphelion    Mean
  Solar Constant (W/m^2)         1414+-7     1323+-7     1368+-7
  Maximum Planetary IR (W/m^2)   1314        1226        1268
  Minimum Planetary IR (W/m^2)      5.2         5.2         5.2
********************************************************************************


*******************************************************************************
Ephemeris / API_USER Wed Jul 20 01:28:40 2022 Pasadena, USA      / Horizons    
*******************************************************************************
Target body name: Moon (301)                      {source: DE441}
Center body name: Earth (399)                     {source: DE441}
Center-site name: GEOCENTRIC
*******************************************************************************
Start time      : A.D. 2022-Jun-19 00:00:00.0000 UT+12:00
Stop  time      : A.D. 2022-Jul-31 23:59:59.0000 UT+12:00
Step-size       : 1440 minutes
*******************************************************************************
Target pole/equ : MOON_ME                         {East-longitude positive}
Target radii    : 1737.4 x 1737.4 x 1737.4 km     {Equator, meridian, pole}    
Center geodetic : 0.00000000,0.00000000,0.0000000 {E-lon(deg),Lat(deg),Alt(km)}
Center cylindric: 0.00000000,0.00000000,0.0000000 {E-lon(deg),Dxy(km),Dz(km)}
Center pole/equ : ITRF93                          {East-longitude positive}
Center radii    : 6378.1 x 6378.1 x 6356.8 km     {Equator, meridian, pole}    
Target primary  : Earth
Vis. interferer : MOON (R_eq= 1737.400) km        {source: DE441}
Rel. light bend : Sun, EARTH                      {source: DE441}
Rel. lght bnd GM: 1.3271E+11, 3.9860E+05 km^3/s^2                              
Atmos refraction: NO (AIRLESS)
RA format       : HMS
Time format     : CAL 
Time zone       : UT+12:00
EOP file        : eop.220718.p221011                                           
EOP coverage    : DATA-BASED 1962-JAN-20 TO 2022-JUL-18. PREDICTS-> 2022-OCT-10
Units conversion: 1 au= 149597870.700 km, c= 299792.458 km/s, 1 day= 86400.0 s 
Table cut-offs 1: Elevation (-90.0deg=NO ),Airmass (>38.000=NO), Daylight (NO )
Table cut-offs 2: Solar elongation (  0.0,180.0=NO ),Local Hour Angle( 0.0=NO )
Table cut-offs 3: RA/DEC angular rate (     0.0=NO )                           
*******************************************************************************
 Date_(ZONE)_HR:MN        S-T-O
*******************************
$$SOE
`;

export const COLUMN_INFO: string = `
$$EOE
*******************************************************************************
Column meaning:
 
TIME

  Times PRIOR to 1962 are UT1, a mean-solar time closely related to the
prior but now-deprecated GMT. Times AFTER 1962 are in UTC, the current
civil or "wall-clock" time-scale. UTC is kept within 0.9 seconds of UT1
using integer leap-seconds for 1972 and later years.

  Conversion from the internal Barycentric Dynamical Time (TDB) of solar
system dynamics to the non-uniform civil UT time-scale requested for output
has not been determined for UTC times after the next July or January 1st.
Therefore, the last known leap-second is used as a constant over future
intervals.

  Time tags refer to the UT time-scale conversion from TDB on Earth
regardless of observer location within the solar system, although clock
rates may differ due to the local gravity field and no analog to "UT"
may be defined for that location.

  Any 'b' symbol in the 1st-column denotes a B.C. date. First-column blank
(" ") denotes an A.D. date. Calendar dates prior to 1582-Oct-15 are in the
Julian calendar system. Later calendar dates are in the Gregorian system.

  NOTE: A time-zone correction has been requested. See header.

  NOTE: "n.a." in output means quantity "not available" at the print-time.
 
 'S-T-O' =
   The Sun-Target-Observer angle; the interior vertex angle at target center
formed by a vector from the target to the apparent center of the Sun (at
reflection time on the target) and the apparent vector from target to the
observer at print-time. Slightly different from true PHASE ANGLE (requestable
separately) at the few arcsecond level in that it includes stellar aberration
on the down-leg from target to observer.  Units: DEGREES

Computations by ...

    Solar System Dynamics Group, Horizons On-Line Ephemeris System
    4800 Oak Grove Drive, Jet Propulsion Laboratory
    Pasadena, CA  91109   USA

    General site: https://ssd.jpl.nasa.gov/
    Mailing list: https://ssd.jpl.nasa.gov/email_list.html
    System news : https://ssd.jpl.nasa.gov/horizons/news.html
    User Guide  : https://ssd.jpl.nasa.gov/horizons/manual.html
    Connect     : browser        https://ssd.jpl.nasa.gov/horizons/app.html#/x
                  API            https://ssd-api.jpl.nasa.gov/doc/horizons.html
                  command-line   telnet ssd.jpl.nasa.gov 6775
                  e-mail/batch   https://ssd.jpl.nasa.gov/ftp/ssd/hrzn_batch.txt
                  scripts        https://ssd.jpl.nasa.gov/ftp/ssd/SCRIPTS
    Author      : Jon.D.Giorgini@jpl.nasa.gov

*******************************************************************************
`;