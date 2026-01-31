import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Drones(){
  return (
    <section>
      <Helmet>
        <title>Drones — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron drone guidance and swarm defence systems. accutron.eu" />
      </Helmet>
      <h1>Handheld Devices for Drones and Slow-Moving Targets</h1>
      <p>Inertia-guided munitions optimized for handheld platforms provide rapid response against small unmanned aerial systems and other slow-moving threats. The ability to aim manually reduces required range and turning angle compared to unmanned platforms.</p>

      <h2>System Configuration</h2>
      <ul>
        <li><strong>Diameter:</strong> Limited to maximum 50 mm for portability.</li>
        <li><strong>Ballistic core:</strong> Tungsten shell increases inertia and kinetic energy delivery.</li>
        <li><strong>Guidance:</strong> Initial target settings provided by remote fire control during initialization phase.</li>
        <li><strong>Detection:</strong> Fast target recognition using localized AI algorithms.</li>
        <li><strong>Explosive options:</strong> Various destructive devices possible—conventional explosives, sticky glue, net, or specialized payloads.</li>
      </ul>

      <h2>Initialization Requirements</h2>
      <p>Before launch, the docking or launching station provides high-current supply to gyroscope motors, loading a predetermined inertia level. Flight data and target parameters are loaded through this connection. Initialization delay must be considered when rapid engagement is required.</p>

      <h2>Intelligent Swarm Defense</h2>
      <p>Multiple units coordinate through communication (UWB, frequency hopping) to enable swarm defense strategies. Decentralized inertial control allows each interceptor to engage targets autonomously while maintaining coordinated tactical patterns.</p>

      <h2>Target Engagement Sequence</h2>
      <ol>
        <li><strong>t₀:</strong> Time when target is detected (visual, thermal, or RF).</li>
        <li><strong>t₁:</strong> Time when target direction and speed have been analyzed.</li>
        <li><strong>t₂:</strong> Time when munition has been turned to new position.</li>
        <li><strong>t₃:</strong> Time of impact.</li>
      </ol>
      <p>The interval (t₂ – t₁) is duration required to turn the munition, repeating continuously for hit assurance.</p>

      <h2>Operational Advantages</h2>
      <ul>
        <li>Portable handheld deployment for tactical units.</li>
        <li>Rapid terminal guidance independent of external tracking systems.</li>
        <li>Effective against maneuvering and slow-moving targets.</li>
        <li>Robust performance in GPS-denied environments.</li>
      </ul>
    </section>
  )
}
