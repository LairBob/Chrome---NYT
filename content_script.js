var el = document.getElementsByTagName("a");
for(var i=0;i<el.length;i++){
	// if el[i].search("nytimes.com") > 1 {
	    el[i].href = el[i].href + "&pagewanted=all"
	// }
}