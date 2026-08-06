export const categories = ['all', 'widget', 'systems', 'game'];

export const projectsData = [
  {
    id: 1,
    title: 'Weather Application',
    description: 'Desktop weather application with real-time forecasts',
    longDesc:
      'A Python-based desktop weather application built with PyQt5 that fetches real-time weather information using the OpenWeather API. It features a clean graphical interface, location-based weather search, and detailed weather conditions.',
    tech: ['Python', 'PyQt5', 'OpenWeather API', 'Requests'],
    category: 'widget',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/harsha-3113/WEATHER-FORECAST'
  },
  {
    id: 2,
    title: 'Binary Search Tree',
    description: 'Implementation of a Binary Search Tree in C',
    longDesc:
      'A C implementation of a Binary Search Tree supporting insertion, deletion, searching, and tree traversals. The project focuses on efficient memory management, pointer manipulation, and core data structure concepts.',
    tech: ['C', 'Data Structures', 'Pointers'],
    category: 'systems',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/harsha-3113/BINARY-SEARCH-TREE'
  },
  {
    id: 3,
    title: 'Bitmap Library',
    description: 'Custom bitmap manipulation library in C',
    longDesc:
      'A lightweight bitmap library developed in C for efficient bit-level operations. The project provides utilities for setting, clearing, toggling, and querying individual bits while emphasizing performance and low-level programming concepts.',
    tech: ['C', 'Bit Manipulation', 'Memory Management'],
    category: 'systems',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/harsha-3113/BITMAP'
  },
  {
    id: 4,
    title: 'Alarm Application',
    description: 'Desktop alarm clock with audio',
    longDesc:
      'A Python desktop alarm application featuring a graphical interface, customizable alarm scheduling, and audio playback. Built to provide a simple and reliable desktop alarm experience.',
    tech: ['Python', 'PyQt5', 'Pygame'],
    category: 'widget',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/harsha-3113/BINARY-SEARCH-TREE'
  },
  {
    id: 5,
    title: 'NOKIA Snake Game',
    description: 'Classic Snake game inspired by Nokia phones',
    longDesc:
      'A recreation of the classic Nokia Snake game developed in Python using PyQt5 and Pygame. The project features smooth gameplay, score tracking, responsive controls, and a nostalgic user interface while demonstrating game development fundamentals.',
    tech: ['Python', 'PyQt5', 'Pygame'],
    category: 'game',
    featured: false,
    liveUrl: '#',
    githubUrl: '#',
    disabled: true
  }
];