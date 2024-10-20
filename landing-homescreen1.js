import React from 'react'

import { Helmet } from 'react-helmet'

import './landing-homescreen1.css'

const LandingHomescreen1 = (props) => {
  return (
    <div className="landing-homescreen1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="landing-homescreen1-landing-homescreen">
        <button className="landing-homescreen1-navigation-button-list">
          <button className="landing-homescreen1-navigation-button1">
            <img
              src="/external/activityi341-eggr.svg"
              alt="ActivityI341"
              className="landing-homescreen1-activity"
            />
            <span className="landing-homescreen1-text10 SingleLineBodySmallStrong">
              <span>Proposals</span>
            </span>
          </button>
          <button className="landing-homescreen1-navigation-button2">
            <img
              src="/external/stari341-0lpr.svg"
              alt="StarI341"
              className="landing-homescreen1-star"
            />
            <span className="landing-homescreen1-text12 SingleLineBodySmallStrong">
              <span>Projects</span>
            </span>
          </button>
        </button>
        <div className="landing-homescreen1-frame25">
          <div className="landing-homescreen1-group9">
            <div className="landing-homescreen1-frame20">
              <div className="landing-homescreen1-status-bari-phone14">
                <div className="landing-homescreen1-left-side">
                  <div className="landing-homescreen1-frame-status-bartime">
                    <span className="landing-homescreen1-text14 DefaultBoldBody">
                      <span>9:41</span>
                    </span>
                  </div>
                </div>
                <div className="landing-homescreen1-right-side">
                  <div className="landing-homescreen1-battery">
                    <img
                      src="/external/outlinei341-hn9f.svg"
                      alt="OutlineI341"
                      className="landing-homescreen1-outline"
                    />
                    <img
                      src="/external/batteryendi341-6bt8.svg"
                      alt="BatteryEndI341"
                      className="landing-homescreen1-battery-end"
                    />
                    <img
                      src="/external/filli341-k5s.svg"
                      alt="FillI341"
                      className="landing-homescreen1-fill"
                    />
                  </div>
                  <img
                    src="/external/wifii341-22em.svg"
                    alt="WifiI341"
                    className="landing-homescreen1-wifi"
                  />
                  <img
                    src="/external/iconmobilesignali341-752s.svg"
                    alt="IconMobileSignalI341"
                    className="landing-homescreen1-icon-mobile-signal"
                  />
                </div>
              </div>
              <div className="landing-homescreen1-avatar-block">
                <div className="landing-homescreen1-avatar">
                  <img
                    src="/external/shapei341-dbbf-200w.png"
                    alt="ShapeI341"
                    className="landing-homescreen1-shape"
                  />
                </div>
                <div className="landing-homescreen1-info">
                  <span className="landing-homescreen1-text16 BodyStrong">
                    <span>Sara Menon</span>
                  </span>
                  <span className="landing-homescreen1-text18 BodyBase">
                    <span>Housing Association member</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="landing-homescreen1-button">
              <img
                src="/external/edit3i341-yv9l.svg"
                alt="Edit3I341"
                className="landing-homescreen1-edit3"
              />
              <span className="landing-homescreen1-text20 SingleLineBodyBase">
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
            <div className="landing-homescreen1-menu-separator">
              <img
                src="/external/rulei341-rnl-200h.png"
                alt="RuleI341"
                className="landing-homescreen1-rule"
              />
            </div>
          </div>
          <div className="landing-homescreen1-frame241">
            <div className="landing-homescreen1-tabs">
              <div className="landing-homescreen1-tab1">
                <span className="landing-homescreen1-text22 BodyBase">
                  <span>Open</span>
                </span>
              </div>
              <div className="landing-homescreen1-tab2">
                <span className="landing-homescreen1-text24 BodyBase">
                  <span>Closed</span>
                </span>
              </div>
            </div>
            <div className="landing-homescreen1-frame191">
              <div className="landing-homescreen1-frame242">
                <div className="landing-homescreen1-frame192">
                  <div className="landing-homescreen1-menu-item">
                    <img
                      src="/external/loader3414-05y8.svg"
                      alt="Loader3414"
                      className="landing-homescreen1-loader"
                    />
                    <div className="landing-homescreen1-body">
                      <div className="landing-homescreen1-row">
                        <span className="landing-homescreen1-text26 BodyBase">
                          <span>Fountain Repair</span>
                        </span>
                        <div className="landing-homescreen1-menu-shortcut">
                          <span className="landing-homescreen1-text28 SingleLineBodySmallStrong">
                            <span>Voting In Progress</span>
                          </span>
                        </div>
                      </div>
                      <span className="landing-homescreen1-text30 BodySmall">
                        <span>
                          Central park fountain requires extensive repairs
                          including pump replacement, plumbing system overhaul,
                          and structural repairs.
                        </span>
                      </span>
                      <div className="landing-homescreen1-tag">
                        <span className="landing-homescreen1-text32 SingleLineBodyBase">
                          <span>Plumbing</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHomescreen1
