# NotBoardGames

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1. It is a local board game website my friends and I started. It was an excuse to practice web development, as well as use a few other technologies that I wasn't super familiar with.

## Docker

To run on a docker image, I have provided a Dockerfile. All you need to do is create the image, subsituting <image-name> with whatever you desire:
```
docker build -t <image-name> .
```
then once that is done, simply run the docker image on the desired port you want the condtainer to reference on your machine (<desired-port>):
```
docker run -p <desired-port>:80 <image-name>
```

