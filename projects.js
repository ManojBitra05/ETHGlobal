import React from 'react'

import { Helmet } from 'react-helmet'

import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="projects-projects">
        <div className="projects-frame25">
          <div className="projects-frame20">
            <div className="projects-status-bari-phone14">
              <div className="projects-left-side">
                <div className="projects-frame-status-bartime">
                  <span className="projects-text10 DefaultBoldBody">
                    <span>9:41</span>
                  </span>
                </div>
              </div>
              <div className="projects-right-side">
                <div className="projects-battery">
                  <img
                    src="/external/outlinei213-aaua.svg"
                    alt="OutlineI213"
                    className="projects-outline"
                  />
                  <img
                    src="/external/batteryendi213-ovvg.svg"
                    alt="BatteryEndI213"
                    className="projects-battery-end"
                  />
                  <img
                    src="/external/filli213-ibwk.svg"
                    alt="FillI213"
                    className="projects-fill"
                  />
                </div>
                <img
                  src="/external/wifii213-6nzq.svg"
                  alt="WifiI213"
                  className="projects-wifi"
                />
                <img
                  src="/external/iconmobilesignali213-j50m.svg"
                  alt="IconMobileSignalI213"
                  className="projects-icon-mobile-signal"
                />
              </div>
            </div>
          </div>
          <div className="projects-frame24">
            <div className="projects-tabs">
              <div className="projects-tab1">
                <span className="projects-text12 BodyBase">
                  <span>Ongoing</span>
                </span>
              </div>
              <div className="projects-tab2">
                <span className="projects-text14 BodyBase">
                  <span>Completed</span>
                </span>
              </div>
            </div>
            <div className="projects-frame19">
              <div className="projects-menu-item1">
                <img
                  src="/external/dollarsign2130-9y9m.svg"
                  alt="Dollarsign2130"
                  className="projects-dollarsign"
                />
                <div className="projects-body1">
                  <div className="projects-row1">
                    <span className="projects-text16 BodyBase">
                      <span>Fountain Repair</span>
                    </span>
                    <div className="projects-menu-shortcut1">
                      <span className="projects-text18 SingleLineBodySmallStrong">
                        <span>Funding Released</span>
                      </span>
                    </div>
                  </div>
                  <span className="projects-text20 BodySmall">
                    <span>
                      Central park fountain requires extensive repairs including
                      pump replacement, plumbing system overhaul, and structural
                      repairs.
                    </span>
                  </span>
                  <div className="projects-tag1">
                    <span className="projects-text22 SingleLineBodyBase">
                      <span>Plumbing</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="projects-menu-item2">
                <img
                  src="/external/table2131-0m1e.svg"
                  alt="Table2131"
                  className="projects-table"
                />
                <div className="projects-body2">
                  <div className="projects-row2">
                    <span className="projects-text24 BodyBase">
                      <span>Playground Equipment Maintenance</span>
                    </span>
                    <div className="projects-menu-shortcut2">
                      <span className="projects-text26 SingleLineBodySmallStrong">
                        <span>Contractor assigned</span>
                      </span>
                    </div>
                  </div>
                  <span className="projects-text28 BodySmall">
                    <span>
                      Annual safety inspection and maintenance of playground
                      equipment in Redwood Park.
                    </span>
                  </span>
                  <div className="projects-tag2">
                    <span className="projects-text30 SingleLineBodyBase">
                      <span>Safety</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="projects-navigation-button-list">
          <button className="projects-navigation-button1">
            <img
              src="/external/activityi267-1rk.svg"
              alt="ActivityI267"
              className="projects-activity"
            />
            <span className="projects-text32 SingleLineBodySmallStrong">
              <span>Proposals</span>
            </span>
          </button>
          <button className="projects-navigation-button2">
            <img
              src="/external/stari267-e0v.svg"
              alt="StarI267"
              className="projects-star"
            />
            <span className="projects-text34 SingleLineBodySmallStrong">
              <span>Projects</span>
            </span>
          </button>
        </button>
      </div>
    </div>
  )
}

export default Projects
