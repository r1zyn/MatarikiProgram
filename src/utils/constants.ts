/**
 * Time constant (determines what time of day to fetch S-T-O from)
 * @type {string}
 */
export const TIME: string = "06:00";

/**
 * Unecessary column information text from the API response result propety.
 * @type {string}
 */
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