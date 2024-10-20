import React from 'react'

import { Helmet } from 'react-helmet'

import './welcomescreen.css'

const Welcomescreen = (props) => {
  return (
    <div className="welcomescreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="welcomescreen-welcomescreen">
        <div className="welcomescreen-group2">
          <span className="welcomescreen-text1 TitlePage">
            <span>HOA Insight</span>
          </span>
          <img
            src="/external/hoainsightlogo113496-zzh-200h.png"
            alt="HOAInsightLogo113496"
            className="welcomescreen-hoa-insight-logo11"
          />
        </div>
        <div className="welcomescreen-status-bari-phone13">
          <div className="welcomescreen-left-side">
            <div className="welcomescreen-frame-status-bartime">
              <span className="welcomescreen-text3 DefaultBoldBody">
                <span>9:41</span>
              </span>
            </div>
          </div>
          <div className="welcomescreen-right-side">
            <div className="welcomescreen-battery">
              <img
                src="/external/outlinei349-zcyk.svg"
                alt="OutlineI349"
                className="welcomescreen-outline"
              />
              <img
                src="/external/batteryendi349-pmpo.svg"
                alt="BatteryEndI349"
                className="welcomescreen-battery-end"
              />
              <img
                src="/external/filli349-pgtc.svg"
                alt="FillI349"
                className="welcomescreen-fill"
              />
            </div>
            <img
              src="/external/wifii349-e1fx.svg"
              alt="WifiI349"
              className="welcomescreen-wifi"
            />
            <img
              src="/external/iconmobilesignali349-7gko.svg"
              alt="IconMobileSignalI349"
              className="welcomescreen-icon-mobile-signal"
            />
          </div>
        </div>
        <img
          src="/external/rectangle243491-muei-200h.png"
          alt="Rectangle243491"
          className="welcomescreen-rectangle24"
        />
      </div>
    </div>
  )
}

export default Welcomescreen
