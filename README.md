# Real-time ADS-B Tracking and Collision Warning System

This README offers a comprehensive overview of the project, encompassing setup guidelines and the repository's structural organization. 

## Features

### Real-time Aircraft Tracking
- Live visualization of aircraft positions using 3D models
- Different aircraft types represented with appropriate models (Large Jets, Small Jets, Light Aircraft, Rotary Wing, Military)
- Flight path prediction with visual cones showing potential trajectories
- Aircraft type filtering for focused monitoring

### Collision Detection System
- Advanced collision prediction using CPA (Closest Point of Approach) analysis
- Risk scoring system based on distance and time to potential collision
- Visual warnings with color-coded risk levels (High, Medium, Low)
- Configurable detection parameters:
  - Maximum horizontal separation
  - Maximum vertical separation
  - Prediction horizon
  - Detection sensitivity

### Anomaly Detection
- Heuristic-based spoofing detection
- Machine learning-based anomaly detection
- Real-time monitoring of:
  - Unrealistic vertical rates
  - Implausible ground speeds
  - Abrupt heading changes
  - Position jumps

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Modern web browser with WebGL support

### Installation Steps

1. Clone the repository


2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Refactor the `.base.env` file to `.env`
   - Add your Cesium Ion access token to the pre-provided variable:
   ```
   CESIUM_ION_TOKEN=your_token_here
   ```

4. Start the development server:
```bash
node server.js
```

5. Access the application:
   - Open your web browser
   - Navigate to `http://localhost:8001`

### Configuration

The system can be configured through the control panel:
- Adjust collision detection parameters
- Filter aircraft types
- Modify detection sensitivity
- Set prediction horizons

## Team 

<img src="images/youchun2.jpeg" title="Jonathan" width="225px" height="300px"/>

***Jonathan Wang***

Jonathan is a Master’s student in Computer Science at the University of Illinois Urbana-Champaign, expected to graduate in December 2025. He is currently open to Fall 2025 internship opportunities as well as full-time new graduate roles.

Email: [youchun2@illinois.edu](mailto:youchun2@illinois.edu)   
LinkedIn: https://www.linkedin.com/in/you-chun-wang/  


<img src="images/ww17.jpg" title="Maison" width="225px" height="300px"/>

***Maison Wu***

Maison is a Master’s student at Gies College of Business of the University of Illinois Urbana-Champaign, expected to graduate in May 2025. He is currently open to  full-time new graduate roles.

Email: [ww17@illinois.edu](mailto:ww17@illinois.edu)   
LinkedIn: https://www.linkedin.com/in/wenxuan-wu-15b894221/


<img src= "images/bartuk2.jpg"  title = "Bartu" width="225px" height="300px"/>


***Bartu Koksal***

Bartu is an undergraduate Computer Science student at the University of Illinois Urbana-Champaign, expected to graduate in December 2025. He is currently open to internship and co-op opportunities for Summer and Fall 2025.

Email: [bartuk2@illinois.edu](mailto:bartuk2@illinois.edu)
LinkedIn: https://www.linkedin.com/in/bartu-k%C3%B6ksal-8454b01b3/

<img src= "images/kyigit2.png"  title = "Kaan" width="225px" height="300px"/>

***Kaan Yigit***

Kaan, the team leader, is a graduating Senior in Computer Science at the University of Illinois Urbana-Champaign. Post-graduation he will be working as an analyst for an energy commodities trading team. 

Emails: [kyigit2@illinois.edu](mailto:kyigit2@illinois.edu) & [hi@kaanyigit.com](mailto:hi@kaanyigit.com)

LinkedIn: https://www.linkedin.com/in/kaan-yigit/

Website: https://www.kaanyigit.com 

Academic: https://www.kaanyigit.web.illinois.edu

— Advised by Professor David Lariviere


