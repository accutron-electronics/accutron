import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Acoustics(){
  return (
    <section>
      <Helmet>
        <title>Acoustics Design — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron acoustics engineering for precision measurement, signal processing, and studio-grade systems. accutron.eu" />
      </Helmet>
      <h1>Acoustics Design</h1>
      <p>Accutron provides precision acoustics and signal-processing engineering suitable for defence instrumentation and high-performance studio environments. Our approach emphasizes measurement fidelity, low-noise design, and deterministic signal paths.</p>

      <h2>Measurement & Calibration</h2>
      <p>Accurate acoustics require rigorous calibration. We provide design practices and hardware that ensure repeatable measurements in the field and in controlled lab environments.</p>

      <h2>Signal Processing</h2>
      <p>Algorithms are crafted for low-latency deterministic performance: high-speed filtering, spectral analysis, and adaptive noise suppression suitable for both telemetry and audio applications.</p>

      <h2>Applications</h2>
      <ul>
        <li>High-fidelity telemetry and sensor arrays.</li>
        <li>Studio-grade monitoring systems where precision and repeatability are required.</li>
        <li>Environmental and battlefield acoustic monitoring with robust signal chains.</li>
      </ul>
    </section>
  )
}
