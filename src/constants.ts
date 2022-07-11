export const EXCESSIVE_TEXT: string = 
`
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

  NOTE: "n.a." in output means quantity "not available" at the print-time.
 
 'R.A._____(ICRF)_____DEC' =
  Astrometric right ascension and declination of the target center with
respect to the observing site (coordinate origin) in the reference frame of
the planetary ephemeris (ICRF). Compensated for down-leg light-time delay
aberration.

  Units: RA  in hours-minutes-seconds of time,    HH MM SS.ff{ffff}
         DEC in degrees-minutes-seconds of arc,  sDD MN SC.f{ffff}
 
 'R.A.__(a-apparent)__DEC' =
  Airless apparent right ascension and declination of the target center with
respect to an instantaneous reference frame defined by the Earth equator of-dat
(z-axis) and meridian containing the Earth equinox of-date (x-axis, EOP-correct
IAU76/80). Compensated for down-leg light-time delay, gravitational deflection
of light, stellar aberration, precession & nutation. Note: equinox (RA origin)
is offset -53 mas from the of-date frame defined by the IAU06/00a P & N system.

  Units: RA  in hours-minutes-seconds of time,   HH MM SS.ff{ffff}
         DEC in degrees-minutes-seconds of arc, sDD MN SC.f{ffff}
 
 'dRA*cosD d(DEC)/dt' =
  The angular rate of change in aparent RA and DEC of the target. This is
with respect to the non-inertial IAU76/80 Earth true equator and equinox
of-date reference frame.  d(RA)/dt is multiplied by the cosine of declination
to provide a linear rate in the plane-of-sky. Units: ARCSECONDS PER HOUR
 
 'Azi____(a-app)___Elev' =
  Airless apparent azimuth and elevation of target center. Compensated
for light-time, the gravitational deflection of light, stellar aberration,
precession and nutation. Azimuth is measured clockwise from north:

  North(0) -> East(90) -> South(180) -> West(270) -> North (360)

Elevation angle is with respect to a plane perpendicular to the reference
surface local zenith direction. TOPOCENTRIC ONLY.  Units: DEGREES
 
 'dAZ*cosE d(ELV)/dt' =
   The rate of change of target center apparent azimuth and elevation
(airless). d(AZ)/dt is multiplied by the cosine of the elevation angle.
TOPOCENTRIC ONLY. Units: ARCSECOND PER MINUTE
 
 'X_(sat-primary)_Y SatPANG' =
   Satellite apparent differential coordinates in the plane-of-sky with
respect to the primary body along with the satellite position angle.
Differential coordinates are defined in RA as:

     X= ((RA_sat - RA_primary) * cosine(DEC_primary))

... and in DEC as:

     Y= (DEC_sat - DEC_primary)

Non-lunar satellites only. "SatPANG" is the counter-clockwise (CCW) position
angle from the reference-frame of-date north-pole to a line from the primary
center to the satellite center. Units: ARCSECONDS (X & Y), DEGREES (pos, angle)
 
 'L_Ap_Sid_Time' =
   Local Apparent Sidereal Time. The angle measured westward in the body
true-equator of-date plane from the meridian containing the body-fixed
observer to the meridian containing the true Earth equinox (defined by
intersection of the true Earth equator of date with the ecliptic of date).
TOPOCENTRIC ONLY. Units: HH MM SS.ffff (hours-minutes-seconds of time)
 
 'a-mass mag_ex' =
    RELATIVE optical airmass and visual magnitude extinction. Airmass is the
ratio between the absolute optical airmass for the targets' refracted CENTER
point to the absolute optical airmass at zenith. Also output is the estimated
visual magnitude extinction due to the atmosphere, as seen by the observer.
AVAILABLE ONLY FOR TOPOCENTRIC EARTH SITES WHEN THE TARGET IS ABOVE THE
HORIZON.  Units: none (airmass) and magnitudes (extinction).
 
 'APmag   S-brt' =
   Moon's approximate apparent visual magnitude and surface brightness. When
phase angle < 7 deg (within ~1 day of full Moon), computed magnitude tends to
be about 0.12 too small.

   For Earth-based observers, the estimated dimming due to atmospheric
absorption (extinction) is available as a separate, requestable quantity.

   Surface brightness is the average airless visual magnitude of a
square-arcsecond of the illuminated portion of the apparent disk.

   Units: MAGNITUDES & MAGNITUDES PER SQUARE ARCSECOND
 
 'Illu%' =
   Fraction of the target objects' assumed circular disk illuminated by Sun
(phase), as seen by the observer.  Units: PERCENT
 
 'Def_illu' =
   Defect of illumination. The maximum angular width of the target body's
assumed circular disk diameter NOT illuminated by the Sun. Units: ARCSECONDS
 
 'ang-sep/v' =
  The angular separation between the center of the target object and the center
of the (remote) primary body it revolves around, as seen by the observer, with
target visibility code. The observer cannot be on the primary body.

  Visibility codes (refers to limb-to-limb):

    /t = Transiting primary body disk    /O = Occulted by primary body disk
    /p = Partial umbral eclipse          /P = Occulted partial umbral eclipse
    /u = Total umbral eclipse            /U = Occulted total umbral eclipse
    /- = Target is the primary body      /* = None of above ("free and clear")

  The radius of both primary and target body is taken to be the equatorial
value (maximum, given a triaxial shape). Atmospheric effects and oblateness
aspect are NOT currently considered.  Light-time is considered.

  Units: ARCSECONDS and visibility code
 
 'Ang-diam' =
   The equatorial angular width of the target body full disk, if it were fully
illuminated and visible to the observer. If the target body diameter is unknown
"n.a." is output.

   Units: ARCSECONDS
 
 'ObsSub-LON ObsSub-LAT' =
   Apparent planetodetic longitude and latitude of the center of the target
disc seen by the OBSERVER at print-time.  This is NOT exactly the same as the
"nearest" sub-point for a non-spherical target shape (since the center of the
disc might not be the point closest to the observer), but is generally very
close if not a very irregular body shape.  Down-leg light travel-time from
target to observer is taken into account.  Latitude is the angle between the
equatorial plane and the line perpendicular to the reference ellipsoid of the
body, so includes body oblateness. The reference ellipsoid is an oblate
spheroid with a single flatness coefficient in which the y-axis body radius
is taken to be the same value as the x-axis radius.  Positive longitude is
to the EAST for this target. Cartographic system is given in the header.
   Units: DEGREES DEGREES
 
 'SunSub-LON SunSub-LAT' =
   Apparent sub-solar longitude and latitude of the Sun on the target. The
apparent planetodetic longitude and latitude of the center of the target disc
as seen from the Sun, as seen by the observer at print-time. This is NOT
exactly the same as the "sub-solar" (nearest) point for a non-spherical target
shape (since the center of the disc seen from the Sun might not be the closest
point to the Sun), but is very close if not a highly irregular body shape.
Light travel-time from Sun to target and from target to observer is taken into
account.  Latitude is the angle between the equatorial plane and the line
perpendicular to the reference ellipsoid of the body. The reference ellipsoid
is an oblate spheroid with a single flatness coefficient in which the y-axis
body radius is taken to be the same value as the x-axis radius.  Positive
longitude is to the EAST for this target. Cartographic system is given in the
header.  Units: DEGREES DEGREES
 
 'SN.ang   SN.dist' =
  Targets' apparent sub-solar point position angle (counter-clockwise with
respect to the direction of the true-of-date reference-frame north-pole) and
its angular distance from the sub-observer point (center of disk) at print
time. A negative distance indicates the sub-solar point is on the hidden
hemisphere.  Units: DEGREES and ARCSECONDS
 
 'NP.ang   NP.dist' =
  Targets' apparent north-pole position angle (counter-clockwise with respect
to the direction of the true-of-date reference-frame north-pole) and its
angular distance from the sub-observer point (center of disk) at observation
time.  A negative distance indicates the planets' north-pole is on the hidden
hemisphere.  Units: DEGREES and ARCSECONDS
 
 'hEcl-Lon hEcl-Lat' =
    Geometric heliocentric J2000 ecliptic longitude and latitude of target
center at the instant light leaves it to be observed at print time (print time
minus down-leg light-time).  Units: DEGREES
 
 'r        rdot' =
   The Sun's apparent range ("r", light-time aberrated) and range-rate ("rdot")
relative to the target center, as seen by the observer. A positive "rdot" means
the target center was moving away from the Sun, negative means moving toward
the Sun.  Units: AU and KM/S
 
 'delta      deldot' =
   Apparent range ("delta", light-time aberrated) and range-rate ("delta-dot")
of the target center relative to the observer. A positive "deldot" means the
target center is moving away from the observer, negative indicates movement
toward the observer.  Units: AU and KM/S
 
 '1-way_down_LT' =
   1-way down-leg light-time from target center to observer. The elapsed time
since light (observed at print-time) would have left or reflected off a point
at the center of the target. Units: MINUTES
 
 'VmagSn      VmagOb' =
   Magnitude of target centers' velocity with respect to the Sun ("VmagSn")
and the observer ("VmagOb") at the time light left the target center to be
observed (print time minus down-leg light-time). These are absolute values
of the velocity vectors (total speeds) and do NOT indicate direction of motion.
Units: KM/S
 
 'S-O-T /r' =
   Sun-Observer-Target apparent SOLAR ELONGATION ANGLE seen from the observers'
location at print-time.

   The '/r' column provides a code indicating the targets' apparent position
relative to the Sun in the observers' sky, as described below:

   Case A: For an observing location on the surface of a rotating body, that
body rotational sense is considered:

    /T indicates target TRAILS Sun   (evening sky: rises and sets AFTER Sun)
    /L indicates target LEADS Sun    (morning sky: rises and sets BEFORE Sun)

   Case B: For an observing point that does not have a rotational model (such
as a spacecraft), the "leading" and "trailing" condition is defined by the
observers' heliocentric ORBITAL motion:

    * If continuing in the observers' current direction of heliocentric
       motion would encounter the targets' apparent longitude first, followed
       by the Sun's, the target LEADS the Sun as seen by the observer.

    * If the Sun's apparent longitude would be encountered first, followed
       by the targets', the target TRAILS the Sun.

   Two other codes can be output:
    /* indicates observer is Sun-centered    (undefined)
    /? Target is aligned with Sun center     (no lead or trail)

   The S-O-T solar elongation angle is numerically the minimum separation
angle of the Sun and target in the sky in any direction. It does NOT indicate
the amount of separation in the leading or trailing directions, which would
be defined along the equator of a spherical coordinate system.

   Units: DEGREES
 
 'S-T-O' =
   The Sun-Target-Observer angle; the interior vertex angle at target center
formed by a vector from the target to the apparent center of the Sun (at
reflection time on the target) and the apparent vector from target to the
observer at print-time. Slightly different from true PHASE ANGLE (requestable
separately) at the few arcsecond level in that it includes stellar aberration
on the down-leg from target to observer.  Units: DEGREES
 
 'T-O-M/MN_Illu%' =
   Target-Observer-Moon LUNAR ELONGATION angle and illuminated percentage.
The apparent lunar elongation angle between target body center and Moon
center, seen from the observing site, along with fraction of the lunar disk
illuminated by the Sun. A negative lunar elongation angle indicates the target
center is behind the Moon.  Units: DEGREES & PERCENT
 
 'O-P-T' =
   Observer-Primary-Target angle; apparent angle between a target satellite,
its primarys' center and an observer at print time. Interior vertex angle at
the primary.  Units: DEGREES
 
 'PsAng   PsAMV' =
   The position angles of the extended Sun-to-target radius vector ("PsAng")
and the negative of the targets' heliocentric velocity vector ("PsAMV"), as
seen in the observers' plane-of-sky, measured counter-clockwise (east) from
reference-frame north-pole. Primarily intended for ACTIVE COMETS, "PsAng"
is an indicator of the comets' gas-tail orientation in the sky (being in the
anti-sunward direction) while "PsAMV" is an indicator of dust-tail orientation.
Units: DEGREES
 
 'PlAng' =
   Angle between observer and target orbital plane, measured from center
of target at the moment light seen at observation time leaves the target.
Positive values indicate observer is above the objects' orbital plane, in
the direction of reference-frame +z axis.  Units: DEGREES
 
 'Cnst' =
   Constellation ID; the 3-letter abbreviation for the name of the
constellation containing the target centers' astrometric position,
as defined by IAU (1930) boundary delineation.  See documentation
for list of abbreviations.
 
 'TDB-UT' =
   Difference between the uniform Barycentric Dynamical time-scale and the
Earth-rotation dependent Universal Time. Prior to 1962, the difference is with
respect to UT1 (TDB-UT1) and the 0.002 second maximum amplitude distinction
between TT and TDB is not maintained. For 1962 and later, the difference is
with respect to UTC (TDB-UTC) and periodic terms less than 1.e-6 second are
ignored. Values beyond the next July or January 1st may change if a leap-second
is later required by the IERS. Values from the present date forward through
the next ~78 days are predictions. Beyond that prediction interval, the last
prediction is taken as a constant for all future dates. Units: SECONDS
 
 'ObsEcLon    ObsEcLat' =
   Observer-centered IAU76/80 ecliptic-of-date longitude and latitude of the
target centers' apparent position, with light-time, gravitational deflection of
light, and stellar aberrations.  Units: DEGREES
 
 'N.Pole-RA  N.Pole-DC' =
    ICRF right ascension and declination of the target body's north-pole
direction at the time light left the body to be observed at print time.
Target pole/rotation model is given in the header. Units: DEGREES
 
 'GlxLon     GlxLat' =
   Observer-centered Galactic System II (post WW II) longitude and latitude
of the target centers' apparent position, with light-time, gravitational
deflection of light, and stellar aberrations. Units: DEGREES
 
 'L_Ap_SOL_Time' =
   Local Apparent SOLAR Time for observing site. This is the time indicated by
a sundial.  TOPOCENTRIC ONLY.  Units: HH MM SS.ffff (sexagesimal angular hours)
 
 '399_ins_LT' =
   Instantaneous light-time of the station with respect to Earth center at
print-time. The geometric (or "true") separation of site and Earth center,
divided by the speed of light.  Units: MINUTES
 
 'RA_3sigma DEC_3sigma' =
  Uncertainty in Right-Ascension and Declination. Output values are the formal
+/- 3 standard-deviations (sigmas) around nominal position. Units: ARCSECONDS
 
 'SMAA_3sig SMIA_3sig    Theta Area_3sig' =
  Plane-of-sky (POS) error ellipse data. These quantities summarize the
targets' 3-dimensional 3-standard-deviation formal uncertainty volume projected
into a reference plane perpendicular to the observers' line-of-sight.

   SMAA_3sig = Angular width of the 3-sigma error ellipse semi-major
                axis in POS. Units: ARCSECONDS.

   SMIA_3sig = Angular width of the 3-sigma error ellipse semi-minor
                axis in POS. Units: ARCSECONDS.

   Theta     = Orientation angle of the error ellipse in POS; the
                clockwise angle from the direction of increasing RA to
                the semi-major axis of the error ellipse, in the
                direction of increasing DEC.  Units: DEGREES.

   Area_3sig = Area of sky enclosed by the 3-sigma error ellipse.
                Units: ARCSECONDS ^ 2.
 
 'POS_3sigma' =
  The Root-Sum-of-Squares (RSS) of the 3-standard deviation plane-of-sky error
ellipse major and minor axes.  This single pointing uncertainty number gives an
angular distance (a circular radius) from the targets' nominal position in the
sky that encompasses the error-ellipse. Units: ARCSECONDS.
 
 'RNG_3sigma RNGRT_3sig' =
  Range and range rate (radial velocity) formal 3-standard-deviation
uncertainties.  Units: KM, KM/S
 
 'DOP_S_3sig  DOP_X_3sig  RT_delay_3sig' =
  Doppler radar uncertainties at S-band (2380 MHz) and X-band (8560 MHz)
frequencies, along with the round-trip (total) delay to first-order.
Units: HERTZ and SECONDS
 
 'Tru_Anom' =
   Apparent true anomaly angle of the targets' heliocentric orbit position;
the angle in the targets' instantaneous orbit plane from the orbital periapse
direction to the target, measured positively in the direction of motion.
The position of the target is taken to be at the moment light seen by the
observer at print-time would have left the center of the object. That is,
the heliocentric position of the target used to compute the true anomaly is
one down-leg light-time prior to the print-time. Units: DEGREES
 
 'L_Ap_Hour_Ang' =
   Local apparent HOUR ANGLE of target at observing site. The angle between the
observers' meridian plane, containing Earth's axis of-date and local zenith
direction, and a great circle passing through Earth's axis-of-date and the
targets' direction, measured westward from the zenith meridian to target
meridian along the equator. Negative values are angular times UNTIL transit.
Positive values are angular times SINCE transit. Exactly 24_hrs/360_degrees.
EARTH TOPOCENTRIC ONLY.  Units: sHH MM SS.fff (sexagesimal angular hours)
 
 'phi  PAB-LON  PAB-LAT' =
   "phi" is the true PHASE ANGLE at the observers' location at print time.
"PAB-LON" and "PAB-LAT" are the J2000 ecliptic longitude and latitude of the
phase angle bisector direction; the outward directed angle bisecting the arc
created by the apparent vector from Sun to target center and the astrometric
vector from observer to target center. For an otherwise uniform ellipsoid, the
time when its long-axis is perpendicular to the PAB direction approximately
corresponds to lightcurve maximum (or maximum brightness) of the body. PAB is
discussed in Harris et al., Icarus 57, 251-258 (1984).

   Units: DEGREES, DEGREES, DEGREES
 
 'App_Lon_Sun' =
  The apparent target-centered longitude of the Sun ("apparent L_s") as seen at
the target when the light recorded by the observer at print-time reflected off
the target. It is referred to a coordinate system where the x-axis is the
equinox direction defined by the targets' instantaneous IAU2009 pole direction
and heliocentric orbit plane at reflection time, and is measured positively in
an eastward direction (counter-clockwise around the positive pole of the solar
system angular momentum vector). If the target has no associated spin-pole
model (common for asteroids and comets), "n.a." will be output. Units: DEGREES
 
 'RA_(ICRF-a-apparnt)_DEC' =
   Airless apparent right ascension and declination coordinates of the
target in the ICRF reference frame, with down-leg light-time, gravitational
deflection of light, and stellar aberration.

   Units:
          RA : HH MM SS.ff{ffff} (hours-minutes-seconds of time)
          DEC: DG MN SC.f{ffff}  (degrees-minutes-seconds of arc)
 
 'I_dRA*cosD I_d(DEC)/dt' =
  The angular rate of change in the targets' ICRF inertial reference-frame
apparent RA and DEC, with light-time, gravitational light deflection, and
stellar aberrations. d(RA)/dt is multiplied by the cosine of declination to
provide a linear rate in the plane-of-sky. Units: ARCSECONDS PER HOUR
 
 'Sky_motion  Sky_mot_PA  RelVel-ANG' =
  Total apparent angular rate of the target in the plane-of-sky. "Sky_mot_PA"
is the position angle of the target's direction of motion in the plane-of-sky,
measured counter-clockwise from the apparent of-date north pole direction.
"RelVel-ANG" is the flight path angle of the target's relative motion with
respect to the observer's line-of-sight, in the range [-90,+90], where positive
values indicate motion away from the observer, negative values are toward the
observer:

  -90 = target is moving directly toward the observer
    0 = target is moving at right angles to the observer's line-of-sight
  +90 = target is moving directly away from the observer

UNITS:  ARCSECONDS/MINUTE, DEGREES, DEGREES
 
 'Lun_Sky_Brt  sky_SNR' =
  Sky brightness due to moonlight scattered by Earth's atmosphere at the
target's position in the sky. "sky_SNR" is the visual signal-to-noise ratio
(SNR) of the target's surface brightness relative to background sky. Output
only for topocentric Earth observers when both the Moon and target are above
the local horizon and the Sun is in astronomical twilight (or further) below
the horizon, and the target is not the Moon or Sun. If all conditions are
not met, "n.a." is output. Galactic brightness, local sky light-pollution
and weather are NOT considered. Lunar opposition surge is considered. The
value returned is accurate under ideal conditions at the approximately 8-23%
level, so is a useful but not definitive value.

  If the target-body radius is also known, "sky_SNR" is output. This is the
approximate visual signal-to-noise ratio of the target's brightness divided
by lunar sky brightness. When sky_SNR < 1, the target is dimmer than the
ideal moonlight-scattering background sky, so unlikely to be detectable at
visual wavelengths. In practice, visibility requires sky_SNR > 1 and a
detector sensitive enough to reach the target's magnitude, even if it isn't
washed out by moonlight. When relating magnitudes and brightness values,
keep in mind their logarithmic relationship m2-m1 = -2.5*log_10(b2/b1).

  UNITS: VISUAL MAGNITUDES / ARCSECOND^2, and unitless ratio

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

**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
`;