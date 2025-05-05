import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Expertise from './components/Expertise';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Insights from './pages/Insights';
import ArticlePage from './pages/ArticlePage';
import DwhMigrations from './pages/DwhMigrations';
import DatabricksAuth from './pages/DatabricksAuth';
import Snowpark from './pages/Snowpark';
import Lakehouse from './pages/Lakehouse';
import OrgImpact from './pages/OrgImpact';
import Careers from './pages/Careers';

function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      <SEO />
      <Header />
      {path === '/insights' ? (
        <Insights />
      ) : path === '/insights/better-data-warehouse' ? (
        <ArticlePage />
      ) : path === '/insights/snowflake-dwh-migrations' ? (
        <DwhMigrations />
      ) : path === '/insights/databricks-snowflake-auth' ? (
        <DatabricksAuth />
      ) : path === '/insights/snowpark-overview' ? (
        <Snowpark />
      ) : path === '/insights/lakehouse-data-cloud' ? (
        <Lakehouse />
      ) : path === '/insights/spark-snowflake-comparison' ? (
        <OrgImpact />
      ) : path === '/careers' ? (
        <Careers />
      ) : (
        <main className="flex flex-col items-center">
          <Hero />
          <About />
          <Services />
          <CaseStudies />
          <Expertise />
          <Team />
          <Contact />
        </main>
      )}
      <Footer />
    </Layout>
  );
}

export default App;