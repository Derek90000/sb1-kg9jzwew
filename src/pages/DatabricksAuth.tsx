import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar, ExternalLink } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => (
  <pre className={`bg-gray-50 p-4 rounded-lg overflow-x-auto ${className}`}>
    <code className="text-sm">{children}</code>
  </pre>
);

const DatabricksAuth: React.FC = () => {
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

  return (
    <>
      <SEO 
        title="Can Databricks close the gap with Snowflake? | Squadron Data Insights"
        description="An in-depth analysis of Databricks' acquisition of Okera and its implications for closing the security gap with Snowflake's authorization capabilities."
        canonical="https://squadrondata.com/insights/databricks-snowflake-auth"
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
              <time dateTime="2023-05-17">May 17th, 2023</time>
              <span className="mx-2">•</span>
              <span>By James Dinkel</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-4">
              Can Databricks close the gap with Snowflake?
            </h1>
            <h2 className="font-heading text-2xl text-text-secondary mb-8">
              Security Authorization Policy Management Comparison
            </h2>

            <img 
              src="/databricks.png"
              alt="Databricks vs Snowflake Security Comparison"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Earlier this month (5/3/23), Databricks purchased Okera in an attempt to close the security gap 
              between itself and Snowflake.
            </p>

            <p>
              Can Databricks close that gap? How hard will it be to integrate Okera into delta lake?
            </p>

            <p className="font-semibold">
              The short answer is No. The why is in the details (below).
            </p>

            <h2>Let's look at:</h2>
            <ol>
              <li>How Snowflake does Policy Management</li>
              <li>How Databricks does Policy Management</li>
              <li>The Gap</li>
              <li>What Databricks is trying to do to close the gap</li>
              <li>The Workarounds* the administrator will need to do to close the gap until Databricks gets there</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-sm">
                * – caution, workarounds are time-consuming, error prone, have to go through CorpSec scrutiny 
                and will lead to unintended access granted if not done correctly.
              </p>
            </div>

            <h2>How Snowflake does Policy Management</h2>
            <p>
              Snowflake was built with security in-mind literally from the ground up; it is natively part of 
              the stack. As it relates to authorization policy controls (which users can do which things to 
              which assets), with Snowflake you create policies based on resources or data classification.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <p>
                Here is a handy url to quickly get you spun up: 
                <a 
                  href="https://docs.snowflake.com/en/user-guide/security-access-control-overview"
                  className="text-accent hover:text-blue-700 ml-2 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Control Overview
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </p>
            </div>

            <p>
              Within this, you see the traditional GRANT that allows privileges to be granted to roles 
              (which are in turn other roles, or users) for a given resource.
            </p>

            <p>
              Resources can be any tables, view, udf, etc.
            </p>

            <p>
              Snowflake also took it a step further, and they allow data to be classified and tagged, with 
              policies created on the data classification (at the column level) that allows that data to be 
              allowed/denied/masked. The column level distinction is extremely important – it is very common 
              for PII data to mixed in tables with non-PII data. They also have a row level filtering 
              capability. This is very important as well, as you often find yourselves not wanting to grant 
              access to all users for all rows on a given fact table.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <p>
                Here is the data governance primer url to quickly get you spun up: 
                <a 
                  href="https://docs.snowflake.com/en/user-guide/data-governance-overview"
                  className="text-accent hover:text-blue-700 ml-2 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Governance Primer
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </p>
            </div>

            <h3>Key Points:</h3>
            <ol>
              <li>
                <strong>Data Classification</strong> - The classifier, which is called by function 
                EXTERNAL_SEMANTIC_CATEGORIES, derives from the data columns which may be PII data. 
                It is driven by a probabilistic algorithm that looks for the existence of such data.
              </li>
              <li>
                <strong>Object Tagging</strong> - You the data engineer tag the data by type. You create 
                your own tags and you may have multiple sensitive types (CPNI, HIPAA, PCI, PII, etc.) 
                depending on your business and you may also want to have non-sensitive types. Tagging 
                allows you to search and set policy based on data classification type.
              </li>
              <li>
                <strong>Set your column and row level policies</strong> - Now that we have the data tagged, 
                we can set policies based on those tags. I can say for all my CPNI data, only allow access 
                for users with CPNI role.
              </li>
            </ol>

            <h2>How Databricks does Policy Management</h2>
            <p>
              In Databricks SQL, users are granted access to a resource using the grant command.
            </p>

            <p>The syntax is:</p>
            <CodeBlock>
              GRANT privilege_types ON securable_object TO principal;
            </CodeBlock>

            <p>For example:</p>
            <CodeBlock>
              GRANT CREATE ON SCHEMA myschema TO `alf@melmak.et`;
              GRANT ALL PRIVILEGES ON TABLE forecasts TO finance;
              GRANT SELECT ON TABLE sample_data TO USERS;
            </CodeBlock>

            <p>
              This is not much different than Snowflake resource based granting, the exception being with 
              Databricks you are granting to users and groups and not to roles. Roles give you more 
              flexibility, but the bigger gap is the lack of column masking and row filtering, which is 
              noticeably absent.
            </p>

            <h2>What Databricks is trying to do to close the gap</h2>
            <p>
              Recognizing that they were lacking, in May 2023, Databricks purchased Okera. Okera is a 
              roughly 80-person firm.
            </p>

            <p>
              Okera is a 3rd party API-based tool that finds, tags and registers data by classification 
              across a number of platforms that intercepts queries and provides allow/deny based on tag.
            </p>

            <p>
              Databricks did get Lars George – apache member, former author of hbase (thank you for the 
              offheap bucketcache back in the day!) with the purchase of Okera. Lars is tasked with 
              integrating the data classification and tagging into Unity Catalog.
            </p>

            <p>
              The Okera acquisition is definitely a step in the right direction, but Lars and team have 
              their work cut-out for him. He has to:
            </p>

            <ul>
              <li>Integrate the Okera Data Classification Discovery Tool into Unity Catalog</li>
              <li>Integrate the Okera Authorization code into Unity Catalog</li>
              <li>Integrate the Okera code to sit on the Delta file format</li>
              <li>Have all the spark dev team utilize the Okera code prior to persisting or reading anything</li>
            </ul>

            <p>It's going to be a bit before all that happens...</p>

            <h2>Workaround #1 – Column Masking</h2>
            <p>
              There are two options available to Databricks users to hide sensitive columns. If you are a 
              Databricks Data Engineer, make sure you use this for all sensitive data (PII, CPNI, PCI, 
              HIPAA, etc.).
            </p>

            <ol>
              <li>
                <strong>UDF</strong> - Create a user defined function. Here a UDF is utilized to encrypt 
                the data prior to inserting to table. A view with a decryption is available for privileged 
                users to decrypt.
              </li>
              <li>
                <strong>View-based masking</strong> - Beginning with DBR 12.2, you can create a table that 
                stores the actual value and a view that the regular users will use. In the view, users 
                select against a mask. Ensure users only select against the view, not the actual table.
              </li>
            </ol>

            <CodeBlock>
              create table customer ( acctid int, fname varchar(20), lname varchar(20), ssn varchar(11));
              create view customer_vw as select acctid, fname, lname, mask(ssn) from customer;
            </CodeBlock>

            <p className="text-red-600 font-semibold">
              Pay attention to not miss any sensitive columns!
            </p>

            <h2>Workaround #2 – Row Filtering</h2>
            <p>
              You have to change your data model to separate the sensitive rows (and join if you want both) 
              or use views. Here is the views way to do it.
            </p>

            <p>
              Take the telco example. Some users can see all data. Other users should only see non-government. 
              You have to split into two tables and users who see all will need to join the two tables or 
              create a view, only allow users access to that view and ensure the view does the filter so 
              government can not be seen:
            </p>

            <CodeBlock>
              create view as select * from cdr where accounttype != "Government"
            </CodeBlock>

            <div className="bg-yellow-50 p-4 rounded-lg my-6">
              <p className="font-semibold">Important:</p>
              <ul className="mt-2">
                <li>Make sure non-privileged users can only hit the view!</li>
                <li>Make sure all sensitive data comes in that matches where clause.</li>
              </ul>
            </div>

            <p>Alternatively, catch more things in the where clause:</p>

            <CodeBlock>
              create view as select * from cdr 
              where accounttype != "Government" 
              or accounttype != "government" 
              or accounttype != "Govt" 
              or accounttype != "govt"
            </CodeBlock>

            <h2>Workaround #3 – No Tagging</h2>
            <p>
              There is no work-around here. You are going to need a 3rd party tool or create your own set 
              of metadata tables.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Summary</h3>
              <ul className="space-y-4">
                <li>Snowflake Out of The Box has security built-in, it's part of the system.</li>
                <li>
                  Databricks has invested by purchasing Okera in May 2023 to try to close that gap. 
                  It will take some time to get there. I'm guessing it will be in the 12-18 month time 
                  period, but that is just a guess.
                </li>
                <li>
                  Until that happens, Databricks customers will either need to:
                  <ul className="mt-2 ml-4">
                    <li>Invest in a 3rd party authorization platform like Okera or Privacera that intercepts queries</li>
                    <li>Utilize workarounds to achieve use cases while ensuring security</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl my-8">
              <h3 className="font-heading text-xl font-semibold mb-4">Three Inherent Drawbacks:</h3>
              <ol className="list-decimal ml-4">
                <li>3rd Party Addons take time and $</li>
                <li>Work-arounds take time ($) (the scoping would be like 2 guys + extra guy per 20-30k tables)</li>
                <li>3rd Party Addons and work-arounds are inherently prone to human error (risky)</li>
              </ol>
            </div>

            <p>
              A boss or a bosses boss will probably have you do the ole' build (workaround scripting) vs. 
              buy (3rd party query interceptor) to close the gap. Due your diligence..
            </p>

            <p>
              If you are a Databricks administrator, just be very careful. You should either get really 
              serious about switching to Snowflake or get really serious about setting up automation to 
              protect yourself. Within your scripting framework, you will want to develop it such that the 
              script is taking input from some auditable delimited file (that you can get buy-off from your 
              CorpSec) such that the right privileges are applied to the right objects for the right 
              users/groups 100% of the time. I'd also have someone double-check my work / share that risk 
              with me.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DatabricksAuth;