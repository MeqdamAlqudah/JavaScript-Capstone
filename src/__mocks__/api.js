/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const reciveCommentsApi = (id) => {
  const comments = Promise.resolve([{ username: '', creation_date: '2021-12-23', comment: '' }, { username: 'Meqdam', comment: 'great movie', creation_date: '2021-12-23' }]);
  const json = () => comments;
  const movie = { json };
  const data = Promise.resolve(movie);
  return data;
};

export default reciveCommentsApi;