
# Shortify

A simple URL shortener built using MD5 encryption algorithm

## Tech Stack

Node, Express, MongoDB
## API Reference

#### Shorten a URL

```http
  POST /api/url/shorten
```

Body: {"longURL": "your URL here"}

#### Redirect to original URL

```http
  GET /shortCode
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortCode`      | `string` | **Required**. Shortened code of original URL |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`BASE_URL`

`MONGO_URI`


## Run Locally

Clone the project

```bash
  git clone https://github.com/chhavitekriwal/shortify.git
```

Go to the project directory

```bash
  cd shortify
```

Install dependencies

```bash
  yarn install
```
Configure environment variables

Start the server

```bash
  yarn start
```

