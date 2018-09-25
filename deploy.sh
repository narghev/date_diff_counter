git branch -D deploy_to_heroku;
printf '\n';

git checkout -b deploy_to_heroku;
printf '\n';

yarn;
printf '\n';

yarn build;
printf '\n';

git add -f ./build;
printf '\n';

git commit -m 'add build folder';
printf '\n';

git push -f heroku deploy_to_heroku:master;
printf '\n';

git checkout -;
printf '\n';

git branch -D deploy_to_heroku;
printf '\n'; 