###Debian 8 - VMWare Fusion

######Install sudo
```
su/sudo su
apt-get install sudo
adduser (username) sudo
nano /etc/sudoers
```
Look for
```
%sudo ALL=(ALL:ALL) ALL
(username) ALL=(ALL:ALL) ALL    // <-- add this
```
Type
```
ctrl+x
Y
exit
```

######Chrome
```
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable
```

######Dock

https://extensions.gnome.org/ --> Enable Dash to Dock

######Zsh
```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
