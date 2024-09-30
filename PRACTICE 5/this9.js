
"use strict";

const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
    //   (function(){

    //     console.log(this.name);
    //     console.log(self.name);
        
    //   })();
    function y(){
        console.log(this.name);
        console.log(self.name);
    }
    y();
    }
  }
  b.f();