
### General Command line instructions Git basic (not related to this project)

##### Git global setup

git config --global user.name "Manu Krishnan"
git config --global user.email "manu.krishnan@example.com"

##### Create a new repository

git clone https://something.git
cd tester
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

##### Existing folder

cd existing_folder
git init
git remote add origin  https://something.git
git add .
git commit -m "Initial commit"
git push -u origin master

##### Existing Git repository

cd existing_repo
git remote rename origin old-origin
git remote add origin  https://something.git
git push -u origin --all
git push -u origin --tags