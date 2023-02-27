import { LoadingAnimation } from "@/components/loader";
import { NavigationPaths } from "@/config/navigationPaths";
import Router from "next/router";
import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      Router.push(NavigationPaths.home);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h2>Analyzing your data...</h2>
      <LoadingAnimation />
    </div>
  );
};

export default Loading;
