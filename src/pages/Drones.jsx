import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Drones(){
  return (
    <section>
      <Helmet>
        <title>Drones — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron drone guidance and swarm defence systems. accutron.eu" />
      </Helmet>
      <h1>Drones</h1>
      <p>Accutron applies high-angular-momentum guidance to small and medium unmanned aerial systems (UAS) to increase agility, reduce response time, and provide robust terminal guidance even under strong electromagnetic interference.</p>

      <h2>Drone Swarm Defence</h2>
      <p>Our systems enable handheld or vehicle-mounted units to autonomously intercept or disrupt hostile drone swarms. Integration of inertial control and rapid actuation provides precise relative motion control for interceptors operating in contested environments.</p>

      <h2>Platform Integration</h2>
      <p>Control electronics, sensors, and rotating masses are modular to allow rapid integration into existing platforms. Accutron guidance units are designed to be mass-produced and field-replaceable.</p>

      <h2>Tactical Use Cases</h2>
      <ul>
        <li>Point-defense against small UAS using rapid-response kinetic interceptors.</li>
        <li>Coordinated swarm behaviours with centralized mission parameters and decentralized inertial control.</li>
        <li>Hybrid seekers that combine inertial steering with short-range sensors for final homing.</li>
      </ul>
    </section>
  )
}
