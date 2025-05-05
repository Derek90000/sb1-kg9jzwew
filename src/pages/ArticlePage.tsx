import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar } from 'lucide-react';

interface TableRowProps {
  item: string;
  severity: string;
  issue: string;
}

const TableRow: React.FC<TableRowProps> = ({ item, severity, issue }) => (
  <tr className="border-b border-gray-200">
    <td className="py-4 px-6">{item}</td>
    <td className="py-4 px-6">
      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
        severity === 'Very High' 
          ? 'bg-red-100 text-red-800' 
          : severity === 'High'
          ? 'bg-orange-100 text-orange-800'
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {severity}
      </span>
    </td>
    <td className="py-4 px-6 whitespace-pre-wrap">{issue}</td>
  </tr>
);

const ArticlePage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const yetToFixIssues = [
    {
      item: "UDF's",
      severity: "Very High",
      issue: "Databricks supports UDFs in Python, Scala, and SQL. However, in Databricks SQL Warehouse, only SQL UDFs are allowed. Unlike pandas UDFs or vectorized functions, SQL UDFs in Databricks are not vectorized, meaning execution occurs row by row, leading to poor performance on large tables.\n\nThis issue is further exacerbated by Databricks' implementation of dynamic column masking and row filtering, both of which require a UDF to function. The most common use case for dynamic masking or row filtering is on large fact tables, but because these security measures rely on non-vectorized UDFs, query performance degrades significantly at scale."
    },
    {
      item: "ACID – Transactional",
      severity: "Very High",
      issue: "ACID Capabilities in Databricks is single statement only. There is no support for transactional blocks (e.g. Start Transaction, <multi-statement sql>, End Transaction) in Databricks SQL warehouse. This is a major DWH / ETL pipeline offering limitation as transactional blocks are widely used."
    },
    {
      item: "Cloning",
      severity: "Very High",
      issue: "Databricks offers Deep Copy Clone and Shallow Copy Clone (for delta only), both with severe limitations. Deep Copy Clone fully copies both metadata and data – no pointers, it's full copy. This is very expensive and time consuming. Shallow copy clone uses the source table but copies the metadata only and has issues. Shallow clone was introduced for unity catalog managed tables in 13.3 LTS and for unity catalog external tables in 14.2 LTS. Both fail approximately 10% of the time. This is highly problematic as you need it to be 100% successful to be usable."
    },
    {
      item: "Concurrency",
      severity: "Very High",
      issue: "Databricks enforces a concurrency limit of 1000 queries before a 429 error is thrown, but in real-world scenarios, you will struggle to reach this limit. For meaningful workloads with moderate query complexity, performance degradation typically occurs much earlier (50-150 concurrent queries, depending on workload complexity)."
    },
    {
      item: "Cross-cloud Replication",
      severity: "Very High",
      issue: "Cross-cloud replication in Databricks is a highly manual process. Unlike Snowflake, which provides Snowgrid for seamless cross-region and cross-cloud replication (including failover, failback and app redirection), Databricks does not have a native equivalent—this feature simply does not exist."
    },
    {
      item: "Stored Procedures",
      severity: "Very High",
      issue: "Databricks does not have SQL stored procedures. Instead, you will need to create a python stored procedure, convert your SQL stored procedure to spark.sql, convert to pandas DF and run in a SparkSession. Lot of extra work, be careful on syntax when converting logic. Databricks does have this in the roadmap, but this will take some time."
    }
  ];

  const highSeverityIssues = [
    {
      item: "Semi-structured",
      severity: "High",
      issue: "Databricks introduced the VARIANT data type in Databricks Runtime 15.3 LTS, but there are limitations. Previously, users had to rely on Apache Spark for semi-structured data parsing, requiring explicit transformations to achieve efficient querying. With the introduction of VARIANT, SQL-based operations on semi-structured data are now possible, reducing complexity. However, VARIANT columns in Databricks cannot be used for clustering keys, partitions, or Z-order keys."
    },
    {
      item: "ACID – Performance",
      severity: "High",
      issue: "Both Snowflake and Databricks offer full ACID capabilities. At small volumes, performance differences may be negligible. However, at large volumes, Snowflake's 16MB immutable micropartitions with auto-clustering will significantly outperform Delta Lake's distributed storage model, which relies on a base file + delta transactional log compaction."
    }
  ];

  const fixedItems = [
    {
      item: "Performance",
      severity: "High",
      issue: "Databricks introduced Liquid Clustering on February 18, 2025, as a replacement for traditional Z-ordering and partitioning techniques. While this approach aims to improve query performance and reduce data skew, it remains to be seen how effectively it competes with Snowflake's micropartitioning and automatic clustering."
    },
    {
      item: "Performance",
      severity: "High",
      issue: "Databricks introduced automated stats collection in its January 2025 release. This is a big deal as the planner can now make decision based upon table size and cardinality in joins. This is something Snowflake has done all along, but this release allows Databricks to be more on par with Snowflake in this area of performance."
    }
  ];

  return (
    <>
      <SEO 
        title="The Better Data Warehouse | Squadron Data Insights"
        description="An in-depth analysis comparing Databricks and Snowflake's data warehousing capabilities, examining key features, performance metrics, and enterprise readiness."
        canonical="https://squadrondata.com/insights/better-data-warehouse"
      />
      
      <article 
        ref={sectionRef}
        className="min-h-screen pt-32 pb-20 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
        style={{ '--tw-translate-y': '2rem' } as React.CSSProperties}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center text-text-secondary mb-4">
              <Calendar className="h-5 w-5 mr-2" />
              <time dateTime="2025-04-02">April 2nd, 2025</time>
              <span className="mx-2">•</span>
              <span>By James Dinkel</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-8">
              The Better Data Warehouse?
            </h1>

            <img 
              src="/warehouse.png"
              alt="Data Warehouse Comparison"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Last month Databricks CEO Ali Ghodsi claimed that Databricks had surpassed Snowflake 
              in Data Warehousing capabilities. This does not even pass the sniff test. Snowflake 
              is widely regarded as the premier data warehouse platform on the planet by all measures – 
              in terms of features, performance and price-performance.
            </p>

            <p>
              When we last checked in on SQL Warehouse / Unity Catalog in January of last year, 
              there were a number of gaps. Let's check back in – how many did Databricks fix and 
              how many are still outstanding?
            </p>

            <div className="callout bg-blue-50 border-l-4 border-accent p-6 my-8 rounded-r-lg">
              <p className="text-text-secondary italic">
                Hint: Most of the big problems in SQL Warehouse are still broken or the feature 
                does not yet exist.
              </p>
              <p className="text-text-secondary mt-2 italic">
                Please note this is not an exhaustive list of problems with Databricks SQL Warehouse, 
                but what is here we have found to be a problem.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-6">Yet to fix:</h2>

            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white rounded-xl shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-text font-heading">Item</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Severity</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {yetToFixIssues.map((issue, index) => (
                    <TableRow key={index} {...issue} />
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-6">High Severity Issues:</h2>

            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white rounded-xl shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-text font-heading">Item</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Severity</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {highSeverityIssues.map((issue, index) => (
                    <TableRow key={index} {...issue} />
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-6">Recently Fixed Items:</h2>

            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white rounded-xl shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-text font-heading">Item</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Severity</th>
                    <th className="py-4 px-6 text-left text-text font-heading">Issue</th>
                  </tr>
                </thead>
                <tbody>
                  {fixedItems.map((issue, index) => (
                    <TableRow key={index} {...issue} />
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8">
              We believe these higher priority items that have yet to be fixed will take Databricks 
              longer to fix than the simple things they have already fixed. We presume there are a 
              lot of Databricks engineers working in the background to fix them and will keep an eye 
              on the release notes for the next several years to see when they get fixed.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePage;