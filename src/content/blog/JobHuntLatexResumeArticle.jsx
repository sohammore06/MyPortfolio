import React from "react";

import CodeBlock from "../../components/CodeBlock";
import fullLatexTemplate from "./job-hunt-latex-resume-template.tex?raw";

const p = "text-secondary text-[16px] sm:text-[17px] leading-[30px] mt-4";
const h2 = "text-white font-black text-2xl sm:text-[32px] mt-12 mb-2";
const ul = "list-disc list-outside text-secondary text-[16px] sm:text-[17px] leading-[30px] mt-4 ml-6 space-y-2";
const ol = "list-decimal list-outside text-secondary text-[16px] sm:text-[17px] leading-[30px] mt-4 ml-6 space-y-3";

const CHATGPT_PROMPT = `Hey ChatGPT, I need your help to tailor my resume. Here's my existing resume code in LaTeX:
[Paste your LaTeX code here]
Here is my current resume details:
[Paste your current resume content here]
And here is the job description:
[Insert job description here]
Can you modify my resume based on this job description? Please keep the formatting of the LaTeX code intact and focus on adjusting my content to align with the job description.
I would like you to:

- Make sure everything looks professional while still keeping my original content.
- Modify my projects to reflect the skills and experiences mentioned in the job description.
- Emphasize the skills and experience that match the job description.`;

/**
 * Full article body (Medium: Job Hunt Guide — LaTeX / Overleaf).
 * LaTeX source is extracted from the original post and ordered for Overleaf.
 */
const JobHuntLatexResumeArticle = () => {
  return (
    <div className="article-body">
      <p className={`${p} mt-0`}>
        When it comes to job hunting, having a standout resume is the first step toward securing that
        dream job. Whether you&apos;re a fresher or someone with work experience, a well-crafted resume
        speaks volumes about your skills and potential. In this post, I&apos;ll walk you through the
        process of creating a professional resume that aligns with job descriptions using{" "}
        <a
          href="https://www.overleaf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#804dee] hover:underline"
        >
          Overleaf
        </a>
        , a fantastic platform for working with LaTeX.
      </p>

      <h2 className={h2}>Why LaTeX for Resumes?</h2>
      <p className={p}>
        LaTeX offers precision in formatting, ensuring that your resume has clean, professional, and
        consistent layout standards. By using LaTeX, you don&apos;t have to worry about font sizes,
        spacing, or alignment issues — it&apos;s all taken care of for you, allowing you to focus on
        the content itself.
      </p>

      <h2 className={h2}>Step 1: Set Up an Account on Overleaf</h2>
      <ol className={ol}>
        <li>
          Visit{" "}
          <a
            href="https://www.overleaf.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#804dee] hover:underline"
          >
            Overleaf.com
          </a>
          .
        </li>
        <li>Sign up for a free account or log in if you already have one.</li>
        <li>
          Once logged in, click on the <strong className="text-white">New Project</strong> button and
          select <strong className="text-white">Blank Project</strong>.
        </li>
        <li>Name your project something like &quot;Full Stack Developer Resume.&quot;</li>
      </ol>

      <h2 className={h2}>Step 2: Insert LaTeX Code for Your Resume</h2>
      <p className={p}>
        Now, paste the following LaTeX code into the file in Overleaf. The code I&apos;ve provided
        will help you structure your resume without worrying about the layout. You can easily
        customize this with your own information later.
      </p>

      <p className={`${p} text-sm text-secondary/80`}>
        Below is the full template from the article, combined in the correct order for Overleaf (
        <code className="text-[#dfd9ff]">\documentclass</code> first). Use <strong className="text-white">Copy</strong>{" "}
        to paste into your main <code className="text-[#dfd9ff]">.tex</code> file.
      </p>

      <CodeBlock
        code={fullLatexTemplate.trim()}
        label="Full LaTeX resume template"
        language="latex"
      />

      <p className={`${p} font-medium text-white`}>Now, with this template, it&apos;s time to personalize your content:</p>
      <ul className={ul}>
        <li>
          <strong className="text-white">Projects:</strong> This is where you can showcase your
          personal projects. Projects are extremely important for freshers because they demonstrate
          your hands-on experience and problem-solving abilities, even if you haven&apos;t had formal
          job experience.
        </li>
        <li>
          <strong className="text-white">Skills:</strong> Tailor the skillset section to match your
          proficiency in specific technologies.
        </li>
        <li>
          <strong className="text-white">Work Experience:</strong> Under the{" "}
          <strong className="text-white">Work Experience</strong> section, replace the sample entries
          with your actual experience, including your role, company, and key achievements.
        </li>
        <li>
          <strong className="text-white">Personal Information:</strong> Replace{" "}
          <code className="text-[#dfd9ff] text-sm">[Your Name]</code>,{" "}
          <code className="text-[#dfd9ff] text-sm">[email@example.com]</code>, and other placeholders
          with your actual information.
        </li>
      </ul>

      <h2 className={h2}>Why Projects are Important for Freshers</h2>
      <p className={p}>
        As a fresher, your resume might not have significant professional experience, but projects
        show that you have practical skills. Whether it&apos;s building a personal website,
        contributing to an open-source project, or creating a simple application, showcasing these
        projects makes your resume stand out. It provides potential employers with a tangible
        demonstration of your skills, which is especially important in fields like software
        development, web development, and data science.
      </p>

      <h2 className={h2}>Best Resume Writing Tips for Job Seekers</h2>
      <ol className={ol}>
        <li>
          <strong className="text-white">Avoid Overloading Your Resume:</strong> Don&apos;t list
          everything you&apos;ve ever done. Focus on the skills and experiences that directly relate
          to the job you&apos;re applying for.
        </li>
        <li>
          <strong className="text-white">Keep It Concise:</strong> Your resume should be a snapshot
          of your most important skills and experiences. Stick to one page (two pages if necessary,
          but no more).
        </li>
        <li>
          <strong className="text-white">Quantify Achievements:</strong> Wherever possible, use
          numbers to show the impact of your work. For example, &quot;Increased website traffic by 40%
          through SEO improvements.&quot;
        </li>
        <li>
          <strong className="text-white">Tailor Your Resume for Each Job:</strong> Every job posting
          has its own requirements. Adjust your resume to highlight the skills and experiences that
          align with the job description.
        </li>
        <li>
          <strong className="text-white">Use Bullet Points:</strong> Instead of long paragraphs, use
          bullet points to make your achievements easy to scan.
        </li>
        <li>
          <strong className="text-white">Use Action Words:</strong> Begin bullet points with strong
          action verbs like Developed, Led, Designed, Engineered, Optimized. Action words show that you
          actively contributed to the project or role, rather than just performing tasks.
        </li>
      </ol>

      <h2 className={h2}>Step 4: Export Your Resume to PDF</h2>
      <p className={p}>
        Once you&apos;re done with your resume, click on <strong className="text-white">Recompile</strong>{" "}
        in Overleaf to generate a preview. If everything looks good, click on{" "}
        <strong className="text-white">Download PDF</strong> to save your resume.
      </p>

      <h2 className={h2}>ChatGPT Prompt for Customizing Resumes</h2>
      <p className={p}>
        Here&apos;s a fantastic ChatGPT prompt you can use to tailor your resume for a specific job
        description:
      </p>
      <p className={`${p} text-white font-semibold`}>Prompt:</p>

      <CodeBlock code={CHATGPT_PROMPT} label="ChatGPT prompt" language="prompt" />

      <p className={p}>
        This prompt will ask ChatGPT to customize your LaTeX resume to best fit a particular job,
        while ensuring the formatting and structure remain intact.
      </p>
      <p className={p}>
        <strong className="text-white">Note:</strong> Please try to run the original LaTeX template
        code first and check the format and how it looks before giving it to ChatGPT as it might alter
        formatting sometimes. Your goal should be to change the <em>content</em>.
      </p>
      <p className={p}>
        By using this simple, actionable guide, you&apos;ll have a professional resume in no time.
        With the help of Overleaf and LaTeX, you can create a resume that truly stands out from the
        crowd. Happy job hunting!
      </p>
    </div>
  );
};

export default JobHuntLatexResumeArticle;
