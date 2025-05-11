import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; // Assuming you already have these animation utils
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { styles } from "../styles";
import resumeBlog from "../assets/resumeBlog.jpg";  // Assuming the image is located here
import { SectionWrapper } from "../hoc";

const BlogCard = ({ index, title, description, id }) => {
  const navigate = useNavigate();  // Initialize navigate

  const handleReadMore = () => {
    return;
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="cursor-pointer">
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]" style={{ backgroundImage: `url(${resumeBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Background image is set here */}
        </div>

        <div className="mt-5">
          <p className="text-white font-bold text-[24px]">{title}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <button onClick={handleReadMore} className="text-white mt-2 text-[14px] font-bold cursor-pointer">
            Read More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  // Blog data array with IDs
  const blogs = [
    {
      id: 1,
      title: "Job Hunt Guide: Create a Professional Resume using LaTeX (Overleaf)",
      description: "Having a standout resume is the first step toward securing that dream job.",
    }
    // Add more blogs here...
  ];

  return (

    <>
      {/* Blog Section */}
      <motion.div variants={fadeIn("up", "spring", 0, 0.75)}>
          <p className={`${styles.sectionSubText}`}>My blogs</p>
          <h2 className={`${styles.sectionHeadText}`}>Recent posts</h2>
        </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
      {blogs.map((blog, index) => (
            <BlogCard key={blog.id} index={index} {...blog} />
          ))}
      </div>
    </>
  );
};


export default SectionWrapper(Blog, "blog");