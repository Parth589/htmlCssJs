func = (r, s) => {
    if (r.test(s)) {
        let result = r.exec(s);
        console.log(r.toString(), result.index);
    }
    else
        console.log("Not found!");
};
let r = /pen/;
let s = "I have a pen. this pen is so beautiful. it costs me around 5005 rupees.";


//* character sets
r = /bea[aeiou]tiful/;//give option from list
r = /p[a-z]n/;//give option as range
r = /5[0-9]05/;//try this: /5[0-9]*5/

r = /bea[^aeiou]tiful/;//don't take option from list
// info: we can use as many character sets as we want in a regular expression. 

// *quantifiers
s = "I have a pen. this pen is so beautiful. it costs me around 5005 rupees.this en writes like a bee. i am sooo exited.";
r = /be{2}/;//e must occur exactly 2 times
r = /so{1,5}/;// o must occur from 0 to 5 times


//* grouping
r = /(so){1,5}/;// "so" must occur from 0 to 5 times

//*shorthand character classes
/**
 * \s - single whitespace character
 * \s+ - one or more whitespace character
 * \S - single non-whitespace character
 * \S+ - one or more non-whitespace character


 * \w - single word character([a-z],[A-Z],[0-9],_)
 * \w+ - one or more word character
 * \W - single non-word character
 * \W+ - one or more non-word character


 * \d - single digit character([0-9])
 * \d+ - one or more digit character
 * \D - single non-digit character
 * \D+ - one or more non-digit character

 */

// * assertions
/**

 * \b - refers to a word boundary
 * \B - refers to not a word boundary
 * (?=<<pattern>>) - same as adding <<pattern>> diectly to the regEx
 * (?!<<pattern>>) - the pettern must not occur
 * ^ - start of  string
 * $ - end of  string
 
*/
