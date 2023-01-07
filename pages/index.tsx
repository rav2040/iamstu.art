import Head from "next/head";
import Image from "next/image";
import { ShellPromptHeading } from "../components/ShellPromptHeading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stuart Kennedy</title>
        <meta name="description" content="Stuart Kennedy - Full Stack Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Image
          src="/header-background.jpg"
          alt="Abstract header background image"
          fill
          className={styles["header-background"]}
        />
        <div className={styles["heading-wrapper"]}>
          <div className={styles["profile-image-container"]}>
            <Image src="/profile.jpg" alt="Profile photo of Stuart Kennedy" fill />
          </div>
          <div className={styles["heading-container"]}>
            <div className={styles.heading}>Stuart Kennedy</div>
            <div className={styles.subheading}>Full Stack Engineer</div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles["main-content"]}>
          <section className={styles.logos}>
            <div className={styles["logo-wrapper"]}>
              <Image src="/ts-logo-256.svg" alt="TypeScript logo" fill />
            </div>
            <div className={styles["logo-wrapper"]}>
              <Image src="/Node.js_logo.svg" alt="Node.js logo" fill />
            </div>
            <div className={styles["logo-wrapper"]}>
              <Image src="/React-icon.svg" alt="React logo" fill />
            </div>
          </section>
          <section>
            <ShellPromptHeading text={"whoami"} className={styles["section-heading"]} />
            <p>
              I am a full stack web developer with a focus on <span className={styles.bold}>TypeScript</span>,{" "}
              <span className={styles.bold}>Node.js</span>, and <span className={styles.bold}>React</span>. I have
              Node.js certifications for both <em>Application</em> and <em>Services</em> development issued by the
              OpenJS Foundation, which can be verified by clicking on the badges below.
            </p>
            <div className={styles["badge-container"]}>
              <div className={styles["badge-wrapper"]}>
                <a
                  href={"https://www.youracclaim.com/badges/143b1050-d513-4ccd-bad8-01c66cc55f62"}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image src="/OpenJS_JSNAD.svg" alt="OpenJS Node.js Application Developer certification logo" fill />
                </a>
              </div>
              <div className={styles["badge-wrapper"]}>
                <a
                  href={"https://www.youracclaim.com/badges/b62cdd03-fa20-4aa4-a7cd-4375fb3d7da0"}
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  <Image src="/OpenJS_JSNSD.svg" alt="OpenJS Node.js Services Developer certification logo" fill />
                </a>
              </div>
            </div>
          </section>
          <section>
            <ShellPromptHeading text={"ls -l my-tech-stack"} className={styles["section-heading"]} />
            <ul className={styles["tech-stack-list"]}>
              <li>♾️ TypeScript</li>
              <li>♾️ Node.js</li>
              <li>♾️ React</li>
              <li>♾️ Next.js</li>
              <li>♾️ SASS</li>
            </ul>
            <p>
              I have a high level of proficiency in the above technologies, and pride myself on my commitment to code
              style and following best practices. I also like to keep up with the latest in web standards and am always
              looking for new ways to write better code.
            </p>
          </section>
          <section>
            <ShellPromptHeading text={"cat skills.txt"} className={styles["section-heading"]} />
            <p>
              In addition to my core tech stack, I have a vast array of skills and interests applicable to working in
              web development. This includes a sound understanding of networking, HTTP, REST, and DNS.
            </p>
            <p>
              I also have experience with the two main cloud service platforms, <span className={styles.bold}>AWS</span>{" "}
              and <span className={styles.bold}>Azure</span>. In particular, I have experience with and enjoy building
              applications that implement AWS services such as S3, Lambda, SQS, and container resources with ECR and
              ECS.
            </p>
            <p>
              Testing and quality assurance is something I also take very seriously. I aim for a combination of unit and
              E2E testing using frameworks such as <span className={styles.bold}>Jest</span> and{" "}
              <span className={styles.bold}>Cypress</span> to assist in building applications that remain in a
              continously deployable state.
            </p>
          </section>
          <section className={styles["links-container"]}>
            <div className={styles["links-heading"]}>Find me on...</div>
            <a href={"https://www.linkedin.com/in/rav2040/"} rel={"noreferrer"} target={"_blank"}>
              <Image src={"/LI-Logo.png"} alt={"LinkedIn logo"} width={214} height={52} />
            </a>
            <a href={"https://github.com/rav2040"} rel={"noreferrer"} target={"_blank"}>
              <Image src={"/GitHub_Logo.png"} alt={"GitHub logo"} width={175} height={65} />
            </a>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
