const API_ENDPOINT =
  "https://api.github.com/search/repositories?q=apache+language:scala&sort=stars&order=desc&per_page=10";

const getGithubRepos = (page) => {
  return fetch(`${API_ENDPOINT}&page=${page}`).then(response => {
    if (!response.ok) {
      throw new Error("API error");
    }
    return response.json();
  });
};

export { getGithubRepos };
