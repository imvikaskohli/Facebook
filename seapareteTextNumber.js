    var str = "Visit W3Schools!"; 
    var n = str.search(/w3Schools/i);
    var digits = str.replace(/\D/g, ""),
    letters = str.replace(/[^a-z]/gi, "");
    alert(digits);alert(letters);
