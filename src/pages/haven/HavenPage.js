import React from "react";
import "./Project.scss";

// Components
import PageNavbar from "../../components/PageNavbar/PageNavbar.tsx";


function HavenPage() {
  return (
    <>
      <PageNavbar
        project="tradebooker"
        links={[
          "Background",
          "Problem",
          "Design",
          "Application",
          "Prototypes",
          "Results",
          "Reflection",
        ]}
      />
      
      {/* Background */}
      <div
        id="background"
        className="section-haven"
      >

      </div>
    </>
  );
}
