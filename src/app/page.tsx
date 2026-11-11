import React from "react";
import { HomeShowcase } from "@/components/HomeShowcase";
import { HomeSections } from "@/components/HomeSections";

export default function HomePage() {
  return (
    <div className="pb-6">
      <HomeShowcase />
      <HomeSections />
    </div>
  );
}
