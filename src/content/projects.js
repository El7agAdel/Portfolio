// Projects and case studies shown in /projects and featured on the home page.
// Tip: keep "category" values consistent – they power the category filters.

import img_LLE_png from '../assets/LLE.png'
import img_Valo_png from '../assets/Valo.png'
import img_LOL_png from '../assets/LOL.png'
import img_kayo_png from '../assets/kayo.png'
import img_Virtual_Restaurant_png from '../assets/Virtual_Restaurant.png'
import img_arpubg_png from '../assets/arpubg.png'
import img_metahuman_png from '../assets/metahuman.png'
import img_arorb_png from '../assets/arorb.png'
import img_tetris_png from '../assets/tetris.png'
import img_museum_png from '../assets/museum.png'
import img_iac_png from '../assets/iac.png'
import img_summit_png from '../assets/summit.png'
import img_Proseed_png from '../assets/Proseed.png'
import img_campus_png from '../assets/campus.png'
import img_arcade_png from '../assets/arcade.png'
import img_bci_png from '../assets/bci.png'
import img_abbrl_png from '../assets/abbrl.png'
import img_catalystros2_png from '../assets/catalystros2.png'
import img_abbros2_png from '../assets/abbros2.png'

export const projects = [
  {
    index: 1,
    title: 'Low-Light Enhancement (GAN vs U-Net)',
    subtitle: 'Computer Vision · Deep Learning',
    summary:
      'Deep-learning low-light image enhancement comparing GAN and U-Net architectures. Focused on visibility recovery, contrast improvement, and noise suppression under extreme lighting.',
    tags: ['TensorFlow', 'Keras', 'GAN', 'U-Net', 'Image Processing'],
    focus: 'Enhancement quality, detail recovery, and structural preservation in extreme low-light scenes.',
    link: 'https://github.com/El7agAdel/Low-Light-Enhancement-GAN-vs-UNet',
    category: 'Computer Vision',
    featured: true,
    year: 2025,
    image: img_LLE_png,
  },
  {
    index: 2,
    title: 'Valorant Overlay HUD',
    subtitle: 'Broadcast · Real-time CV + Graphics',
    summary:
      'A real-time Valorant HUD using Unreal Engine + HTML overlays, powered by computer vision and OCR to extract live in-game state and render broadcast graphics.',
    tags: ['OpenCV', 'OCR', 'Python', 'Unreal Engine', 'HTML/CSS/JS'],
    focus: 'Low-latency in-game data extraction and production-ready real-time broadcast graphics.',
    link: 'https://www.youtube.com/watch?v=ZxQeYySgf-8&t=10420s',
    category: 'Computer Vision',
    featured: true,
    year: 2025,
    image: img_Valo_png,

  },
  {
    index: 3,
    title: 'League of Legends Overlay HUD',
    subtitle: 'Broadcast · Real-time CV + Graphics',
    summary:
      'A real-time League Of Legends HUD using Unreal Engine + HTML overlays, powered by computer vision and OCR to extract live in-game state and render broadcast graphics.',
    tags: ['OpenCV', 'OCR', 'Python', 'Unreal Engine', 'HTML/CSS/JS'],
    focus: 'Robust realtime in-game data extraction and reliable broadcast graphics under live production constraints.',
    link: 'https://www.youtube.com/watch?v=3bvnZs5T8GU&t=7451s',
    category: 'Computer Vision',
    featured: true,
    year: 2025,
    image: img_LOL_png,
  },
  {
    index: 4,
    title: 'KAYO – Marker-based Tracking',
    subtitle: 'Augmented Reality · Tracking',
    summary:
      'Marker-based tracking prototype for AR-style positioning. Built with classical vision techniques to detect and track a fiducial marker and recover pose-like signals.',
    tags: ['OpenCV', 'Tracking', 'Pose Estimation', 'Image Processing'],
    focus: 'Stable marker tracking, pose estimation, and jitter reduction in real-time camera feeds.',
    link: 'https://youtu.be/Fqq4itgHDtM',
    category: 'Augmented Reality',
    featured: false,
    year: 2025,
    image: img_kayo_png,
  },
  {
    index: 4,
    title: 'Virtual Restaurant',
    subtitle: 'Augmented Reality · Mobile AR',
    summary:
      'Web AR solution for fine dining immersive experience',
    tags: ['WebAR', 'Tracking', 'Immersive Experience'],
    focus: 'Immersive WebAR dining experiences with stable mobile tracking and accessible interaction.',
    link: 'https://youtu.be/YfkPUAzF6PI',
    category: 'Augmented Reality',
    featured: false,
    year: 2026,
    image: img_Virtual_Restaurant_png,
  },
  {
    index: 4,
    title: 'PUGB AR',
    subtitle: 'Augmented Reality · Mobile AR',
    summary:
      'Promotional Campaign for New Sanhok Destruction Release',
    tags: ['OpenCV', 'Tracking', 'Pose Estimation', 'Image Processing'],
    focus: 'Engaging mobile AR campaign delivery with stable tracking and promotional interactivity.',
    // link: 'https://youtu.be/Fqq4itgHDtM',
    category: 'Augmented Reality',
    featured: false,
    year: 2024,
    image: img_arpubg_png,
  },
  {
    index: 5,
    title: 'Meta-HUMAN',
    subtitle: 'Augmented Reality · Tracking',
    summary:
      'Marker-based tracking prototype for AR-style positioning. Integrated with realtime Face-Mesh Tracking , and realtime voice augmentation',
    tags: ['OpenCV', 'Tracking', 'Pose Estimation', 'Image Processing', 'Face Tracking', 'Voice Augmentation'],
    focus: 'Real-time face tracking, voice augmentation, and virtual production integration.',
    link: 'https://youtu.be/735IsHcaQYc',
    category: 'Augmented Reality',
    featured: false,
    year: 2025,
    image: img_metahuman_png,
  },
  {
    index: 6,
    title: 'ORBSLAM-AR',
    subtitle: 'Augmented Reality · Tracking',
    summary:
      'Integrating state-of-the-art ORBSLAM with Unreal Engine utilizing pose estimation and mapping techniques to render a 3D model',
    tags: ['SLAM', 'Unreal', 'Pose Estimation'],
    focus: 'SLAM-based pose estimation and stable 3D content placement in real-time AR scenes.',
    link: 'https://youtu.be/iYZwIN7IkSE',
    category: 'Augmented Reality',
    featured: false,
    year: 2025,
    image: img_arorb_png,
  },
  {
    index: 7,
    title: 'Tetris – HandPlay',
    subtitle: 'Computer Vision · Human Interaction',
    summary:
      'Hand-gesture controlled Tetris using MediaPipe hand landmarks as an input device for a simple game loop.',
    tags: ['MediaPipe', 'Python', 'Computer Vision'],
    focus: 'Responsive hand-gesture interaction and robust landmark-based game control.',
    link: '#',
    category: 'Computer Vision',
    featured: false,
    year: 2026,
    image: img_tetris_png,
  },

  // --- Broadcast / event case studies (rename + fill details) ---
  {
    index: 8,
    title: 'Grand Egyption Museum',
    subtitle: 'Broadcast · Audio / Comms',
    summary:
      'Part of the Audio Engineering team responsible for routing and maintaing audio signals to various pin-points in the venue',
    tags: ['Broadcast', 'Audio', 'Comms', 'Operations'],
    focus: 'Reliable audio routing and signal distribution across a large-scale live venue.',
    // link: 'https://www.linkedin.com/posts/arabhardware.net_iac2022-iac2022-BroadCast-activity-7005652485398794241-5ibR/',
    category: 'BroadCast',
    featured: false,
    year: 2025,
    image: img_museum_png,
  },
  {
    index: 9,
    title: 'IAC 2022',
    subtitle: 'Broadcast · Audio / Video / Comms',
    summary:
      'Live event delivery as part of the broadcast engineering team (roles included audio, video, comms, and systems reliability).',
    tags: ['Broadcast', 'Audio', 'Video', 'Comms', 'Operations'],
    focus: 'Reliable live event delivery across audio, video, comms, and technical operations.',
    link: 'https://www.linkedin.com/posts/arabhardware%2Enet_iac2022-iac2022-esports-activity-7005652485398794241-5ibR?utm_source=share&utm_medium=member_desktop&rcm=ACoAABypsIABjuzVBRV-vEBoMb1QzFhxjlWjnsY',
    category: 'BroadCast',
    featured: false,
    year: 2022,
    image: img_iac_png,
  },
  {
    index: 10,
    title: 'ESS',
    subtitle: 'Broadcast · Engineering & Operations',
    summary:
      'Delivered live production engineering (signal flow, routing, troubleshooting, and on-site operations).',
    tags: ['Broadcast', 'Signal Flow', 'Routing', 'On-site Ops'],
    focus: 'Live production reliability through signal flow design, routing, and on-site troubleshooting.',
    link: 'https://www.linkedin.com/posts/ahmed-abdel-latif-03398036_and-its-a-wrap-on-ess25-as-esports-summit-activity-7384135951733735424-rJdf?utm_source=share&utm_medium=member_desktop&rcm=ACoAABypsIABjuzVBRV-vEBoMb1QzFhxjlWjnsY',
    category: 'BroadCast',
    featured: false,
    year: 2025,
    image: img_summit_png,
  },
  {
    index: 11,
    title: 'Proseed',
    subtitle: 'Broadcast · Engineering & Operations',
    summary:
      'Multi-role support across audio/video/comms and show control for a live event environment.',
    tags: ['Broadcast', 'Audio', 'Video', 'Comms'],
    focus: 'Multi-disciplinary live event support across audio, video, comms, and show operations.',
    link: 'https://www.linkedin.com/posts/hashemalborno_esports-gamingindustry-activity-7114504284402036738-1WJB?utm_source=share&utm_medium=member_desktop&rcm=ACoAABypsIABjuzVBRV-vEBoMb1QzFhxjlWjnsY',
    image: img_Proseed_png,
    category: 'BroadCast',
    featured: false,
    year: 2023,
  },
  {
    index: 12,
    title: 'Campus Clutch',
    subtitle: 'Broadcast · Audio / Video / Comms',
    summary:
      'Design, Plan, Implement and maintain layered, complex Audio & Video Infrastructures',
    tags: ['Broadcast', 'Audio', 'Video', 'Comms'],
    focus: 'Designing and maintaining layered broadcast infrastructure for high-pressure live events.',
    link: 'https://www.linkedin.com/posts/hashemalborno_esports-gamerslounge-gaming-activity-6995698318609661953-UVu1?utm_source=share&utm_medium=member_desktop&rcm=ACoAABypsIABjuzVBRV-vEBoMb1QzFhxjlWjnsY',
    category: 'BroadCast',
    featured: false,
    year: 2022,
    image: img_campus_png,
  },
  {
    index: 13,
    title: 'Red Bull Arcade',
    subtitle: 'Embedded · Interactive Systems',
    summary:
      'Interactive experience build-out (hardware + software) for a live activation setup.',
    tags: ['Embedded', 'Computer Vision', 'Interactive'],
    focus: 'End-to-end interactive activation delivery across embedded hardware and software systems.',
    link: 'https://www.linkedin.com/posts/ahmed-abdel-latif-03398036_esports-gaming-redbull-activity-7305195848525647872-htOv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABypsIABjuzVBRV-vEBoMb1QzFhxjlWjnsY',
    category: 'Embedded Systems',
    featured: false,
    year: 2024,
    image: img_arcade_png,
  },
  {
    index: 14,
    title: 'Brain Computer Interface',
    subtitle: 'BCI · Machine Learning',
    summary:
      'ROS_BrainComputer_Interface is a ROS-based brain-computer interface project that uses SSVEP EEG signals to translate user attention into control commands. It combines OpenBCI signal acquisition, filtering, PCA-based feature extraction, and machine learning classification to create an end-to-end human-machine interaction pipeline.',
    tags: ['Embedded', 'BCI', 'Robotics', 'Machine Learning'],
    focus: 'Translating EEG attention signals into control commands for accessible human-machine interaction.',
    link: 'https://www.youtube.com/watch?v=5liWwQx0vOA',
    category: 'Robotics',
    featured: false,
    year: 2020,
    image: img_bci_png,
  },
  {
    index: 15,
    title: 'ABB Reinforcement Learning',
    subtitle: 'Reinforcement Learning · ROS',
    summary:
      'ABB_IRB120_Reinforcement_Learning is a ROS/Gazebo-based project for training control policies for the ABB IRB 120 robotic arm using reinforcement learning. It includes the robot description, simulation environment, and training scripts for experimenting with different RL algorithms.',
    tags: ['Reinforcement Learning', 'ROS'],
    focus: 'Training and evaluating robotic control policies in simulation using reinforcement learning.',
    link: 'https://github.com/El7agAdel/ABB_IRB120_Reinforcement_Learning?tab=readme-ov-file',
    category: 'Robotics',
    featured: false,
    year: 2020,
    image: img_abbrl_png,
  },
  {
    index: 16,
    title: 'Catalyst CRS ROS2 Humble',
    subtitle: 'Robotics · ROS',
    summary:
      'Catalyst-CRS-ROS-Humble is a ROS 2 Humble robotics simulation project for the Catalyst robot that combines Gazebo Sim, MoveIt 2, and Python control nodes for motion planning and execution. It includes robot simulation, trajectory streaming, pose-based MoveIt control, and a static RGB/depth/stereo camera rig for perception and visualization.',
    tags: ['Robotics', 'ROS', 'Moveit', 'Gazebo'],
    focus: 'ROS 2 motion planning, trajectory execution, and perception-driven robotics simulation.',
    link: 'https://github.com/El7agAdel/Catalyst-CRS-ROS-Humble',
    category: 'Robotics',
    featured: false,
    year: 2026,
    image: img_catalystros2_png,
  },
  {
    index: 17,
    title: 'Abb IRB120 ROS2 Humble',
    subtitle: 'Robotics · ROS',
    summary:
      'Abb-IRB120-ROS-Humble is a ROS 2 Humble simulation and motion-planning project for the ABB IRB120 robot, built with Gazebo Sim and MoveIt 2. It includes robot control, trajectory execution, and a static RGB/depth/stereo camera rig for visualization and perception experiments.',
    tags: ['Robotics', 'ROS', 'Moveit', 'Gazebo'],
    focus: 'Robot simulation, motion planning, and perception integration for the ABB IRB120 in ROS 2.',
    link: 'https://github.com/El7agAdel/Abb-IRB120-ROS-Humble',
    category: 'Robotics',
    featured: false,
    year: 2026,
    image: img_abbros2_png,
  },
  // // --- Placeholders for what you told me you focus on (fill when ready) ---
  // {
  //   title: 'SLAM / Robotics Research (Masters)',
  //   subtitle: 'SLAM · Robotics · Research',
  //   summary:
  //     'Ongoing research work during M.Sc. (add your thesis topic, datasets, and any public artifacts).',
  //   tags: ['SLAM', 'Robotics', 'Sensor Fusion'],
  //   focus: 'Tracking robustness and map consistency under real-world sensor noise.',
  //   link: '#',
  //   category: 'SLAM & Robotics',
  //   featured: false,
  //   year: 2026,
  //   draft: true,
  // },
]
