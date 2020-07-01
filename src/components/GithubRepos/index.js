import React, { useEffect, useState, useCallback } from "react";
import { getGithubRepos } from "../../api/github";
import { useFetchHandler } from "../../hooks";


// error
// loading
// caching

const GithubRepos = () => {
  const [page, setPage] = useState(1);
  const { data, error, handleFetch } =  useFetchHandler(page);

  useEffect(() => {
    handleFetch(getGithubRepos(page), page);
  }, [page]);

  const renderTable = (repositories) => {
    return <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Stars</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {repositories &&
          repositories.map((repository, index) => (
            <tr key={repository.id}>
              <td>{index + 1}</td>
              <td>{repository.name}</td>
              <td>{repository.owner.login}</td>
              <td>{repository.stargazers_count}</td>
              <td>
                <a target="_blank" href={repository.html_url}>
                  {repository.full_name}
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>;
  };

  const incrementPage = useCallback(() => {
    setPage(page + 1);
  }, [setPage, page]);

  const decrementPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [setPage, page]);

  const isLastPage = Boolean(data && !data.incomplete_results);

  return (
    <>
      <h1>Github Repository List {page}</h1>
      <div className="row">
        <button disabled={page === 1} onClick={decrementPage}>Previous</button>
         <button disabled={!isLastPage} onClick={incrementPage}>Next</button>
      </div>
      {data && data.items && renderTable(data.items)}
    </>
  );
};

export default GithubRepos;
