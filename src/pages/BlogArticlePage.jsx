import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styles } from "../styles";
import JobHuntLatexResumeArticle from "../content/blog/JobHuntLatexResumeArticle";

const BLOG_REGISTRY = {
  "job-hunt-latex-resume": {
    title: "Job Hunt Guide: Create a Professional Resume using LaTeX (Overleaf)",
    date: "2025-05-11",
    dateLabel: "May 11, 2025",
    readTime: "7 min read",
    mediumUrl:
      "https://medium.com/@sohammore2372/job-hunt-guide-create-a-professional-resume-using-latex-overleaf-d10f7320ff2c",
    Component: JobHuntLatexResumeArticle,
  },
};

const BlogArticlePage = () => {
  const { slug } = useParams();
  const entry = BLOG_REGISTRY[slug];

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  const { title, date, dateLabel, readTime, mediumUrl, Component } = entry;

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-[120px]">
        <Navbar />
      </div>

      <article className={`${styles.padding} max-w-4xl mx-auto relative z-0 pb-24`}>
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm font-semibold mb-10 transition-colors"
        >
          ← Back to portfolio
        </Link>

        <header className="mb-10">
          <p className={styles.sectionSubText}>Blog</p>
          <h1 className="text-white font-black text-3xl sm:text-5xl leading-tight mt-2">{title}</h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-5 text-secondary text-sm">
            <span className="text-white/90 font-medium">Soham More</span>
            <span className="text-[#2E2E2E] hidden sm:inline">·</span>
            <time dateTime={date}>{dateLabel}</time>
            <span className="text-[#2E2E2E] hidden sm:inline">·</span>
            <span>{readTime}</span>
          </div>
        </header>

        <Component />

        <p className="mt-16 pt-8 border-t border-white/10 text-secondary text-sm leading-relaxed">
          Originally published on{" "}
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#804dee] hover:underline font-medium"
          >
            Medium
          </a>
          .
        </p>
      </article>

      <Footer />
    </div>
  );
};

export default BlogArticlePage;
