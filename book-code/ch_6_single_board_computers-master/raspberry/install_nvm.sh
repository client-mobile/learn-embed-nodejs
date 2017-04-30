

# clone git repo
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm

# find most recent version
git tag --list

# load nvm
source ~/.nvm/nvm.sh

# install node version 0.12.0
nvm install 0.12.0
