export const setLikes = (arr) => {
  localStorage.setItem('likes', JSON.stringify(arr));
  console.log('setLikes', arr);
};

export const getLikes = () => {
  let likes = [];

  if (localStorage.getItem('likes')) {
    const likesStorage = JSON.parse(localStorage.getItem('likes'));

    likes = [...likes, ...likesStorage];
  }

  return likes;
};