import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Calendar } from 'lucide-react';

const DwhMigrations: React.FC = () => {
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
        title="Snowflake DWH Migrations: Success where others failed! | Squadron Data Insights"
        description="Discover why data warehouse migrations to Snowflake succeed where others fail, and learn about the key factors that determine migration success."
        canonical="https://squadrondata.com/insights/snowflake-dwh-migrations"
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
              <time dateTime="2024-10-14">October 14th, 2024</time>
              <span className="mx-2">•</span>
              <span>By James Dinkel</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-text mb-8">
              Snowflake DWH Migrations: Success where others failed!
            </h1>
            <h2 className="font-heading text-2xl text-text-secondary mb-8">
              Plus: The why migrations to other platforms fail (and will continue to for the foreseeable future)
            </h2>

            <img 
              src="/migration.png"
              alt="Data Warehouse Migration"
              className="w-full rounded-2xl shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Recently we had a customer come to us who had struggled with moving their data warehouse 
              workloads to Databricks. They had been at it for a year at the time and hadn't made much 
              progress on any of the workloads. After several discussions, they pivoted from a Databricks 
              migration to instead use Squadron Data to move those workloads to Snowflake.
            </p>

            <p>
              We are in our third month on the migration for the first workload and are currently running 
              well in test. It will go production next month. 😊
            </p>

            <p>
              We are performing code conversion on the other workload. It will go production end of the year. 😊
            </p>

            <p>
              Last week, the customer referred us to executives at another company. We ❤ referrals!
            </p>

            <p>
              This is not uncommon; you see of this happening. It begs the question why? Is it the Systems 
              Integrator? Is it issues within the customer organization itself? Is it the target platform 
              selected? The truth is failure can be attributed to all or any one of those. The target 
              selection however makes a huge difference.
            </p>

            <p>
              Squadron Data has a tremendous amount of experience in this space. Our migration toolkit, 
              formerly known and sold as the Cloudera Data Warehouse Migrator, migrated customers from 
              Teradata, Exadata and Netezza to Hive. When we exited Cloudera, we re-wrote the toolkit 
              as Hive to Databricks and Hive to Snowflake, knowing full-well we would throw one away. 
              We used this as an exercise to more deeply understand the tech of the target platforms better.
            </p>

            <h2>Six Big Reasons Why DWH Migration to Snowflake Succeeds</h2>

            <h3>1. Ease of use / Simplicity of the platform</h3>
            <p>
              Snowflake is a fully managed service. You don't have to worry about underlying instances, 
              cluster management, tuning, etc. Both compute and storage infrastructure are entirely managed 
              for you and scaled independently.
            </p>
            <p>
              Databricks on the other hand relies heavily on Spark. The cluster management and data 
              engineering heavy nature of spark adds complexities. Many of the features require Delta Lake, 
              which brings about its own set of complexities and risk. Confusion often abounds on which 
              clusters to use for which things.
            </p>
            <p>
              Fabric is an attempt by Microsoft to provide a fully managed service, but it is still evolving, 
              and you still have to manage all of the individual services (e.g. Azure Data Lake, ADF, Synapse, 
              Power BI, etc.). Managing the different services is not seamless. Synapse in and of itself is 
              a lot of work.
            </p>
            <p>
              Neither Databricks nor Fabric are anywhere close to Snowflake in the ease of use of the platform. 
              Maybe someday they will get there, but certainly not anytime soon.
            </p>

            <h3>2. Tooling around the platform</h3>
            <p>
              Snowflake has quite a lot of tooling around the platform – things like Zero Copy Clone that 
              automatically replicates data, metadata and security policies to different environments without 
              actually moving them. This makes the testing and code promotion process much easier than the 
              others (half the battle on large scale migrations is 'how do I test and validate this').
            </p>

            <h3>3. Security and Data Governance Model</h3>
            <p>
              Snowflake has Horizon Catalog – it is hands down the most robust and powerful RBAC engine on 
              the planet. Security administrators can create policies by resource (db/schema/tbl/column) or 
              by data classification (by tag, pii, cpni, pci, etc.). Security administrators can do row level 
              masking and column level filtering. The RBAC engine has been around for quite some time and is 
              very mature.
            </p>

            <h3>4. SQL Compliance</h3>
            <p>
              Snowflake is fully ANSI SQL compliant, so that is a great start. Snowflake ACID compliance has 
              been around for a long time and is fully baked. Things like Teradata BTEQ, query band, WLM, etc. 
              will require conversion. Stored procs are straight-forward. The effort here is less than the 
              others, but there is effort.
            </p>

            <h3>5. Migration Accelerators</h3>
            <p>
              Snowflake has SnowConvert, it's native EDW migration tooling and assessment kit. SnowConvert is 
              available for partners and customers to use. It is very powerful and has been used on the largest 
              and most complex Teradata migrations in the world.
            </p>

            <h3>6. Concurrency limits</h3>
            <p>
              Snowflake scales endlessly in both Compute and Storage. I am sure there is a limit somewhere, 
              but we have not been able to find it. Last week we demonstrated to customer more than 1,000 
              concurrent query with their datasets and their query. Obviously, they were impressed. I know of 
              folks that have done 2,500 concurrent queries and I presume more is capable.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-8">
              <p className="font-semibold text-text mb-4">
                The Bottom Line
              </p>
              <p className="text-text-secondary">
                Migrations are hard enough – especially if there are literally years of code and tech debt 
                piled on them. You may as well go with the platform that has the endless scalability, is a 
                fully managed service, governed consistently, is the simplest and easiest to use and has the 
                best tooling for migrations. That one of course, is Snowflake.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DwhMigrations;