function auth({ email, password }) {
  return { data: { token: 'token', user: 'user' } };
}

export default {
  auth,
};
