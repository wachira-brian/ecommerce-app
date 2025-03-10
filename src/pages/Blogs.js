import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
return (
    <section className="blog-wrapper py-5 home-wrapper-2">
    <div className="container-fluid">
    <div className="row">
        <div className="col-12">
        <h3 className="section-heading">Our latest Blogs</h3>
        </div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
    </div>
</section>
);
};

export default Blogs;
