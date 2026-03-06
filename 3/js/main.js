const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Елена',
  'Дмитрий',
  'София',
  'Никита',
  'Ольга'
];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Avatars = {
  MIN: 1,
  MAX: 6,
};

const Comments = {
  MIN: 1,
  MAX: 30,
};

const POST_COUNT = 25;

let commentIdCounter = 1;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(Avatars.MIN, Avatars.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Фото №${id}`,
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInteger(Comments.MIN, Comments.MAX) }, createComment),
});

const createPhotos = () => Array.from({ length: POST_COUNT }, (_, index) => createPhoto(index + 1));

createPhotos();
