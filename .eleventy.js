module.exports = function(eleventyConfig) {
  // Copy css files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy resources (images, etc.) to output
  eleventyConfig.addPassthroughCopy("resources");
  
  // Copy CNAME file for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
