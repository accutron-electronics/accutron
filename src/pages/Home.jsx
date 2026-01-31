import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home(){
  return (
    <section>
      <Helmet>
        <title>Home — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron: advanced guidance and control technology using gyroscopic high angular momentum for extreme maneuverability. accutron.eu" />
      </Helmet>
      <h1>Accutron Electronics — Overview</h1>
      <p className="lead">Accutron develops high-performance guidance and control systems based on high-angular-momentum gyroscopic technology. Our systems enable rapid vectoring of kinetic platforms for defence and precision applications.</p>

      <h2>Core Technology — "Smart Bullet" Concept</h2>
      <p>Accutron's "Smart Bullet" concept uses high angular momentum and gyroscopic control to create a controllable kinetic vector in space. By integrating heavy rotating masses and precision sensors with real-time control, vehicles can execute extremely fast turns without reliance on aerodynamic surfaces. This enables intercepting hypersonic or otherwise maneuvering targets, including targets obscured by terrain or outside conventional sensor line-of-sight (Pat. Pend.).</p>

      <h2>Principle of Operation</h2>
      <p>Unlike classical inertial guidance, Accutron employs the reverse use of gyroscopes: increasing rotating mass and angular momentum to produce immediate torque and directional change. Heavy components—motors, gyroscopes, sensors, CPU, batteries, and proximity systems—are integrated centrally and, when required, into the rotating mass to maximize angular momentum and minimize actuation latency.</p>

      <h2>Advantages</h2>
      <ul>
        <li>Scalable from handheld devices to strategic systems (ICBM-level deterrence).</li>
        <li>Built from industrially mass-produced components for reliability and supply chain resilience.</li>
        <li>Inherently invulnerable to electronic warfare due to inertial-based control; reduced dependency on external links.</li>
        <li>Fire-and-forget capability with programmable trajectories (including stochastic and helical profiles).</li>
        <li>Operable in space and upper-atmosphere environments where aerodynamic control is ineffective.</li>
      </ul>

      <h2>Use Cases</h2>
      <ul>
        <li>Handheld drone swarm defence systems for tactical units.</li>
        <li>Self-propelled, remote-controlled missile launchers with rapid terminal guidance.</li>
        <li>Area defense systems similar to "Iron Dome" with improved intercept rates and EM immunity.</li>
        <li>Hypersonic multi-warhead interceptors capable of tracking multiple guided warheads during final approach.</li>
      </ul>

      <h2>Construction Principle</h2>
      <p>For maximum performance the system architecture places heavy components at the center and integrates those components into the rotating mass wherever possible. This architecture maximizes gyroscope angular momentum per unit mass, enabling faster orientation changes and higher control authority without large aerodynamic surfaces.</p>
    </section>
  )
}
