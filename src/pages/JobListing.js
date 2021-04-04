import React, { useState, useEffect, useContext } from 'react';
import { JobsContext } from '../App';
// import { Error } from '../components';

import moment from 'moment';

const JobListing = ({ match }) => {
  const {
    data: { jobs },
    loading,
  } = useContext(JobsContext);
  const [listing, setListing] = useState();

  useEffect(() => {
    jobs &&
      setListing(jobs.find((listing) => listing.id === match.params.jobID));
  }, [jobs, listing]);

  const cleanURL = (url) => {
    return (url =
      url && url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]);
  };

  const validCompanySite = (url) => {
    let valid = new RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
    return valid.test(url);
  };

  const applyNowLink = (link) => {
    let valid = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/;
    return link.match(valid)[1];
  };

  return (
    <>
      {loading}

      {listing && (
        <div className='job__listing'>
          <div className='job__listing__header'>
            <div className='header__image__container'>
              {listing.company_logo && (
                <img
                  src={listing.company_logo}
                  alt={`${listing.company} company logo`}
                />
              )}
            </div>
            <div className='header__textbox'>
              <div className='textbox__inner'>
                <h1 className='header__textbox__heading'>{listing.company}</h1>
                <p className='header__textbox__site'>{listing.company_url}</p>
              </div>
              <div
                className={`header__textbox__company-redirect ${
                  !validCompanySite(listing.company_url) ? 'invalid' : ''
                }`}>
                <a
                  className='btn'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={listing.company_url}>
                  Company site
                </a>
                <small>No company site</small>
              </div>
            </div>
          </div>
          <div className='job__listing__body'>
            <div className='body__heading'>
              <div className='body__heading__inner'>
                <p className='body__heading__time-type'>
                  <span className='body__heading__time'>
                    {' '}
                    {moment(new Date(listing.created_at)).fromNow()}
                  </span>
                  <span style={{ margin: '0 10px' }}>•</span>
                  <span className='body__heading__type'>{listing.type}</span>
                </p>
                <h2 className='body__heading__title'>{listing.title}</h2>
                <p className='body__heading__location'>{listing.location}</p>
              </div>
              <a
                className='body__heading__redirect btn'
                href={applyNowLink(listing.how_to_apply)}
                target='_blank'
                rel='noopener noreferrer'>
                Apply Now
              </a>
            </div>
            <div
              className='body__main'
              dangerouslySetInnerHTML={{ __html: listing.description }}
            />
          </div>
          <div className='job__listing__cta'>
            <h3 className='cta__heading'>How to Apply</h3>
            <br />
            <p
              className='cta__body'
              dangerouslySetInnerHTML={{ __html: listing.how_to_apply }}
            />
          </div>
          <footer className='job__listing__footer'>
            <div className='footer__textbox'>
              <h4 className='footer__textbox__position'>{listing.title}</h4>
              <small className='footer__textbox__company'>
                {listing.company}
              </small>
            </div>
            <a
              className='footer__btn btn'
              href={applyNowLink(listing.how_to_apply)}
              rel='noopener noreferrer'
              target='_blank'>
              Apply Now
            </a>
          </footer>
        </div>
      )}
    </>
  );
};

export default JobListing;
