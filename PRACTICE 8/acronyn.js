let words = ["alice","bob","charlie"], s = "abc"


var isAcronym = function(words, s) {
   return s === words.map((x)=>{ return x[0] }).join("")
};

isAcronym(words, s)

