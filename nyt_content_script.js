// Define the array of anchor elements
var el = document.getElementsByTagName("a");

// Define the list of terms that will prevent the 'pagewanted' from being appended
var strExcludeExp = /pagewanted|adx|index|asp|comment|javascript|myaccount|membercenter|\/help\/|\/interactive\//

// Loop through the anchor elements
for(var i=0;i<el.length;i++) {
	// Only consider links within the 'nytimes.com' domain
	if (el[i].href.toLowerCase().search("nytimes.com") > -1) {
		// Make sure that the destination URL doesn't include any of the excluded expressions
		if (el[i].href.toLowerCase().search("slideshow") > -1) {
			
		}
		if (el[i].href.toLowerCase().search(strExcludeExp) == -1) {
			// Check to see whether the destination URL already contains parameters
			if (el[i].href.search(/\?/) > -1) {
				el[i].href = el[i].href + "&pagewanted=all"
			} else {
				el[i].href = el[i].href + "?pagewanted=all"
			}
			// Modify the target attribute to ensure that the link will open in a new tab
			el[i].target="_blank"
		}
	}
}