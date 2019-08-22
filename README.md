# Logging-Performance
the question was if logging to console causes a degradation in performance while running inside docker that supposedly does not have a screen attach to it????

it's written in typescript :)

```
docker build --tag=logger-tester . 

docker run --name logtest logger-tester

docker cp logtest:/app/tester.log .

cat tester.log | grep elapsed
```
enjoy the results
