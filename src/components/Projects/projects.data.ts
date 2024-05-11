import { TagType } from '../Tag';

const projectsData: {
  id: string;
  title: string;
  description: string | string[];
  tags: TagType[];
  code: string;
  demo: string;
  image: string;
  color: string;
  colorLight: string;
  video?: string;
}[] = [
  {
    id: 'typingapp',
    title: 'Typing app',
    description: [
      'Custom made smooth typing input that displays live errors.',
      "Different typing modes, such as 'time', 'words', 'quote'.",
      'Multiplayer 1v1 mode to play against your friends.',
      "Fetches Random quotes using 'quotable' API.",
      'Results after typing is done, including WPM, Accuracy, Errors, Interactive Dashboard.',
      'User can customize the app to their liking.',
      'Various app color themes.',
      'User can create account that will be saved on database, including Google OAuth & GitHub OAuth.',
      'Personal stats, history and customizations will be saved to the account.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Sass',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Google OAuth',
      'GitHub OAuth',
    ],
    color: '254, 105, 105',
    colorLight: 'rgba(254, 105, 105, .125)',
    image: 'typingapp.png',
    video: 'typingapp.mp4',
    code: 'https://github.com/LukaKobaidze/typing-app',
    demo: 'https://typing-app.fly.dev/',
  },
  {
    id: 'spotify',
    title: 'Spotify Clone',
    description: [
      'Using official Spotify API to get large library of tracks.',
      'Handling large data of albums, artists, tracks, custom playlists and more.',
      'Using Genius API to get lyrics for any track page.',
      'Includes your personal library, where you can save your favorite albums, playlist, artists and tracks.',
      'Custom made player that plays tracks',
      'Resizable sidebar.',
    ],
    tags: ['Next.js', 'TypeScript', 'Sass', 'Spotify API', 'Genius API'],
    color: '30, 215, 96',
    colorLight: 'rgba(30, 215, 96, 0.125)',
    image: 'spotify.png',
    code: 'https://github.com/LukaKobaidze/spotify',
    demo: 'https://lukakobaidze-spotify.vercel.app/',
  },
  {
    id: 'audiophile',
    title: 'Audiophile E-Commerce',
    description: [
      'Add/Remove products from the cart.',
      'Edit product quantity in the cart.',
      'Checkout form.',
      'See checkout totals depending on products in the cart.',
      'See an order confirmation modal with an order summary after checking out.',
      'Cypress end-to-end tests.',
    ],
    tags: ['Next.js', 'TypeScript', 'Sass', 'Cypress'],
    color: '216, 125, 74',
    colorLight: 'rgba(216, 125, 74, 0.25)',
    image: 'audiophile.jpg',
    video: 'audiophile.mp4',
    code: 'https://github.com/LukaKobaidze/audiophile',
    demo: 'https://lukakobaidze-audiophile.vercel.app/',
  },
  {
    id: 'taskmanagement',
    title: 'Task Management',
    description: [
      'Create, read, update, and delete boards and tasks.',
      'Receive form validations when trying to create/edit boards and tasks.',
      'Mark subtasks as complete and move tasks between columns.',
      'Hide/show the board sidebar.',
      'Drag and Drop tasks to change their status and re-order them in a column.',
      'Toggle the theme between light/dark modes.',
      'Cypress end-to-end tests.',
    ],
    tags: ['React', 'TypeScript', 'Sass', 'Redux', 'Cypress'],
    color: '99, 95, 199',
    colorLight: 'rgba(99, 95, 199, .175)',
    image: 'taskmanagement.png',
    video: 'taskmanagement.mp4',
    code: 'https://github.com/LukaKobaidze/task-management',
    demo: 'https://lukakobaidze-kanban.netlify.app/',
  },
  {
    id: 'productfeedback',
    title: 'Product Feedback',
    description: [
      'Create, read, update, and delete product feedback requests.',
      'Receive form validations when trying to create/edit feedback requests.',
      'Sort suggestions by most/least upvotes and most/least comments.',
      'Filter suggestions by category.',
      'Add comments and replies to a product feedback request.',
      'Upvote product feedback requests.',
    ],
    tags: ['React', 'TypeScript', 'Sass', 'Jest', 'Testing Library', 'CRUD'],
    color: '173, 31, 234',
    colorLight: 'rgba(173, 31, 234, .2)',
    image: 'productfeedback.png',
    code: 'https://github.com/LukaKobaidze/product-feedback',
    demo: 'https://lukakobaidze-feedbacks.netlify.app/',
  },
  {
    id: 'chess',
    title: 'Chess',
    description: [
      'Play against CPU or pick ”Freeplay” mode to control both pieces.',
      'Ability to Customize your board. Set different types of Pieces and Boards (SVGs), change size of a board.',
      'Calculates and displays all valid moves of pieces.',
      'Drag and Drop functionality.',
      'Sidebar that displays history of a match (using chess notation rules), user can go to any previous move that was made in that match, which will be displayed on a board.',
    ],
    tags: ['React', 'TypeScript', 'Sass', 'Drag-n-Drop'],
    color: '71, 122, 145',
    colorLight: '#1a2a33',
    image: 'chess.jpg',
    video: 'chess.mp4',
    code: 'https://github.com/LukaKobaidze/chess',
    demo: 'https://lukakobaidze-chess.netlify.app/',
  },
  {
    id: 'markdown',
    title: 'Markdown',
    description: [
      'Create, Read, Update, and Delete markdown documents',
      'Create and name documents & folders',
      'Edit the markdown of a document and see the formatted preview of the content',
      'Resize `markdown` and `preview` views to your liking.',
      "View the optimal layout for the app depending on their device's screen size",
      'use localStorage to save the current state in the browser that persists when the browser is refreshed',
    ],
    tags: ['React', 'TypeScript', 'Sass', 'Zustand', 'Immer'],
    color: '228, 102, 67',
    colorLight: 'rgba(228, 102, 67, .25)',
    image: 'markdown.png',
    code: 'https://github.com/LukaKobaidze/markdown',
    demo: 'https://lukakobaidze-markdown.netlify.app/',
  },
];

export default projectsData;
