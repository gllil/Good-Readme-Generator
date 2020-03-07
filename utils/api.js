const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL)
        .then(response => {
            const data = response.data;
        })
        .catch(err => {
            if (err) throw Error;
        })

  }
};

module.exports = api;
