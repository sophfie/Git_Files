function unit3() {

text = "My name is Sophie, Sophie is my name, abc Sophie";

var myName = "Sophie";
var hits = [];

// Look for "S" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "S") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

};