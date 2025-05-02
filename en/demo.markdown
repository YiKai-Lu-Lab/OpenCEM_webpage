---
title: OpenCEM Demo
layout: demo
---

  Design context to earn a spot on the [leaderboard](/leaderboard.html) and rewards.

  <!-- User Input Section -->
  <div class="input-section">
      <h2>Scenario Input</h2>
      <label>Your Location (District Level)</label>
      <input type="text" id="userLocation" placeholder="e.g.: Chaoyang District, Beijing">
      
      <label>Upcoming Event Description</label>
      <textarea id="userEvent" rows="4" placeholder="e.g.: Business trip for 4 days"></textarea>

      <button class="submit-button" onclick="submitUserData()">
          <span>Run Prediction</span>
      </button>
  </div>
  <!-- Results Display -->
  <div class="results-section" id="results" style="display: none;">
      <h2>Prediction Results</h2>
      <p id="predictionText"></p>
      
      <div class="data-grid">
          <!-- Weather Card -->
          <div class="chart-card">
              <h3>Real-time Weather</h3>
              <div class="canvas-container">
                  <canvas id="weatherChart"></canvas>
              </div>
              <div class="weather-stats">
                  <span id="currentTemp"></span>
                  <span id="humidity"></span>
                  <span id="windSpeed"></span>
              </div>
          </div>

          <!-- Energy Mix Card -->
          <div class="chart-card">
              <h3>Energy Consumption</h3>
              <div class="canvas-container">
                  <canvas id="energyPieChart"></canvas>
              </div>
          </div>

          <!-- Usage Trend Card -->
          <div class="chart-card" style="grid-column: span 2">
              <h3>Power Usage Trend</h3>
              <div class="canvas-container">
                  <canvas id="usageTrendChart"></canvas>
              </div>
          </div>

          <!-- Efficiency Card -->
          <div class="chart-card">
              <h3>AC Efficiency</h3>
              <div class="gauge-container">
                  <canvas id="efficiencyGauge"></canvas>
                  <div class="gauge-label">COP: <span id="copValue"></span></div>
              </div>
          </div>
      </div>
  </div>

  <!-- Feedback Section -->
  <div class="feedback-section" id="feedback" style="display: none;">
      <h2>Model Feedback</h2>
      
      <label>Prediction Accuracy Assessment</label>
      <select id="accuracy">
          <option value="accurate">Closely Matches Actuals (±5%)</option>
          <option value="partial">Partially Accurate (±10%)</option>
          <option value="inaccurate">Significant Deviation (>15%)</option>
      </select>

      <div class="feedback-details-grid">
          <div>
              <label>Primary Discrepancy Area</label>
              <select id="errorType">
                  <option value="load">Load Magnitude</option>
                  <option value="timing">Peak Timing</option>
                  <option value="duration">Event Duration</option>
                  <option value="other">Other Factors</option>
              </select>
          </div>
          <div>
              <label>Observed Value</label>
              <input type="number" id="observedValue" placeholder="Actual consumption (kWh)">
          </div>
      </div>

      <label>Detailed Variance Report</label>
      <textarea id="correctPrediction" rows="6" 
          placeholder="Please include:
- Measurement methodology
- Time period of observation
- Any external influencing factors
- Suggested model adjustments"></textarea>

      <button class="submit-button" onclick="submitFeedback()">
          <span>Submit Performance Feedback</span>
      </button>
  </div>
