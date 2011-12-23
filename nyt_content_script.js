var el = document.getElementsByTagName("a");
var strExcludeExp = /pagewanted|adx|index|asp|comment|javascript/
for(var i=0;i<el.length;i++) {
	if (el[i].href.toLowerCase().search("nytimes.com") > -1) {
		if (el[i].href.toLowerCase().search(strExcludeExp) == -1) {
			if (el[i].href.search(/\?/) > -1) {
				el[i].href = el[i].href + "&pagewanted=all"
			} else {
				el[i].href = el[i].href + "?pagewanted=all"
			}
			el[i].target="_blank"
		}
	}
}