ssh pi@192.168.1.72 <<-'ENDSSH'
  cd ~/Programs/app
  git add .
  git commit -m "Deploy"
  git push origin master
  git pull origin master
  npm install
  pm2 reload app
  pm2 list
  exit
ENDSSH