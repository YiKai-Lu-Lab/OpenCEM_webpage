---
title: OpenCEM演示
layout: demo
---

设计情境以获得[排行榜](/leaderboard.html)上的位置和奖励。

<!-- 用户输入部分 -->
<div class="input-section">
    <h2>情境输入</h2>
    <label>您的位置（区级）</label>
    <input type="text" id="userLocation" placeholder="例如：北京市朝阳区">
    
    <label>即将发生的事件描述</label>
    <textarea id="userEvent" rows="4" placeholder="例如：为期4天的商务旅行"></textarea>

    <button class="submit-button" onclick="submitUserData()">
        <span>运行预测</span>
    </button>
</div>

<!-- 结果显示部分 -->
<div class="results-section" id="results" style="display: none;">
    <h2>预测结果</h2>
    <p id="predictionText"></p>
    
    <div class="data-grid">
        <!-- 天气卡片 -->
        <div class="chart-card">
            <h3>实时天气</h3>
            <div class="canvas-container">
                <canvas id="weatherChart"></canvas>
            </div>
            <div class="weather-stats">
                <span id="currentTemp"></span>
                <span id="humidity"></span>
                <span id="windSpeed"></span>
            </div>
        </div>

        <!-- 能源组成卡片 -->
        <div class="chart-card">
            <h3>能源消耗</h3>
            <div class="canvas-container">
                <canvas id="energyPieChart"></canvas>
            </div>
        </div>

        <!-- 使用趋势卡片 -->
        <div class="chart-card" style="grid-column: span 2">
            <h3>用电趋势</h3>
            <div class="canvas-container">
                <canvas id="usageTrendChart"></canvas>
            </div>
        </div>

        <!-- 效率卡片 -->
        <div class="chart-card">
            <h3>空调效率</h3>
            <div class="gauge-container">
                <canvas id="efficiencyGauge"></canvas>
                <div class="gauge-label">COP: <span id="copValue"></span></div>
            </div>
        </div>
    </div>
</div>

<!-- 反馈部分 -->
<div class="feedback-section" id="feedback" style="display: none;">
    <h2>模型反馈</h2>
    
    <label>预测准确性评估</label>
    <select id="accuracy">
        <option value="accurate">与实际值非常接近（±5%）</option>
        <option value="partial">部分准确（±10%）</option>
        <option value="inaccurate">显著偏差（>15%）</option>
    </select>

    <div class="feedback-details-grid">
        <div>
            <label>主要差异领域</label>
            <select id="errorType">
                <option value="load">负荷大小</option>
                <option value="timing">峰值时间</option>
                <option value="duration">事件持续时间</option>
                <option value="other">其他因素</option>
            </select>
        </div>
        <div>
            <label>观测值</label>
            <input type="number" id="observedValue" placeholder="实际用电量（kWh）">
        </div>
    </div>

    <label>详细差异报告</label>
    <textarea id="correctPrediction" rows="6" 
        placeholder="请包括：
- 测量方法
- 观测时间段
- 任何外部影响因素
- 建议的模型调整"></textarea>

    <button class="submit-button" onclick="submitFeedback()">
        <span>提交性能反馈</span>
    </button>
</div>