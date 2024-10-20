import React from 'react'

import { Helmet } from 'react-helmet'

import './project-proposalscreen.css'

const ProjectProposalscreen = (props) => {
  return (
    <div className="project-proposalscreen-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="project-proposalscreen-project-proposalscreen">
        <div className="project-proposalscreen-group6">
          <div className="project-proposalscreen-status-bari-phone14">
            <div className="project-proposalscreen-left-side">
              <div className="project-proposalscreen-frame-status-bartime">
                <span className="project-proposalscreen-text10 DefaultBoldBody">
                  <span>9:41</span>
                </span>
              </div>
            </div>
            <div className="project-proposalscreen-right-side">
              <div className="project-proposalscreen-battery">
                <img
                  src="/external/outlinei128-stmk.svg"
                  alt="OutlineI128"
                  className="project-proposalscreen-outline"
                />
                <img
                  src="/external/batteryendi128-a4dg.svg"
                  alt="BatteryEndI128"
                  className="project-proposalscreen-battery-end"
                />
                <img
                  src="/external/filli128-qaf8.svg"
                  alt="FillI128"
                  className="project-proposalscreen-fill"
                />
              </div>
              <img
                src="/external/wifii128-akkm.svg"
                alt="WifiI128"
                className="project-proposalscreen-wifi"
              />
              <img
                src="/external/iconmobilesignali128-y9bg.svg"
                alt="IconMobileSignalI128"
                className="project-proposalscreen-icon-mobile-signal"
              />
            </div>
          </div>
        </div>
        <div className="project-proposalscreen-form-shipping">
          <div className="project-proposalscreen-frame51">
            <div className="project-proposalscreen-legend">
              <span className="project-proposalscreen-text12 Heading">
                <span>Redwood Greens</span>
              </span>
              <div className="project-proposalscreen-text14">
                <span className="project-proposalscreen-text15 BodyBase">
                  <span>New Project Proposal</span>
                </span>
              </div>
            </div>
            <div className="project-proposalscreen-avatar">
              <img
                src="/external/shapei146-j5h9-200h.png"
                alt="ShapeI146"
                className="project-proposalscreen-shape"
              />
            </div>
          </div>
          <div className="project-proposalscreen-input-field">
            <span className="project-proposalscreen-text17 BodyBase">
              <span>Project Name</span>
            </span>
            <input
              type="text"
              placeholder="Project name"
              className="project-proposalscreen-input"
            />
          </div>
          <div className="project-proposalscreen-select-field1">
            <span className="project-proposalscreen-text19 BodyBase">
              <span>Project Type</span>
            </span>
            <div className="project-proposalscreen-select1">
              <span className="project-proposalscreen-text21 SingleLineBodyBase">
                <span>Select</span>
              </span>
              <img
                src="/external/chevrondowni143-qkuh.svg"
                alt="ChevrondownI143"
                className="project-proposalscreen-chevrondown1"
              />
            </div>
          </div>
          <div className="project-proposalscreen-textarea-field1">
            <span className="project-proposalscreen-text23 BodyBase">
              <span>Project Description</span>
            </span>
            <span className="project-proposalscreen-text25 BodyBase">
              <span>Write as detailed as possible</span>
            </span>
            <div className="project-proposalscreen-textarea1">
              <span className="project-proposalscreen-text27 BodyBase">
                <span>Description</span>
              </span>
              <img
                src="/external/dragi179-4uym.svg"
                alt="DragI179"
                className="project-proposalscreen-drag"
              />
            </div>
          </div>
          <div className="project-proposalscreen-textarea-field2">
            <div className="project-proposalscreen-group41">
              <span className="project-proposalscreen-text29 BodyBase">
                <span>Attach Images</span>
              </span>
              <div className="project-proposalscreen-group42">
                <img
                  src="/external/paperclip1449-y5mk.svg"
                  alt="Paperclip1449"
                  className="project-proposalscreen-paperclip"
                />
              </div>
            </div>
            <div className="project-proposalscreen-textarea2">
              <div className="project-proposalscreen-frame4">
                <span className="project-proposalscreen-text31 BodyBase">
                  <span>Upload images</span>
                </span>
                <img
                  src="/external/uploadcloud1448-ac3kz.svg"
                  alt="Uploadcloud1448"
                  className="project-proposalscreen-uploadcloud"
                />
              </div>
            </div>
          </div>
          <div className="project-proposalscreen-textarea-field3">
            <div className="project-proposalscreen-group43">
              <span className="project-proposalscreen-text33 BodyBase">
                <span>Project Budget</span>
              </span>
              <div className="project-proposalscreen-slider-field">
                <div className="project-proposalscreen-frame52">
                  <div className="project-proposalscreen-search1">
                    <span className="project-proposalscreen-text35 BodySmall">
                      <span>$-</span>
                    </span>
                  </div>
                  <div className="project-proposalscreen-search2">
                    <span className="project-proposalscreen-text37 BodySmall">
                      <span>$-</span>
                    </span>
                  </div>
                </div>
                <div className="project-proposalscreen-block">
                  <div className="project-proposalscreen-group5">
                    <div className="project-proposalscreen-knob-start1"></div>
                    <div className="project-proposalscreen-slider"></div>
                    <div className="project-proposalscreen-knob-start2"></div>
                  </div>
                </div>
                <div className="project-proposalscreen-frame53">
                  <div className="project-proposalscreen-label1">
                    <div className="project-proposalscreen-slider-output1">
                      <span className="project-proposalscreen-text39 BodySmall">
                        $
                      </span>
                      <span className="project-proposalscreen-text40 BodySmall">
                        <span>10</span>
                      </span>
                    </div>
                  </div>
                  <div className="project-proposalscreen-label2">
                    <div className="project-proposalscreen-slider-output2">
                      <span className="project-proposalscreen-text42 BodySmall">
                        $
                      </span>
                      <span className="project-proposalscreen-text43 BodySmall">
                        <span>99,000</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-proposalscreen-select-field2">
            <span className="project-proposalscreen-text45 BodyBase">
              <span>
                Payment type
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="project-proposalscreen-select2">
              <span className="project-proposalscreen-text47 SingleLineBodyBase">
                <span>One time payment</span>
              </span>
              <img
                src="/external/chevrondowni172-3frd.svg"
                alt="ChevrondownI172"
                className="project-proposalscreen-chevrondown2"
              />
            </div>
          </div>
          <button className="project-proposalscreen-button-group1">
            <button className="project-proposalscreen-button1">
              <span className="project-proposalscreen-text49 SingleLineBodyBase">
                <span>Submit</span>
              </span>
            </button>
          </button>
          <button className="project-proposalscreen-button-group2">
            <button className="project-proposalscreen-button2">
              <span className="project-proposalscreen-text51 SingleLineBodyBase">
                <span>Cancel</span>
              </span>
            </button>
          </button>
        </div>
        <button className="project-proposalscreen-navigation-button-list">
          <button className="project-proposalscreen-navigation-button1">
            <img
              src="/external/activityi267-3wl5.svg"
              alt="ActivityI267"
              className="project-proposalscreen-activity"
            />
            <span className="project-proposalscreen-text53 SingleLineBodySmallStrong">
              <span>Proposals</span>
            </span>
          </button>
          <button className="project-proposalscreen-navigation-button2">
            <img
              src="/external/stari267-c6o.svg"
              alt="StarI267"
              className="project-proposalscreen-star"
            />
            <span className="project-proposalscreen-text55 SingleLineBodySmallStrong">
              <span>Projects</span>
            </span>
          </button>
        </button>
      </div>
    </div>
  )
}

export default ProjectProposalscreen
