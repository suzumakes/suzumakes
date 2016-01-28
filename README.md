###Snippets/Scripts

######Find and Replace strings recursively
```
find . -type f -exec sed -i '' -e 's/old-string/new-string/g' {} +

LC_CTYPE=C find . -type f -exec sed -i '' -e 's/old-string/new-string/g' {} +
```

######Multiple Git Pulls
```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
```

######Switch Git Protocol
```
git config --global url."https://".insteadOf git://
```
Switch back => Users/YourUser/.gitconfig => delete
```
[url "https://"]
    insteadOf = git://
```

######Errors

Cannot find module '/usr/local/lib/node_modules/npm/lib/build.js'
```
cd ~/
npm rebuild
npm update -g
```
node-gyp rebuild failed
```
npm install -g node-gyp@latest
```
Clear local settings
```
localStorage.clear()
```

######NPM JS-Beautify

File
```
js-beautify -f input.ext -o output.ext
```
Files in Folder => HTML/CSS/JS
```
find . -type f -name "*.html" -exec js-beautify -r {} \;

find . -type f -name "*.css" -exec js-beautify -r {} \;

find . -type f -name "*.js" -exec js-beautify -r {} \;

find . -type f -name "*.html" -exec js-beautify -r {} \; && find . -type f -name "*.css" -exec js-beautify -r {} \; && find . -type f -name "*.js" -exec js-beautify -r {} \;
```

###Mac Config

######Add mysql to LaunchAgents (homebrew)
```
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
```
Load mysql now
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
```
Start mysql server
```
mysql.server start
```

######ASPNET Compiler
```
brew unlink czmq
brew link mono
```

######Remove or Move gamed from LaunchAgents

Remove
```
launchctl list
launchctl remove com.apple.gamed
```
Move
```
sudo mkdir /System/Library/LaunchAgentsDisabled
sudo mv /System/Library/LaunchAgents/com.apple.gamed.plist /System/Library/LaunchAgentsDisabled/
```

######Delete Game Center

FInder => Get Info => Add Sharing & Permissions Access => Add yourself
```
sudo rm rf /Applications/Game\ Center.app
```

######Disable SIP

In Recovery Mode:
```
csrutil disable
```

######Restore Admin (Mac)
[This article](http://www.macworld.com/article/2868032/what-to-do-if-your-mac-refuses-to-accept-your-password.html)

###Web Dev

######Bootstrap Media Sizes
```
@media (max-width: 767px) {
    // xs
}
@media (min-width: 768px) and (max-width: 991px) {
    // sm
}
@media (min-width: 992px) and (max-width: 1199px) {
    // md
}
```

######Foundation Media Sizes
```
@media (max-width: 640px) {
    // small
}
@media (min-width: 641px) and (max-width: 1024px) {
    // medium
}
@media (min-width: 1025px) and (max-width: 1440px) {
    // large
}
```

######Internet Explorer Media
```
@meda all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    IE 10+
}

input[type="foo"]:-ms-input-placeholder {
    IE 10+ textarea
}
```

######Safari Media
```
@suports (overflow:-webkit-marquee) and (justify-content: inherit) {
    Safari
}
```

###InterviewTests

These are the pages/apps I've been asked to make for interviews.

_Elements are changed to remove references to companies._

###responsive-page

[Demo](https://suzumakes.github.io/suzumakes/)

######Requirements

1. Page has to be responsive - x-small and large screens provided
2. Using a Grid System or CSS Framework is encouraged
3. Page needs to be cross-browser compatible. Chrome, Firefox, Safari, and IE
4. The font is Open Sans
5. Form does not have to function, but the form must be styled with valid elements
6. Accordion for "Sign-up To View" section. Chevron changes direction when accordion elements are toggled.

######Changes From Submission

1. Grunt-Includes used for better organization
2. Media queries for x-small, small, medium, and large screens included
3. SCSS is split into separate files, variables and mixins imported from my own snippets
4. No dropdown in the original submission.
