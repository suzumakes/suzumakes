###Download Site
```
wget -r -e robots=off -nc -p -E -k http://
```

######Options

| wget option  | shortcut | description |
| --------------- | --------------- | --------------- |
| --execute robots=off | -e robots=off | ignore robots.txt |
| --recursive | -r | follow links down recursively |
| --no-clobber | -nc | don't overwrite existing files |
| --no-parent | -np | don't pull from parent directory |
| --page-requisites | -p | grab all page requisites |
| --adjust-extension | -E | add .html extension |
| --convert-links | -k | convert links to work offline |

###Spider Site
```
wget --spider -a spider.log -e robots=off -r -np -nv http://
```
Overwrite
```
wget --spider -o spider.log -e robots=off -r -np -nv http://
```

######Options

| wget option  | shortcut | description |
| --------------- | --------------- | --------------- |
| --execute robots=off | -e robots=off | ignore robots.txt |
| --recursive | -r | follow links down recursively |
| --no-parent | -np | don't pull from parent directory |
| --output-file=\* | -o \* | log messages to outfile |
| --append-file=\* | -a \* | append new logs to outfile |
| --spider | none | wget acts as spider |
| --no-verbose | -nv | quiet additional output |

######More Options

| wget option  | shortcut | description |
| --------------- | --------------- | --------------- |
| --wait | -w | wait in seconds |
| --include | -i | include listed directories |
| --no-directories | -nd | stop wget from creating a heirarchy of directories |
| --length | -l | specify length |
| --restrict-file-names=windows | none | rename files ot work with Windows |
| --domains=\* | -D \* | set domains to be followed |
