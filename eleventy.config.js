// default input
export const config = {
	dir: {
	  input: "src"
	},
	
	//addPassthroughCopy: {
		// Copy specific image files 
	//	"**/*.svg": "images", 
	//	"**/*.png": "images"
	//}
  };
  

// accept img

//import { DateTime } from "luxon";

export default function (eleventyConfig) {
	// Output directory: _site

	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("src/img");

	// Copy `css/fonts/` to `_site/css/fonts`
	// Keeps the same directory structure.
	//eleventyConfig.addPassthroughCopy("css/fonts");

	// Copy any .jpg file to `_site`, via Glob pattern
	// Keeps the same directory structure.
	//eleventyConfig.addPassthroughCopy("**/*.svg");

	/*eleventyConfig.addDateParsing(function(dateValue) {
		return DateTime.fromFormat(dateValue, "yyyy-MM-dd");
	});*/

};