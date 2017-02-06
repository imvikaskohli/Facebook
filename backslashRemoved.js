var str = "foo/bar/test.html";
var n = str.lastIndexOf('/');
var result = str.substring(n + 1);
lastIndexOf does what it sounds like it does: It finds the index of the last occurrence of a character (well, string) in a string, returning -1 if not found. Nine times out of ten you probably want to check that return value (if (n !== -1)), but in the above since we're adding 1 to it and calling substring, we'd end up doing str.substring(0) which just returns the string.

Using Array#split

Sudhir and Tom Walters have this covered here and here, but just for completeness:

var parts = "foo/bar/test.html".split("/");
var result = parts[parts.length - 1]; // Or parts.pop();
split splits up a string using the given delimiter, returning an array.

The lastIndexOf / substring solution is probably the most efficient (although one always has to be careful saying anything about JavaScript and performance, since the engines vary so radically from each other), but unless you're doing this thousands of times in a loop, it doesn't matter and I'd strive for clarity of code.
