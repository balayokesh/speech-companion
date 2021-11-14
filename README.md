<h1 align='center'>Speech Companion</h1>


## To run project locally:
### 1. Download code from github
```bash
git clone https://github.com/balayokesh/speech-to-text.git
```
### 2. Change directory
```bash
cd speech-to-text
```
### 3. Install dependencies and start project
```bash
npm i && npm start
```


## Use Docker:
You can also run the project as a Docker Container.
### 1. Download code from github
```bash
git clone https://github.com/balayokesh/speech-to-text.git
```
### 2. Build the Docker image
```bash 
docker build -t speech-companion .
```
### 3. Run the Docker container locally
```bash
docker run --name speech-companion -p 8080:3000 -d speech-companion