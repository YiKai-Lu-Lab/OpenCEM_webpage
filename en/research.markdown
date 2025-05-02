---
layout: default
title: OpenCEM Research
---
## OpenCEM Data and Simulator

## OpenCEM Algorithms

#### InstructMPC

**InstructMPC** is a novel framework that enhances traditional Model Predictive Control (MPC) by integrating real-time contextual information through its Language-to-Distribution (L2D) module, which translates contextual information—such as events, weather, and user-generated data—into predictive disturbance trajectories. These trajectories are then incorporated into the MPC optimization process.

Within **OpenCEM**, the abundance of real-world time series and diverse contextual data (e.g., local news, weather reports, event schedules) serve as valuable inputs for **InstructMPC**. By leveraging these inputs, **InstructMPC** can adapt its control strategy more effectively than traditional MPC methods, making it particularly powerful for energy management scenarios. The framework’s dynamic human-LLM interaction allows for real-time adjustments and refined decision-making, resulting in more responsive and context-aware control policies.

As part of the **OpenCEM** initiative, **InstructMPC** will help demonstrate how in-context human instructions and local data can be used to improve energy management decisions. Stay tuned for future updates and data releases that will further support and showcase **InstructMPC** in real-world settings.

R. Wu, J. Ai, and T. Li, [Instructmpc: A human-llm-in-the-loop framework for context-aware
control](https://arxiv.org/abs/2504.05946), 2025.
