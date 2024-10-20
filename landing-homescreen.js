import React from 'react'

import { Helmet } from 'react-helmet'

import './landing-homescreen.css'

const LandingHomescreen = (props) => {
  return (
    <div className="landing-homescreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="landing-homescreen-landing-homescreen">
        <div className="landing-homescreen-frame25">
          <div className="landing-homescreen-group9">
            <div className="landing-homescreen-frame20">
              <div className="landing-homescreen-status-bari-phone14">
                <div className="landing-homescreen-left-side">
                  <div className="landing-homescreen-frame-status-bartime">
                    <span className="landing-homescreen-text10 DefaultBoldBody">
                      <span>9:41</span>
                    </span>
                  </div>
                </div>
                <div className="landing-homescreen-right-side">
                  <div className="landing-homescreen-battery">
                    <img
                      src="/external/outlinei237-yurn.svg"
                      alt="OutlineI237"
                      className="landing-homescreen-outline"
                    />
                    <img
                      src="/external/batteryendi237-c8qd.svg"
                      alt="BatteryEndI237"
                      className="landing-homescreen-battery-end"
                    />
                    <img
                      src="/external/filli237-wnsm.svg"
                      alt="FillI237"
                      className="landing-homescreen-fill"
                    />
                  </div>
                  <img
                    src="/external/wifii237-rmc9.svg"
                    alt="WifiI237"
                    className="landing-homescreen-wifi"
                  />
                  <img
                    src="/external/iconmobilesignali237-xk7p.svg"
                    alt="IconMobileSignalI237"
                    className="landing-homescreen-icon-mobile-signal"
                  />
                </div>
              </div>
              <div className="landing-homescreen-avatar-block">
                <div className="landing-homescreen-avatar">
                  <img
                    src="/external/shapei237-uepa-200w.png"
                    alt="ShapeI237"
                    className="landing-homescreen-shape"
                  />
                </div>
                <div className="landing-homescreen-info">
                  <span className="landing-homescreen-text12 BodyStrong">
                    <span>Sara Menon</span>
                  </span>
                  <span className="landing-homescreen-text14 BodyBase">
                    <span>Housing Association member</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="landing-homescreen-button">
              <img
                src="/external/edit3i237-kas8.svg"
                alt="Edit3I237"
                className="landing-homescreen-edit3"
              />
              <span className="landing-homescreen-text16 SingleLineBodyBase">
                <span>
                  Create new project proposal
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </button>
            <div className="landing-homescreen-menu-separator">
              <img
                src="/external/rulei237-hi5t-200h.png"
                alt="RuleI237"
                className="landing-homescreen-rule"
              />
            </div>
          </div>
          <div className="landing-homescreen-frame24">
            <div className="landing-homescreen-tabs">
              <div className="landing-homescreen-tab1">
                <span className="landing-homescreen-text18 BodyBase">
                  <span>Open</span>
                </span>
              </div>
              <div className="landing-homescreen-tab2">
                <span className="landing-homescreen-text20 BodyBase">
                  <span>Closed</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="landing-homescreen-text22 BodyBase">
          <span>No open proposals</span>
        </span>
        <button className="landing-homescreen-navigation-button-list">
          <button className="landing-homescreen-navigation-button1">
            <img
              src="/external/activityi237-fdgbp.svg"
              alt="ActivityI237"
              className="landing-homescreen-activity"
            />
            <span className="landing-homescreen-text24 SingleLineBodySmallStrong">
              <span>Proposals</span>
            </span>
          </button>
          <button className="landing-homescreen-navigation-button2">
            <img
              src="/external/stari237-kur.svg"
              alt="StarI237"
              className="landing-homescreen-star"
            />
            <span className="landing-homescreen-text26 SingleLineBodySmallStrong">
              <span>Projects</span>
            </span>
          </button>
        </button>
      </div>
    </div>
  )
}

export default LandingHomescreen
