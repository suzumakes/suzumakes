### Snippets/Scripts

###### Find and Replace strings recursively
```
find . -type f -exec sed -i '' -e 's/old-string/new-string/g' {} +

LC_CTYPE=C find . -type f -exec sed -i '' -e 's/old-string/new-string/g' {} +
```

###### Multiple Git Pulls
```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
```

###### Switch Git Protocol
```
git config --global url."https://".insteadOf git://
```
Switch back => Users/YourUser/.gitconfig => delete
```
[url "https://"]
    insteadOf = git://
```

###### Errors

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

###### NPM JS-Beautify

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

### Mac Config

###### Add mysql to LaunchAgents (homebrew)
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

###### ASPNET Compiler
```
brew unlink czmq
brew link mono
```

###### Remove or Move gamed from LaunchAgents

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

###### Delete Game Center

FInder => Get Info => Add Sharing & Permissions Access => Add yourself
```
sudo rm rf /Applications/Game\ Center.app
```

###### Disable SIP

In Recovery Mode:
```
csrutil disable
```
Give yourself ownership
```
sudo chown -R $user /usr/local
```

<h6>[Restore Admin (Mac)](http://www.macworld.com/article/2868032/what-to-do-if-your-mac-refuses-to-accept-your-password.html)</h6>

### Web Stuff

###### Bootstrap 3.3.6 Media Sizes
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

###### Foundation 6 Media Sizes
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

###### Internet Explorer Media
```
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    IE 10+
}

input[type="foo"]:-ms-input-placeholder {
    IE 10+ textarea
}
```

###### Safari Media
```
@suports (overflow:-webkit-marquee) and (justify-content: inherit) {
    Safari
}
```

### InterviewTests

These are the pages/apps I've been asked to make for interviews.

_Elements are changed to remove references to companies._
