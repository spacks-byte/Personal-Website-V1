module.exports = function(eleventyConfig) {
  // Copy css files to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy resources (images, etc.) to output
  eleventyConfig.addPassthroughCopy("resources");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
