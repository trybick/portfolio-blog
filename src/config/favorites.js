import { IoIosMic, IoIosMusicalNotes, IoIosVideocam, IoMdPeople } from 'react-icons/io';

export default [
  {
    title: 'Music Artists',
    items: ['Radiohead', 'Muse', 'Hammock', 'Above & Beyond'],
    icon: IoMdPeople,
  },
  {
    title: 'Songs',
    items: [
      'When I Was Done Dying - Dan Deacon',
      'Weird Fishes - Radiohead',
      'I Can Almost See You - Hammock',
      'Glósóli - Sigur Ros',
    ],
    icon: IoIosMusicalNotes,
  },
  {
    title: 'Movies',
    items: ['Only Lovers Left Alive', 'mid90s', 'Roma', 'Coherence'],
    icon: IoIosVideocam,
  },
  {
    title: 'Podcasts',
    items: ['Syntax FM', 'Darknet Diaries', `Dan Carlin's Hardcore History`],
    icon: IoIosMic,
  },
];
