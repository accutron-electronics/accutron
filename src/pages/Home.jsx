import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home(){
  return (
    <section>
      <Helmet>
        <title>Home — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron: advanced guidance and control technology using gyroscopic high angular momentum for extreme maneuverability. accutron.eu" />
      </Helmet>
      <h1>Inertia Guided Munition — Smart Bullet Concept</h1>
      <p className="lead">Accutron develops guidance and control systems based on kinetic gyroscopes with high angular momentum. The 'smart bullet' concept provides inertial-based precision targeting independent of GPS, radar guidance, or external control links.</p>

      <h2>Theory of Gyroscopes</h2>
      <p>Gyroscopes have been known for thousands of years, with their mathematical basis understood for over 200 years. Despite incomplete explanation in classical physics, their behavior is well-characterized by Newton's Laws. Gravity has no effect on gyroscopic forces, enabling operation in space and the upper atmosphere. Recent developments in gyroscope manufacturing—fiber optic, micromechanics, and silicon sensors—have dramatically reduced sensor size and expanded applications beyond traditional navigation to precision targeting systems.</p>

      <h2>Mathematical Foundation</h2>
      <p>Angular momentum (L) of a rotating mass is defined as: <strong>L = m·r²·ω = I·ω</strong>, where m is mass, r is radius, and ω is angular velocity. When torque is applied to a spinning gyroscope, its axis tilts perpendicular to the applied force rather than in the direction of force. The precession rate is inversely proportional to angular momentum, minimized by increasing velocity, mass, or radius. Precession angular velocity under external torque is: <strong>ωp = τ / (I·ω)</strong>, where τ is external torque, I is moment of inertia, and ω is gyroscope angular velocity.</p>

      <h2>Principle of Operation</h2>
      <p>The main strategy detects the target and continuously updates its location and speed using sensors. Target coordinates may be preset during initialization. After trajectory adjustment, the rocket motor's thrust vector is redirected to the new location. Due to the missile's mass, it follows a curved path per Newton's Laws. Weather and environmental disturbances are continuously corrected with new sensor data. The gimbal turning time—duration required to receive data and initiate adjustment—depends on gimbal motor efficiency and high-speed signal processing. This sequence repeats continuously to hit the target.</p>

      <h2>Target Detection Methods</h2>
      <ul>
        <li><strong>High-speed CMOS cameras:</strong> Most common and inexpensive method for target detection.</li>
        <li><strong>Optical Time-of-Flight (ToF) sensors:</strong> Improved detection in bad weather conditions.</li>
        <li><strong>LIDAR sensors:</strong> Can use different frequencies for maximum penetration; longer wavelengths penetrate clouds.</li>
        <li><strong>RF signal detection:</strong> Detects GPS or radio frequency communication via phase difference between multiple antennas.</li>
        <li><strong>Audio signals:</strong> Inexpensive microphones determine signal direction via phase differences; can recognize targets from sound profiles.</li>
        <li><strong>IR radiation:</strong> Common for hot targets (hypersonic missiles, tanks); expensive sensor option.</li>
        <li><strong>Accelerometer and altimeter:</strong> Enhanced accuracy; rough data obtainable from gyroscopic data alone.</li>
      </ul>

      <h2>Key System Parameters</h2>
      <p>To calculate missile trajectory and adjust course, the following information is required:</p>
      <ul>
        <li>Missile total mass</li>
        <li>Missile longitudinal angular momentum</li>
        <li>Missile inertia (rotational angular momentum) for precession corrections</li>
        <li>Gimbal turning force and access time (turning speed in degrees per millisecond)</li>
        <li>Air drag (considered constant, subtracted from rocket total thrust)</li>
        <li>Weather conditions (analyzed during initialization or incorporated into flight plan)</li>
        <li>Random trajectory algorithms for final approach assurance</li>
      </ul>

      <h2>Advantages</h2>
      <ul>
        <li>Gravity-independent operation in space and upper atmosphere.</li>
        <li>Air density has no effect on turning performance compared to fin-driven control.</li>
        <li>High maneuverability with orders of magnitude faster turns than traditional control fins.</li>
        <li>Inertial-based guidance independent of GPS or external signals.</li>
        <li>Explosive material integrated into rotating gyroscope mass increases destruction while maximizing angular momentum.</li>
      </ul>
    </section>
  )
}
