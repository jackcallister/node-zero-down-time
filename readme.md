# Node Zero Down Time

Using the PM2 package our Node app can be operated in cluster mode having any number of running application threads (normally the same number of system cores).

npm run start:production boots a pm2 process which will spawn 4 instances. Restarting the application with a zero down time deployment simply requires `pm2 reload <app>` which will round robin the instances.
