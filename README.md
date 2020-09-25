# NotBoardGames
[https://notboredboardgames.net](https://notboredboardgames.net/)

Not Bored Board Games is a local board game rental website for a company my friends and I started. It was an excuse to practice web development, as well as use a few other technologies that I wasn't super familiar with.

Currently it is hosted using BYU's free domain service provided to its students. Future developements include:
- Providing instant payment options
- A live calendar that displays the availability for each board game
- Other developments as we need them

## Docker

To run on a docker image, I have provided a Dockerfile. All you need to do is create the image, subsituting <image-name> with whatever you desire:
```
docker build -t <image-name> .
```
then once that is done, simply run the docker image on the desired port you want the condtainer to reference on your machine (<desired-port>):
```
docker run -p <desired-port>:80 <image-name>
```

