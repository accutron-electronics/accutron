import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Electronics(){
  return (
    <section>
      <Helmet>
        <title>Electronics Design — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron electronics design for sensors, CPUs, inertial systems and high-speed control. accutron.eu" />
      </Helmet>
      <h1>Electronics Design</h1>
      <p>Accutron's electronics engineering focuses on deterministic, high-bandwidth control loops, radiation-tolerant sensors, and real-time processing hardware capable of supporting gyroscopic vectoring at millisecond scales.</p>

      <h2>Sensors and Inertial Systems</h2>
      <p>High-precision gyroscopes and IMUs are tightly integrated with control electronics to minimize latency. Sensor fusion is implemented on hardened real-time processors to ensure consistent guidance even in GPS-denied or jamming environments.</p>

      <h2>Control Electronics</h2>
      <p>Control hardware is designed for high sample rates, low jitter, and predictable interrupt handling. We employ architectures with dedicated signal processing paths for stabilization and guidance loops, and separate supervisory systems for mission management and telemetry.</p>

      <h2>Manufacturing & Reliability</h2>
      <p>Designs prioritize industrially available components, testability, and thermal/mechanical robustness. Modularity reduces repair time and supports field-level maintenance.</p>
    </section>
  )
}
