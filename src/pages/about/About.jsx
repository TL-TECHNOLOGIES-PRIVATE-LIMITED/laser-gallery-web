import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFive } from "../../components/about/AboutFive";
import { HistoryOne } from "../../components/history/HistoryOne";
import { TeamFour } from "../../components/teams/TeamFour";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { AboutFour } from "../../components/about/AboutFour";
import { TeamTwo } from "../../components/teams/TeamTwo";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      {/* about */}
      {/* <AboutFive /> */}
      <AboutFour/>

      {/* history */}
      {/* <HistoryOne /> */}

      {/* team */}
      {/* <TeamFour /> */}
      <TeamTwo/>

      {/* brand */}
      {/* <BrandTwo /> */}
    </Layout>
  );
};
