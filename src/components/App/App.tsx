import React from "react";
// working
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
// import Card from "react-bootstrap/Card";

import { Logo as logo } from "Assets";
import { CollarLow as collarLow } from "Assets";
import { CollarMid as collarMid } from "Assets";
import { CollarHigh as collarHigh } from "Assets";

import { HemStraight as hemStraight } from "Assets";
import { HemTaper as hemTaper } from "Assets";
import { HemSplit as hemSplit } from "Assets";
import { Svg1 as svg1 } from "Assets";

import "./App.scss";

interface Object {
  hasOwnProperty<T>(this: T, v: any): v is keyof T;
}

interface Props {
  children: any;
}

interface OutlineOptionsProps {
  name: string;
  machineName: string;
  options: any;
  curentValue: any;
  handleFunction: Function;
}

interface OutlineTeeImagesVariations {
  name: string;
  config: { [key: string]: any };
  machineName?: string;
  options?: any;
  curentValue?: any;
  handleFunction?: Function;
}

const getSVG = (
  name: string,
  color: any,
  tl: string = "+0",
  sl: string,
  collar: string
) => {
  switch (name) {
    // Format icons

    case "overSize":
      const styleOne = {
        fill: color,
        stroke: "#ccc",
        strokeWidth: "0.75px",
        strokeLinejoin: "round",
      };

      // const styleTwo = {
      //   strokeLine
      // };
      return (
        <>
          <g id="TORSO_STRAIGHT" data-name="TORSO STRAIGHT">
            {tl === "+3" && (
              <g id="_3" data-name="+3">
                <path
                  id="_3-2"
                  data-name="+3"
                  style={styleOne}
                  d="M250,607.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-260.1-7.49-263.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,79.45-7.49,263.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "+2" && (
              <g id="_2" data-name="+2">
                <path
                  id="_2-2"
                  data-name="+2"
                  style={styleOne}
                  d="M250,592.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-245.1-7.49-248.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,64.45-7.49,248.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "+1" && (
              <g id="_1" data-name="+1">
                <path
                  id="_1-2"
                  data-name="+1"
                  style={styleOne}
                  d="M250,577.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-230.1-7.49-233.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,49.45-7.49,233.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "+0" && (
              <g id="_0" data-name="+0">
                <path
                  id="_0-2"
                  data-name="+0"
                  style={styleOne}
                  d="M250,562.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-215.1-7.49-218.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,34.45-7.49,218.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "-1" && (
              <g id="_-1" data-name="-1">
                <path
                  id="_-1-2"
                  data-name="-1"
                  style={styleOne}
                  d="M250,547.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-200.1-7.49-203.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,19.45-7.49,203.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "-2" && (
              <g id="_-2" data-name="-2">
                <path
                  id="_-2-2"
                  data-name="-2"
                  style={styleOne}
                  d="M250,532.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-185.1-7.49-188.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94,4.45-7.49,188.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
            {tl === "-3" && (
              <g id="_-3" data-name="-3">
                <path
                  id="_-3-2"
                  data-name="-3"
                  style={styleOne}
                  d="M250,517.42c-18.29,0-104.8-6.14-115.63-16a1.44,1.44,0,0,1-.48-1c-6.55-184.28-7.39-170.1-7.49-173.73v-16c-.15-19.17-.69-50.77-2.64-64.07-3.75-25.54-32.49-89.39-32.49-89.39h0c4.45-9.52,9-17.31,13.61-22.39a120.39,120.39,0,0,1,21.54-18.77q3.53-2.44,7.52-5h0c15.79-9.94,32.32-19,58.44-25.48h0c16.36-.85,38.26,8.75,57.65,8.75s41.29-9.6,57.65-8.75h0c26.12,6.48,42.65,15.54,58.44,25.48h0q4,2.56,7.52,5a120.39,120.39,0,0,1,21.54,18.77c4.56,5.08,9.16,12.87,13.61,22.39h0S380,221.12,376.24,246.66c-1.95,13.3-2.49,44.9-2.64,64.07v16c-.1,3.63-.94-10.55-7.49,173.73a1.44,1.44,0,0,1-.48,1c-10.83,9.86-97.34,16-115.63,16"
                />
              </g>
            )}
          </g>
          <g id="SLEEVES">
            {sl === "+2" && (
              <g id="_2-3" data-name="+2">
                <g id="F_2" data-name="F+2">
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M373.66,356.35V340.73c.15-19.17.69-80.77,2.64-94.07,3.75-25.54,32.49-89.39,32.49-89.39h-.05c19.43,41.56,36.1,146.27,35.17,174.25v.31a2.24,2.24,0,0,1-1.53,2l-68.45,22.42a.48.48,0,0,0-.33.44"
                  />
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M126.44,356.69a.48.48,0,0,0-.33-.44L57.66,333.83a2.24,2.24,0,0,1-1.53-2v-.31c-.93-28,15.74-132.69,35.17-174.25h0s28.74,63.85,32.49,89.39c2,13.3,2.49,74.9,2.64,94.07v15.62"
                  />
                </g>
              </g>
            )}
            {sl === "+1" && (
              <g id="_1-3" data-name="+1">
                <g id="F_1" data-name="F+1">
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M373.66,341.35V325.73c.15-19.17.69-65.77,2.64-79.07,3.75-25.54,32.49-89.39,32.49-89.39h-.05c19.43,41.56,36.1,131.27,35.17,159.25v.31a2.24,2.24,0,0,1-1.53,2l-68.45,22.42a.48.48,0,0,0-.33.44"
                  />
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M126.44,341.69a.48.48,0,0,0-.33-.44L57.66,318.83a2.24,2.24,0,0,1-1.53-2v-.31c-.93-28,15.74-117.69,35.17-159.25h0s28.74,63.85,32.49,89.39c2,13.3,2.49,59.9,2.64,79.07v15.62"
                  />
                </g>
              </g>
            )}
            {sl === "+0" && (
              <g id="_0-3" data-name="+0">
                <g id="F_0" data-name="F+0">
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M373.66,326.35V310.73c.15-19.17.69-50.77,2.64-64.07,3.75-25.54,32.49-89.39,32.49-89.39h-.05c19.43,41.56,36.1,116.27,35.17,144.25v.31a2.24,2.24,0,0,1-1.53,2l-68.45,22.42a.48.48,0,0,0-.33.44"
                  />
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M126.44,326.69a.48.48,0,0,0-.33-.44L57.66,303.83a2.24,2.24,0,0,1-1.53-2v-.31c-.93-28,15.74-102.69,35.17-144.25h0s28.74,63.85,32.49,89.39c2,13.3,2.49,44.9,2.64,64.07v15.62"
                  />
                </g>
              </g>
            )}
            {sl === "-1" && (
              <g id="_-1-3" data-name="-1">
                <g id="F-1">
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M373.66,311.35V295.73c.15-19.17.69-35.77,2.64-49.07,3.75-25.54,32.49-89.39,32.49-89.39h-.05c19.43,41.56,36.1,101.27,35.17,129.25v.31a2.24,2.24,0,0,1-1.53,2l-68.45,22.42a.48.48,0,0,0-.33.44"
                  />
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M126.44,311.69a.48.48,0,0,0-.33-.44L57.66,288.83a2.24,2.24,0,0,1-1.53-2v-.31c-.93-28,15.74-87.69,35.17-129.25h0s28.74,63.85,32.49,89.39c2,13.3,2.49,29.9,2.64,49.07v15.62"
                  />
                </g>
              </g>
            )}
            {sl === "-2" && (
              <g id="_-2-3" data-name="-2">
                <g id="F-2">
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M373.66,296.35V280.73c.15-19.17.69-20.77,2.64-34.07,3.75-25.54,32.49-89.39,32.49-89.39h-.05c19.43,41.56,36.1,86.27,35.17,114.25v.31a2.24,2.24,0,0,1-1.53,2l-68.45,22.42a.48.48,0,0,0-.33.44"
                  />
                  <path
                    style={{
                      strokeLinejoin: "bevel",
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                    }}
                    d="M126.44,296.69a.48.48,0,0,0-.33-.44L57.66,273.83a2.24,2.24,0,0,1-1.53-2v-.31c-.93-28,15.74-72.69,35.17-114.25h0s28.74,63.85,32.49,89.39c2,13.3,2.49,14.9,2.64,34.07v15.62"
                  />
                </g>
              </g>
            )}
          </g>
          <g id="COLLAR">
            <path
              id="Collar_Shading"
              data-name="Collar Shading"
              style={{
                fill: color,
                stroke: color,
                strokeLinecap: "round",
              }}
              d="M194.48,92.78c9.64,26.73,36.19,36.05,55.49,36.05s45.91-9.33,55.52-36.1c-19.07,5.46-44.89,10.42-55.26,10.42h-.54c-10.35,0-36.13-4.93-55.22-10.38"
            />
            {collar === "high" && (
              <g id="_3_collar" data-name="3 collar">
                <g id="_3_collar-2" data-name="3 collar">
                  <path
                    style={styleOne}
                    d="M250.17,103.54c13.1,0,51-7.85,68.7-14.69,0,0-12.39-4.85-17.43-6.09-16.39-.92-31.85,5.07-51.28,5.07s-34.89-6-51.28-5.07c-5,1.24-17.43,6.09-17.43,6.09,17.74,6.84,55.6,14.69,68.7,14.69"
                  />
                  <path
                    id="high_collar-2"
                    data-name="high collar-2"
                    style={{
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                      strokeLinejoin: "round",
                    }}
                    d="M250.33,122.21c19.53,0,42.67-9.18,51.28-39.57L319,88.85c-12.44,43.91-52.85,51.21-68.71,51.21H250c-15.86,0-56.27-7.3-68.71-51.21l17.43-6.21c8.61,30.39,31.75,39.57,51.28,39.57Z"
                  />
                </g>
              </g>
            )}
            {collar === "mid" && (
              <g id="_2_collar" data-name="2 collar">
                <g id="_2_collar-2" data-name="2 collar">
                  <path
                    style={styleOne}
                    d="M250.16,90.83c19.44,0,37.89-7,54.28-6.11,5,1.24,14.43,4.09,14.43,4.09-17.74,6.84-55.88,14.73-69,14.73s-50.7-7.85-68.44-14.69c0,0,9.39-2.85,14.43-4.09C212.27,83.84,230.73,90.83,250.16,90.83Z"
                  />
                  <path
                    id="high_collar-2-2"
                    data-name="high collar-2"
                    style={{
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                      strokeLinejoin: "round",
                    }}
                    d="M250,140.06c15.86,0,56.27-7.3,68.71-51.21l-14.43-4.21C295.66,115,269.52,125.21,250,125.21S204.32,115,195.71,84.64l-14.43,4.21C193.72,132.76,234.13,140.06,250,140.06Z"
                  />
                </g>
              </g>
            )}
            {collar === "low" && (
              <g id="_1_collar" data-name="1 collar">
                <g id="_1_collar-2" data-name="1 collar">
                  <path
                    style={styleOne}
                    d="M250,94.38c19.44,0,41.27-9.63,57.65-8.75,5,1.24,11.05,3.18,11.05,3.18-17.7,6.84-55.36,14.73-68.43,14.73h-.54c-13.07,0-50.7-7.85-68.44-14.69,0,0,6-1.94,11.05-3.18C208.72,84.75,230.55,94.38,250,94.38Z"
                  />
                  <path
                    style={{
                      fill: color,
                      stroke: "#ccc",
                      strokeWidth: "0.75px",
                      strokeLinejoin: "round",
                    }}
                    d="M250,140.06c15.86,0,56.27-7.3,68.71-51.21l-11.05-3.22c-7,32.54-36.63,43.59-57.65,43.59s-50.62-11-57.65-43.59l-11,3.22C193.72,132.76,234.13,140.06,250,140.06Z"
                  />
                </g>
              </g>
            )}
          </g>

          <g className={"notActive"} id="Logo">
            <g>
              <g>
                <path d="M307.27,201.69a3.89,3.89,0,0,1,2.8,1,3.64,3.64,0,0,1,.57,4.47,3.62,3.62,0,0,1-3.36,1.68,3.92,3.92,0,0,1-2.78-1,3.72,3.72,0,0,1-.84-1.25,3.79,3.79,0,0,1-.25-1.34,3.54,3.54,0,0,1,3.86-3.56Zm0,1.16a2.48,2.48,0,0,0-1.69.58,2.29,2.29,0,0,0-.81,1.82,2.25,2.25,0,0,0,.81,1.8,2.51,2.51,0,0,0,1.7.59,2.49,2.49,0,0,0,1.69-.59,2.2,2.2,0,0,0,.62-.85,2.46,2.46,0,0,0-.62-2.77A2.61,2.61,0,0,0,307.28,202.85Z" />
                <path d="M319.24,206.19a2.84,2.84,0,0,1-.38,1.64c-.47.65-1.45,1-2.94,1a4.72,4.72,0,0,1-2.47-.53,1.68,1.68,0,0,1-.67-.84,3.82,3.82,0,0,1-.19-1.25v-4.38h1.34v4a4.47,4.47,0,0,0,.07.88,1,1,0,0,0,.27.47,3.07,3.07,0,0,0,3.42,0,.91.91,0,0,0,.26-.47,3.8,3.8,0,0,0,.07-.88v-4h1.22Z" />
                <path d="M324.27,202.94v5.74h-1.34v-5.74h-2.66v-1.13h6.66v1.13Z" />
                <path d="M329.43,207.56h4.76v1.12h-6.1v-6.87h1.34Z" />
                <path d="M335.39,201.81h1.34v6.87h-1.34Z" />
                <path d="M340,204v4.7h-1.22v-6.87H340l4.53,4.61v-4.61h1.22v6.87h-1.09Z" />
                <path d="M349.09,205.67v1.89h5v1.12h-6.29v-6.87h6.17v1.13h-4.83v1.63h3.32v1.1Z" />
              </g>
              <g>
                <line x1="352.05" y1="205.07" x2="303.89" y2="205.07" />
                <rect x="303.89" y="204.56" width="48.16" height="1.03" />
              </g>
            </g>
          </g>
        </>
      );

    default:
      return <path />;
  }
};

const TeeImagesVariations: React.FunctionComponent<OutlineTeeImagesVariations> = ({
  name,
  config = [],
  machineName,
  options,
  curentValue,
  handleFunction,
}) => {
  let color: { [key: string]: any } = {
    "Jet Black": "#060807",
    "Vintage White": "#FFFFF3",
    White: "#FFFFFF",
    "Grey Melange": "#727272",
  };
  // {"one": [1,2,3], "two": [4,5,6]}

  if (config && config["color"]) color = color[config["color"]];

  console.log(config);
  return (
    <>
      <h2>Hello {name}</h2>
      <svg
        // className={[css.svg, svgClassName || ""].join(" ")}
        className={"w-25"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 647.06"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {getSVG(
          "overSize",
          color,
          config && config["lengthTorso"] ? config["lengthTorso"] : "+0",
          config && config["lengthSleeve"] ? config["lengthSleeve"] : "+0",
          config && config["collar"] ? config["collar"] : "low"
        )}
      </svg>
    </>
  );
};

const OutlineOptions = (prop: OutlineOptionsProps) => {
  const { name, machineName, options, handleFunction, curentValue } = prop;

  console.log(curentValue);

  return (
    <Dropdown
      onClick={(e: any) =>
        e.target.dataset && e.target.dataset.name ? handleFunction(e) : null
      }
    >
      <Dropdown.Toggle
        className={"btn-custom"}
        variant={"link"}
        id="dropdown-basic"
      >
        {` ${curentValue ? curentValue : name} `}
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-custom">
        {options.map((val: any) => (
          <Dropdown.Item data-name={machineName} data-value={val}>
            {val}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Step = (prop: Props) => {
  const { children } = prop;
  console.log(prop);

  return <div style={{ width: "100%" }}>{children} </div>;
};

const data = ["one", "two", "last"];

const Steps = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const [type, setType] = React.useState(0);

  const collar = ["low", "mid", "high"];
  const shape = ["slim", "original", "oversize"];
  const fabric = ["light 150gsm", "medium 220gsm", "heavy 280gsm"];
  const hem = ["straight", "split", "tap"];
  const size = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const color = ["Jet Black", "Vintage White", "White", "Grey Melange"];
  const lengthTorso = ["+3", "+2", "+1", "+0", "-1", "-2", "-3"];
  const lengthSleeve = ["+2", "+1", "+0", "-1", "-2"];
  /*
   **  length: { torso: "3" | "2" | "1" | "0" | "-1" | "-2" | "-3" , sleeve: "2" | "1" | "0" | "-1" | "-2" },
   **  details: { stitch: "", print: "", color: "black" | "white" },
   */

  const teeParam: { [key: string]: any } = {
    collar: "",
    hem: "",
    size: "",
    shape: "original",
    lengthTorso: "",
    lengthSleeve: "",
    fabric: "",
    // length: { torso: "", sleeve: "" },
    // details: { stitch: "", print: "", color: "" },
    color: "",
  };

  const [customTee, setCustomTee] = React.useState(teeParam);

  const [onTansition, setOnTansition] = React.useState(false);
  const [customizerEnabled, setCustomizerEnabled] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("collar");

  React.useEffect(() => {
    if (onTansition)
      setTimeout(() => {
        setCustomizerEnabled(false);
        console.log("delayed");
      }, 500);
  }, [onTansition]); // Only re-run the effect if count changes

  React.useEffect(() => {
    setOnTansition(false);
  }, [customizerEnabled]); // Only re-run the effect if count changes

  // handle change event of the input
  const handleChange = (e: any) => {
    let target;

    if (e.target.dataset && e.target.dataset.name) {
      target = e.target.dataset;
    } else {
      target = e.target;
    }

    const { name, value } = target;

    console.log(name, value);

    e.persist();
    setCustomTee((prevCustomTee) => ({
      ...prevCustomTee,
      [name]: value,
    }));
  };

  const html = (
    <>
      <div>hello - {activeIndex + 1}</div>
      <hr />
      {`
        ${customTee.shape}
        ${customTee.fabric}
        ${customTee.hem}
        ${customTee.size}
        `}
      <input
        type="text"
        name="shape"
        value={customTee.shape}
        onChange={handleChange}
      ></input>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Example select</Form.Label>

        <Form.Control as="select" name="shape" onChange={handleChange}>
          {shape.map((val) => (
            <option>{val}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example select</Form.Label>

        <Form.Control as="select" name="fabric" onChange={handleChange}>
          {fabric.map((val) => (
            <option>{val}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect3">
        <Form.Label>Example select</Form.Label>

        <Form.Control as="select" name="hem" onChange={handleChange}>
          {hem.map((val) => (
            <option>{val}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect4">
        <Form.Label>Example select</Form.Label>

        <Form.Control as="select" name="size" onChange={handleChange}>
          {size.map((val) => (
            <option>{val}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );

  const defaultScreenHtml = (
    <div
      className={[
        "defaultOptions",
        onTansition ? "onTransition hide" : "",
      ].join(" ")}
    >
      <div className="row">
        <div className="col">
          <h2>OVERSIZED TEE</h2>
          <h5>$80.00 AUD </h5>
          <h5>CUSTOM $120.00 AUD</h5>
        </div>
        <div className="col">
          <OutlineOptions
            name={"Choose Size"}
            machineName={"size"}
            options={size}
            curentValue={customTee.size}
            handleFunction={(e: any) => handleChange(e)}
          />

          <OutlineOptions
            name={"Choose Color"}
            machineName={"color"}
            options={color}
            curentValue={customTee.color}
            handleFunction={(e: any) => handleChange(e)}
          />

          <OutlineOptions
            name={"Choose Fabric"}
            machineName={"fabric"}
            options={fabric}
            curentValue={customTee.fabric}
            handleFunction={(e: any) => handleChange(e)}
          />

          <p>
            Jet Black Oversized tee in light, medium and heavy weight cotton.
            Sofened and pre-shrunk.
          </p>
          <ul>
            <li>Oversized fit.</li>
            <li>Ribbed Collar</li>
            <li>Stitched label branding</li>
          </ul>

          <Button block={true}>Add To Basket</Button>
          <Button
            block={true}
            onClick={(e) => {
              setOnTansition(true);
            }}
          >
            CUSTOMISE
          </Button>

          <p>Customisation options available:</p>
          <div className="row">
            <ul className={"col-1"}>
              <li>Collar </li>
              <li>Hem</li>
              <li>Length Torso</li>
              <li>Length Sleeve</li>
              <li>Fabric Weight</li>
              <li>Pocket</li>
            </ul>
            <ul className={"col list-unstyled"}>
              <li>- High / Low</li>
              <li>- Straight / Split / Taper</li>
              <li>- + / -</li>
              <li>- + / -</li>
              <li>- 150 GSM / 220 GSM / 280 GSM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const customCollarHtml = (
    <>
      <h2 className={"text-center"}>Low</h2>
      <img src={collarLow} alt="" className={"m-auto"} />
      <h2 className={"text-center"}>Mid</h2>
      <img src={collarMid} alt="" className={"m-auto"} />
      <h2 className={"text-center"}>High</h2>
      <img src={collarHigh} alt="" className={"m-auto mb-5"} />

      <OutlineOptions
        name={"Choose Collar"}
        machineName={"collar"}
        options={collar}
        curentValue={customTee.collar}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );
  const customHemHtml = (
    <>
      <div className="row">
        <div className={"col d-flex flex-column"}>
          <img src={hemStraight} alt="" className={"m-auto"} />
          <h2 className={"text-center"}>Straight</h2>
        </div>

        <div className={"col d-flex flex-column"}>
          <img src={hemTaper} alt="" className={"m-auto"} />
          <h2 className={"text-center"}>Taper</h2>
        </div>

        <div className={"col d-flex flex-column"}>
          <img src={hemSplit} alt="" className={"m-auto mb-5"} />
          <h2 className={"text-center"}>Split</h2>
        </div>
      </div>

      <OutlineOptions
        name={"Choose hem"}
        machineName={"hem"}
        options={hem}
        curentValue={customTee.hem}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );

  const customShapeHtml = (
    <>
      <OutlineOptions
        name={"Choose shape"}
        machineName={"shape"}
        options={shape}
        curentValue={customTee.shape}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );
  const customFabricHtml = (
    <>
      <p>Premium High Grade Cotton</p>
      <ul>
        <li>Tested for allergy</li>
        <li>Tested for harmful substances</li>
      </ul>
      <ul>
        <li>150 GSM LIGHT WEIGHT</li>
        <li>220 GSM MEDIUM WEIGHT</li>
        <li>280 GSM HEAVY WEIGHT</li>
      </ul>
      <h2>WEIGHT</h2>
      <OutlineOptions
        name={"Choose fabric"}
        machineName={"fabric"}
        options={fabric}
        curentValue={customTee.fabric}
        handleFunction={(e: any) => handleChange(e)}
      />
      <h2>color</h2>
      <OutlineOptions
        name={"Choose color"}
        machineName={"color"}
        options={color}
        curentValue={customTee.color}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );
  const customSizeHtml = (
    <>
      <p>
        See sizing chart measurments.
        <br />
        XS - XXL.
      </p>
      <Button>SIZE CHART</Button>
      <OutlineOptions
        name={"Choose size"}
        machineName={"size"}
        options={size}
        curentValue={customTee.size}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );
  const customColorHtml = (
    <>
      <OutlineOptions
        name={"Choose color"}
        machineName={"color"}
        options={color}
        curentValue={customTee.color}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );

  const customLengthHtml = (
    <>
      <p>
        {`At each increment the garment will gain \n or lose between 1” - 2” in
        length.`}
      </p>
      <h2>Torso</h2>
      <OutlineOptions
        name={"Choose Length Torso"}
        machineName={"lengthTorso"}
        options={lengthTorso}
        curentValue={customTee.lengthTorso}
        handleFunction={(e: any) => handleChange(e)}
      />
      <h2>Sleeve</h2>
      <OutlineOptions
        name={"Choose Length Sleeve"}
        machineName={"lengthSleeve"}
        options={lengthSleeve}
        curentValue={customTee.lengthSleeve}
        handleFunction={(e: any) => handleChange(e)}
      />
    </>
  );

  const advanceOptions: { [key: string]: any } = {
    collar: customCollarHtml,
    // shape: customShapeHtml,
    fabric: customFabricHtml,
    hem: customHemHtml,
    size: customSizeHtml,
    length: customLengthHtml,
    // color: customColorHtml,
  };

  const customScreenHtml = (
    <div
      className={[
        "customOptions",
        "h-100",
        onTansition ? "onTransition show" : "",
      ].join(" ")}
    >
      <div className="row h-100">
        <div className="col d-flex flex-column m-auto">
          {Object.keys(customTee).map((key, i) => {
            let keyName = key;
            console.log(
              key === "lengthTorso" || (key === "lengthSleeve" && true)
            );

            if (key === "lengthTorso" || key === "lengthSleeve")
              keyName = "length";

            if (key === "lengthSleeve" || key === "shape" || key === "color")
              keyName = "";

            if (keyName === "") return;

            return (
              <Button
                // key={`customOpetionKer-${i}`}
                // disabled={activeTab !== keyName && true}
                className={[
                  i === 0 ? "mt-5" : "",
                  i === customTee.lenght ? "mb-5" : "",
                  "my-2",
                ].join(" ")}
                variant={activeTab !== keyName ? "outline-primary" : "primary"}
                onClick={() => {
                  setActiveTab(keyName);
                }}
              >
                <span className={"m-0 h1"}>{keyName}</span>
                <br />
                <span className={"h3"}>
                  {customTee[keyName] &&
                  keyName !== "fabric" &&
                  keyName !== "length" ? (
                    customTee[keyName]
                  ) : (
                    <span style={{ visibility: "hidden" }}>-</span>
                  )}

                  {keyName === "length" &&
                    `Torso: ${customTee["lengthTorso"]} \n Sleeve:${customTee["lengthSleeve"]}`}
                  {keyName === "fabric" &&
                    `${customTee[keyName]} ${customTee["color"]}`}
                </span>
              </Button>
            );
          })}
        </div>
        <div className="col d-flex flex-column">
          <div className={"wrapper m-auto"}>
            {advanceOptions[activeTab] && advanceOptions[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="row">
        <div className="col">
          {<TeeImagesVariations name={"New"} config={customTee} />}
        </div>
        <div className="col">
          {customizerEnabled && defaultScreenHtml}
          {!customizerEnabled && customScreenHtml}
        </div>
      </div>

      {customTee["collar"] !== "" &&
        customTee["hem"] !== "" &&
        customTee["lengthTorso"] !== "" &&
        customTee["lengthSleeve"] !== "" &&
        customTee["size"] !== "" &&
        // customTee["shape"] !== "" &&
        customTee["fabric"] !== "" &&
        customTee["color"] && (
          <Button
            onClick={() =>
              alert(`Your Selection is collar: ${customTee["collar"]}
        hem: ${customTee["hem"]}
        Length Torso: ${customTee["lengthTorso"]}
        Length Sleeve: ${customTee["lengthSleeve"]}
        size: ${customTee["size"]}
        shape: ${customTee["shape"]}
        fabric: ${customTee["fabric"]}
        color: ${customTee["color"]}`)
            }
          >
            Buy
          </Button>
        )}
      {/* {html} */}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

export default App;
