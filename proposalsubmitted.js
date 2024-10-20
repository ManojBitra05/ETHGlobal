import React from 'react'

import { Helmet } from 'react-helmet'

import './proposalsubmitted.css'

const Proposalsubmitted = (props) => {
  return (
    <div className="proposalsubmitted-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="proposalsubmitted-proposalsubmitted">
        <img
          src="/external/rectangle253010-kxzq-900h.png"
          alt="Rectangle253010"
          className="proposalsubmitted-rectangle25"
        />
        <div className="proposalsubmitted-group10">
          <span className="proposalsubmitted-text1 Heading">
            <span>Proposal Submitted</span>
          </span>
          <img
            src="/external/checksquare3098-o60u.svg"
            alt="Checksquare3098"
            className="proposalsubmitted-checksquare"
          />
        </div>
        <div className="proposalsubmitted-group9">
          <div className="proposalsubmitted-frame20">
            <div className="proposalsubmitted-status-bari-phone14">
              <div className="proposalsubmitted-left-side">
                <div className="proposalsubmitted-frame-status-bartime">
                  <span className="proposalsubmitted-text3 DefaultBoldBody">
                    <span>9:41</span>
                  </span>
                </div>
              </div>
              <div className="proposalsubmitted-right-side">
                <div className="proposalsubmitted-battery">
                  <img
                    src="/external/outlinei309-e22c.svg"
                    alt="OutlineI309"
                    className="proposalsubmitted-outline"
                  />
                  <img
                    src="/external/batteryendi309-2uvn.svg"
                    alt="BatteryEndI309"
                    className="proposalsubmitted-battery-end"
                  />
                  <img
                    src="/external/filli309-jty8.svg"
                    alt="FillI309"
                    className="proposalsubmitted-fill"
                  />
                </div>
                <img
                  src="/external/wifii309-mxwi.svg"
                  alt="WifiI309"
                  className="proposalsubmitted-wifi"
                />
                <img
                  src="/external/iconmobilesignali309-0yg.svg"
                  alt="IconMobileSignalI309"
                  className="proposalsubmitted-icon-mobile-signal"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/external/hoainsightlogo213496-z8p-200h.png"
          alt="HOAInsightLogo213496"
          className="proposalsubmitted-hoa-insight-logo21"
        />
        <button className="proposalsubmitted-button">
          <span className="proposalsubmitted-text5 SingleLineBodyBase">
            <span>Done</span>
          </span>
          <img
            src="/external/checki301-0qr.svg"
            alt="CheckI301"
            className="proposalsubmitted-check"
          />
        </button>
      </div>
    </div>
  )
}

export default Proposalsubmitted
