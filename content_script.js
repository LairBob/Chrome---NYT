var el = document.getElementsByTagName("a");
for(var i=0;i<el.length;i++){
	// if el[i].search("nytimes.com") > -1 {
		// if el[i].search("pagewanted") = -1 {
			// if el[i].search("?") > -1 { 
				// el[i].href = el[i].href + "&pagewanted=all" 
			// } else {
		    	// el[i].href = el[i].href + "?pagewanted=all"
			// }
		// }
	}
	el[i].href = el[i].href + "&pagewanted=all" 
}