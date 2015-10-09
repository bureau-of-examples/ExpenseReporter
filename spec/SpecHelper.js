"use strict";

var customMatchers = {

    toBeAReasonableExpense: function(){
        return {
            compare: function(actual){
                var pass = actual.amount <= 100;
                var judgement = pass ? "reasonable" : "unreasonable";

                return {
                    pass: pass,
                    message: "Expected expense to be a '" + judgement + "' expense."
                };
            }
        };
    }

};