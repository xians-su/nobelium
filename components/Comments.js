import { fetchCusdisLang } from "@/lib/cusdisLang";
import React from "react";
import BLOG from "@/blog.config";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "gitalk/dist/gitalk.css";

const GitalkComponent = dynamic(
  () => {
    return import("gitalk/dist/gitalk-component");
  },
  { ssr: false }
);
const UtterancesComponent = dynamic(
  () => {
    return import("@/components/Utterances");
  },
  { ssr: false }
);
const CusdisComponent = dynamic(
  () => {
    return import("react-cusdis").then((m) => m.ReactCusdis);
  },
  { ssr: false }
);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    const handleThemeChange = (e) => {
      toggleTheme(e.matches ? "light" : "dark");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);
    return window.removeEventListener("change", handleThemeChange);
  }, []);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="flex items-center flex-shrink-0">
      <Head>
        <meta
          name="theme-color"
          content={
            theme === "dark" ? BLOG.darkBackground : BLOG.lightBackground
          }
        />
      </Head>
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <li
                key={link.id}
                className="flex items-center ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>


const Comments = ({ frontMatter }) => {
  const router = useRouter();
  return (
    <div>
      {BLOG.comment && BLOG.comment.provider === "gitalk" && (
        <GitalkComponent
          options={{
            id: frontMatter.id,
            title: frontMatter.title,
            clientID: BLOG.comment.gitalkConfig.clientID,
            clientSecret: BLOG.comment.gitalkConfig.clientSecret,
            repo: BLOG.comment.gitalkConfig.repo,
            owner: BLOG.comment.gitalkConfig.owner,
            admin: BLOG.comment.gitalkConfig.admin,
            distractionFreeMode: BLOG.comment.gitalkConfig.distractionFreeMode,
          }}
        />
      )}
      {BLOG.comment && BLOG.comment.provider === "utterances" && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
      {BLOG.comment && BLOG.comment.provider === "cusdis" && (
        <CusdisComponent
          lang={fetchCusdisLang()}
          attrs={{
            host: BLOG.comment.cusdisConfig.host,
            appId: BLOG.comment.cusdisConfig.appId,
            pageId: frontMatter.id,
            pageTitle: frontMatter.title,
            pageUrl: BLOG.link + router.asPath,
            theme: BLOG.appearance,
          }}
        />
      )}
    </div>
  );
};

export default React.memo(Comments);
