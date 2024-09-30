var isValid = function(s) {
    while (true) {
        if (s.includes("()")) {
            s = s.replace("()", "");
            
        } else if (s.includes("{}")) {
            s = s.replace("{}", "");
        } else if (s.includes("[]")) {
            s = s.replace("[]", "");
        } else {
            return s === "";
    }
    

    }
};


console.log(isValid("([)]"))
