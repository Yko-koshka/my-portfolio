import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';
import project3Img from './assets/project3.png';
import project4Img from './assets/project4.png';
import type { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    id: 1,
    title: 'App Tasks',
    description:
      'A task management app built with Angular. Features include task creation, editing, and deletion with real-time UI updates using RxJS. Styled with custom SCSS and component-based architecture.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    imgSrc: project1Img,
    githubLink: 'https://github.com/Yko-koshka/app-task-angular.github.io',
    demoLink: 'https://rococo-stroopwafel-5c3b4e.netlify.app/',
    tags: ['dashboard', 'productivity', 'angular'],
  },
  {
    id: 2,
    title: 'Comfy Store',
    description:
      'An e-commerce web app inspired by modern shopping experiences. Built with React, Redux, and Tailwind. Features include cart, product filtering, routing, and smooth UI transitions using daisyUI.',
    stack: ['React', 'React Router', 'Redux', 'Vite', 'daisyUI', 'Tailwind'],
    imgSrc: project2Img,
    githubLink: 'https://github.com/Yko-koshka/react-comfy-store',
    demoLink: 'https://superlative-naiad-f687ef.netlify.app/',
    tags: ['ecommerce', 'frontend', 'react'],
  },
  {
    id: 3,
    title: 'App Weather',
    description:
      'A lightweight weather forecast app powered by a public API. Users can search any city to view real-time temperature, humidity, and condition icons. Built with React and vanilla CSS.',
    stack: ['React', 'CSS'],
    imgSrc: project3Img,
    githubLink: 'https://github.com/Yko-koshka/react-weather-app',
    demoLink: 'https://verdant-tanuki-0af510.netlify.app/',
    tags: ['weather', 'api', 'react'],
  },
  {
    id: 4,
    title: 'App Dictionary',
    description:
      'A dictionary app allowing users to search for word meanings, phonetics, and audio pronunciation. Built with React and CSS, it fetches data from a public dictionary API.',
    stack: ['React', 'CSS'],
    imgSrc: project4Img,
    githubLink: 'https://github.com/Yko-koshka/react-dictionary-app',
    demoLink: 'https://bejewelled-bienenstitch-4e6407.netlify.app/',
    tags: ['dictionary', 'api', 'react'],
  },
];
