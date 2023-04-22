import { Head } from "$fresh/runtime.ts";
import { Container, NavItem, Resume, SocialLink } from "components";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Paul Schultz - Software engineer
        </title>
        <meta
          name="description"
          content="I'm Paul Schultz, a software engineer at Red Hat based in Rochester MN. I currently work on an opensource midstream project called Janus-IDP, where we develop Red Hat's favor of Backstage while also contributing to the Backstage Community."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer and dog owner.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Paul Schultz, a software engineer at Red Hat based in Rochester
            MN. I currently work on an opensource midstream project called{" "}
            <NavItem
              href="https://janus-idp.io"
              className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4 hover:decoration-[3px] hover:underline-offset-2"
            >
              Janus-IDP
            </NavItem>, where we develop Red Hat's favor of{" "}
            <NavItem
              href="https://showcase.janus-idp.io/"
              className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4 hover:decoration-[3px] hover:underline-offset-2"
            >
              Backstage
            </NavItem>{" "}
            while also contributing to the{" "}
            <NavItem
              href="https://backstage.io/"
              className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4 hover:decoration-[3px] hover:underline-offset-2"
            >
              Backstage Community
            </NavItem>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/schultzp2020"
              aria-label="Follow on GitHub"
              icon="GitHub"
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/schultzp2020/"
              aria-label="Follow on LinkedIn"
              icon="LinkedIn"
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Container className="mt-6">
        <Resume />
      </Container>
    </>
  );
}
