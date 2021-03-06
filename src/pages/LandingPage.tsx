// Core
import React, { FunctionComponent, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { CurrentUserCtx } from '../App';
// Styles
import './LandingPage.scss';
// Components
import MobileHeader from '../layout/MobileHeader';
import LanguageSelector from '../layout/LanguageSelector';
import PageBody from '../layout/PageBody';
// import Icon from '../components/Icon';
import PageFooter from '../layout/PageFooter';
// import Loader from '../components/Loader';
// import SearchAutocomplete from '../components/locations/SearchAutocomplete';

// Component
const LandingPage: FunctionComponent<RouteComponentProps> = ({ history }) => {
  // const [currentUser, setCurrentUser] = useContext(CurrentUserCtx);
  // const [isLoadingLocation, setLoadingLocation] = useState(false);
  // const [autofocus, setAutofocus] = useState(false);
  // const { t } = useTranslation();

  // When user clicks to get location
  // const handleGetGeo = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       // Found! Set user's location in latLng
  //       setCurrentUser(currentUser => ({
  //         ...currentUser,
  //         hasGeoAccess: true,
  //         latLng: [position.coords.latitude, position.coords.longitude],
  //       }));
  //       // Go to locations page
  //       history.push('/locations');
  //     },
  //     err => {
  //       setAutofocus(true);
  //       setLoadingLocation(false);
  //       // Geolocation error
  //       setCurrentUser(currentUser => ({
  //         ...currentUser,
  //         hasGeoAccess: false,
  //       }));
  //       console.error('Error getting location: ', err.message);
  //     },
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 6500,
  //     }
  //   );
  // };

  return (
    <Fragment>
      <MobileHeader>
        <LanguageSelector alignRight light />
      </MobileHeader>
      <PageBody>
        <div className="LandingPage">
          <div className="jumbotron">
            <div className="fader" />
            <h1>
              The 2020 Summer Meals Program has concluded.
              {/* {t('landing.headline')} <span>{t('landing.headlineBold')}</span> */}
            </h1>
            {/* Find locations button */}
            {/* {currentUser.hasGeoAccess !== false && (
              <button
                className="find-location-btn"
                onClick={e => {
                  e.preventDefault();
                  setLoadingLocation(true);
                  handleGetGeo();
                }}
              >
                {isLoadingLocation ? (
                  <Loader />
                ) : (
                  <Fragment>
                    <Icon icon="my_location" />
                    {t('landing.findLocation')}
                  </Fragment>
                )}
              </button>
            )} */}
            {/* Type in location */}
            {/* {currentUser.hasGeoAccess === false && (
              <div className="location-input">
                <div className="label">{t('landing.couldNotFind')}</div>
                <SearchAutocomplete history={history} autofocus={autofocus} redirectOnSuccess />
              </div>
            )} */}
          </div>
          <div className="wavebg" />
          <div className="inverted-copy">
            <p>
              This site is not currently being updated.{' '}
              <a href="https://app.smartsheet.com/b/form/a1aa6b77e96542acb37c15636c1d152f">
                Sign up
              </a>{' '}
              to be the first to know about new meal sites as they are added for COVID-19 response
              or Summer Meals 2021.
            </p>
            {/* <p>{t('landing.supportingCopy')}</p> */}
          </div>
          <PageFooter />
        </div>
      </PageBody>
    </Fragment>
  );
};

// Export
export default LandingPage;
