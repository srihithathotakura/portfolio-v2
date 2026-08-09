import React, { forwardRef } from "react";

const Publications = forwardRef(({ id }, ref) => (
  <section id={id} ref={ref} className="section" style={{ backgroundColor: '#2A2A2A', color: '#F4F4F4' }}>
    <div className="container">
      <h2 className="projects-title">Publications</h2>
      <div className="publication-card">
        <span className="publication-status">Accepted — IEEE CONECCT 2026</span>
        <h3>Comparative Evaluation of Bluetooth Based Distance Measurement Techniques Across Multiple Performance Metrics</h3>
        <p>
          Co-authored a comparative study of four BLE indoor-ranging techniques — RSSI, RTT, AoA/AoD, and Channel Sounding —
          evaluated across 12 dimensions including accuracy, hardware requirements, and cost.
        </p>
        <p>
          Experimentally validated RSSI and RTT on ESP32-C6 boards in library and corridor environments, showing that RTT
          offers significantly better multipath resilience and measurement stability than RSSI across a 0.5–5 m range.
        </p>
        <p>
          <em>Track 3.4 – Intelligent Networks, IEEE CONECCT 2026</em>
        </p>
      </div>
    </div>
  </section>
));

export default Publications;
