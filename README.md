# Logging-Performance
the question was if logging to console causes a degradation in performance while running inside docker that supposedly does not have a screen attach to it????

it's written in typescript :)

for those who are not familiar with the ways of typescript
this should install typescript on your system and transpile it and create the out file with the javascript files to run
WINSTON type definitions throws some errors you can ignore it for now
```
npm install -g typescript
tsc

```
down to business
```
docker build --tag=logger-tester . 

docker run --name logtest logger-tester

docker cp logtest:/app/tester.log .

cat tester.log | grep elapsed
```
enjoy the results
