import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';
import project3Img from './assets/project3.png';
import project4Img from './assets/project4.png';
import type { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    id: 1,
    title: 'App Tasks',
    description: 'Brief description of project 1.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    imgSrc: project1Img,
    githubLink: 'https://github.com/Yko-koshka/app-task-angular.github.io',
    demoLink: 'https://rococo-stroopwafel-5c3b4e.netlify.app/',
  },
  {
    id: 2,
    title: 'Comfy Store',
    description: 'Brief description of project 2.',
    stack: ['React', 'React Router', 'Redux', 'Vite', 'daisyUI', 'Tailwind'],
    imgSrc: project2Img,
    githubLink: 'https://github.com/Yko-koshka/react-comfy-store',
    demoLink: 'https://superlative-naiad-f687ef.netlify.app/',
  },
  {
    id: 3,
    title: 'App Weather',
    description: 'Brief description of project 3.',
    stack: ['React', 'CSS'],
    imgSrc: project3Img,
    githubLink: 'https://github.com/Yko-koshka/react-weather-app',
    demoLink: 'https://verdant-tanuki-0af510.netlify.app/',
  },
  {
    id: 4,
    title: 'App Dictionary',
    description: 'Brief description of project 4.',
    stack: ['React', 'CSS'],
    imgSrc: project4Img,
    githubLink: 'https://github.com/Yko-koshka/react-dictionary-app',
    demoLink: 'https://bejewelled-bienenstitch-4e6407.netlify.app/',
  },
];
