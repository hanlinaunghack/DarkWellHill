import React from "react";
import Button from "react-bootstrap/Button";
import { researchCost, moneyUnit } from "../../../data/configurations.jsx";
import {
  getTextClass,
  rootContainer,
  getDynamicWidth,
  childClickHandler,
} from "./research.childhelper.jsx";
import "./researchtree.css";

const costStyle = {
  padding: "0rem",
  margin: "0rem",
};
const RecursiveChild = ({ child, length, researchItemClickHandler }) => {
  return (
    <div style={getDynamicWidth(length)}>
      {child.isUnlocked && !child.isResearched ? (
        <div
          className={getTextClass(child)}
          onClick={(event) =>
            childClickHandler(event, child, researchItemClickHandler)
          }
        >
          <p style={costStyle}>{child.name}</p>
          <p style={costStyle}>
            Cost: {researchCost[child.name].moneyCost} {moneyUnit}
          </p>
        </div>
      ) : (
        <div className={getTextClass(child)}>{child.name}</div>
      )}
      <div style={rootContainer}>
        {child.children && child.children.length ? (
          child.children.map((e, i, arr) => {
            return (
              <RecursiveChild
                key={i}
                child={e}
                researchItemClickHandler={researchItemClickHandler}
                length={100 * (1 / arr.length)}
              ></RecursiveChild>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
const ResearchChild = (props) => {
  return (
    <>
      <div className={props.modalWindowHandler("background")}>
        <div className="research-container">
          <div className="research-modal-title-container">
            <h2>Research</h2>
            <button
              className="research-modal-close-button"
              onClick={props.closeModalWindow}
            >
              X
            </button>
          </div>
          <div style={rootContainer}>
            {props.main.unlockables.researchTree.children.map((e, i, arr) => {
              return (
                <RecursiveChild
                  key={i}
                  child={e}
                  researchItemClickHandler={props.researchItemClickHandler}
                  length={100 * (1 / arr.length)}
                ></RecursiveChild>
              );
            })}
          </div>
        </div>
      </div>
      <Button onClick={props.researchClickHandler}>Research</Button>
    </>
  );
};

export default ResearchChild;
