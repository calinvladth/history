for webstorm database system: 

If bug: 
```
jdbc:mysql://localhost/db?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
```

or 
```
SET GLOBAL time_zone = '+3:00';
```

Datetime will work in the following format:
```
YYYY-MM-DD HH:mm:ss
```