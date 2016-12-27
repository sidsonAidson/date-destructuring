date-destructuring - date destructuring 
=====================================================

destructuring date or duration(ms) into microSeconds seconds minutes hours days months years

###USAGE
``` javascript
let dest = require('date-destructuring');
console.log(dest(new Date('2016-05-04') - new Date('2016-05-03'), 31));
// Object { microSeconds: 0, seconds: 0, minutes: 0, hours: 0, days: 1, months: 0, years: 0 }

console.log(dest(new Date('2016-05-04')- new Date('2016-05-03 12:13:09'), 31)); 
//Object { microSeconds: 0, seconds: 51, minutes: 46, hours: 11, days: 0, months: 0, years: 0 }

console.log(dest(new Date('2016-05-04')- new Date('2016-05-03 00:13:09'), 31))
//Object { microSeconds: 0, seconds: 51, minutes: 46, hours: 23, days: 0, months: 0, years: 0 }

```

###API
``` javascript
diff(ms, monthDay)
```
+ ms : microsecond or Date Object, or String Date
+ monthday: duration in day for month , default 31
