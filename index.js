

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

// Example:

// letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}




function letterCount(s){
  //your code here
  let hashMap = {}
  
  for(let i =0; i<s.length; i++){
    if(!hashMap[s[i]]){
      hashMap[s[i]] = 1;
    }
    else if(hashMap[s[i]]){
      hashMap[s[i]]++
    }
  }
  
  return hashMap;
}