const patMatch = (s, p) => {
  //const regex = new RegExp(`^${p}$`);
  //return regex.test(s);
  //Possible patterns: a, a*, ., *a, .a, and .*
  const all = p.split('*')
  const single = p.split('.')
  console.log(' All ', all, ' single ', single)
  // Check if * pattern is present
  if (all.length > 1) {
    for (i = 0; i < all.length; i++) {
      let occurance = all[i]
      if (occurance !== '') {
        console.log(' index of occurance in s ', s.indexOf(occurance))
        let firstIndex = s.indexOf(occurance)
        if (firstIndex !== 0) {
          return false
        } else {
          let allChars = s.split(occurance)

          console.log(' All chars ', allChars, 's ', s, 'occurance ', occurance)
          if (allChars.length !== occurance.length) {
            return false
          }
        }
      }
    }
  }

  return true
}
console.log(' Match ', patMatch('abaa', 'ab*')) // true
//console.log(' Match ', patMatch('aa', 'a'));
//console.log('aaba'.split('a')) // [ '', '', '', '' ]

//Possible patterns: a, a*, ., *a, .a, and .*
