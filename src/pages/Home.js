import React, { useState, useContext, useEffect } from 'react';
import { JobsContext } from '../App';
import { JobBoard, JobThumbnail, SearchBar } from '../components';
import moment from 'moment';

const Home = () => {
  const {
    data: { jobs },
    BASE_URL,
    loading,
    resultLength,
    searchURL,
    fetchGithubAPI,
    mobileFilter,
  } = useContext(JobsContext);
  const [anotherPage, setAnotherPage] = useState(2);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [scroll, setScroll] = useState(window.pageYOffset);

  function useWindowSize() {
    useEffect(() => {
      function updateScrollHeight() {
        setWindowHeight(window.innerHeight);
        setScroll(window.pageYOffset);
      }
      window.addEventListener('scroll', updateScrollHeight);
      updateScrollHeight();
      return () => window.removeEventListener('scroll', updateScrollHeight);
    }, [windowHeight, scroll]);

    return scroll, windowHeight;
  }

  useEffect(() => {
    setAnotherPage(2);
  }, [resultLength < 50]);

  const loadMore = () => {
    setAnotherPage(anotherPage + 1);

    const endpoint = searchURL
      ? `${searchURL}&page=${anotherPage}`
      : `${BASE_URL}.json?page=${anotherPage}`;

    fetchGithubAPI(endpoint);
    sessionStorage.setItem('search URL', endpoint);
  };

  useWindowSize();

  return (
    <div className='home__page'>
      <SearchBar />
      {loading && !searchURL && !mobileFilter}
      {loading && searchURL && !mobileFilter}

      {jobs && (
        <>
          <JobBoard>
            {jobs.map((job) => (
              <JobThumbnail
                key={job.id}
                id={job.id}
                logo={job.company_logo}
                date={moment(new Date(job.created_at)).fromNow()}
                lengthTerm={job.type}
                company={job.company}
                jobTitle={job.title}
                location={job.location}
              />
            ))}
            {anotherPage > 2 && !searchURL && loading}
            {anotherPage > 2 && searchURL && loading}
          </JobBoard>

          {resultLength >= 50 && !mobileFilter && (
            <button className='load__more__btn btn' onClick={loadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
