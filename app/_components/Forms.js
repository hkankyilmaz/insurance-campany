"use client";
import React from "react";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";


export function Icon() {
  return (
    <span>
      Loading...
      <FontAwesomeIcon
        spin
        style={{ color: "white", marginLeft: ".5rem" }}
        icon={faRotate}
        size="lg"
      />
    </span>
  );
}



