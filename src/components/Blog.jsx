import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { resumeBlog } from "../assets";
import { blogPosts } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, description, slug, image }) => {
  const coverImage = image ?? resumeBlog;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="sm:w-[360px] w-full"
    >
      <article className="bg-tertiary p-5 rounded-2xl h-full flex flex-col">
        <div
          className="relative w-full h-[230px] rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />

        <div className="mt-5 flex flex-col flex-1">
          <h3 className="text-white font-bold text-[24px] leading-tight">{title}</h3>
          <p className="mt-2 text-secondary text-[14px] flex-1">{description}</p>
          {slug ? (
            <Link
              to={`/blog/${slug}`}
              className="text-white mt-4 text-[14px] font-bold cursor-pointer hover:text-[#804dee] transition-colors inline-flex items-center gap-1 w-fit"
            >
              Read More →
            </Link>
          ) : (
            <span className="text-secondary mt-4 text-[14px]">Coming soon</span>
          )}
        </div>
      </article>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My blogs</p>
        <h2 className={styles.sectionHeadText}>Recent posts</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {blogPosts.map((blog, index) => (
          <BlogCard key={blog.id} index={index} {...blog} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
