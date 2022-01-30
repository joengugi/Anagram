function anagram(name, words) {
    name1 = name.toLowerCase().split('').sort().join('').trim();
    words1 = words.toLowerCase().split('').sort().join('');
    return name1 === words1;
}



console.log(anagram('binary', 'brainy'));

// let isAnagram1 = (s, t) => {
//     s = s.toUpperCase().split('').sort().join('');
//     t = t.toUpperCase().split('').sort().join('');
// }

// function exec(s, t) {
//     if (s === t) {
//         document.write(+x, " and" + y, " are anagrams");
//     } else {
//         document.write(+x, " and " + y, " are not anagrams");
//     }

// }
// var x = exec.prompt("Enter string 1: ", +s);
// var y = exec.prompt("Enter string 2: ", +t);