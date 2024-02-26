# Treatment Entry

## System Requirement

Recommended dependencies are :
- node v20.9.0
- npm v10.1.0

## Configuration file

- **env/.env.dev** = Use this configuration for development / local device / localhost
- **env/.env.staging** = Use this configuration for server staging / server testing 
- **env/.env.prod** = Use this configuration for production

## Configuration step

- Open configuration file according to the deployment destination (local/staging/production) in the file mentioned above
- Replace **REACT_APP_API_URL** [mandatory] with API base url in Local / Dev server (ex: http://localhost:8000/api/v1/)

## Run 
Run for development / local 
```
cd existing_repo
npm install
npm run dev
```

## Build 

Build for development / local 
```
cd existing_repo
npm install
npm run build:dev
```