# NoteTaker

Project made with React on the front-end and AWS API Gateway, AWS Lambda and DynamoDB on the backend.

## Site is live!

https://youthful-galileo-3c7fd3.netlify.com/#

## Notetaker API

### GET

Get all notes ```/notetaker```

Example Response:

```
[
  {
      "content": "Hello world",
      "date": "2018-12-27",
      "tag": "Work",
      "id": "34e7e700-0a52-11e9-8cc9-cf77d091f830"
  },
  {
      "content": "I just figured out how to nail this serverless framework",
      "date": "2018-12-27",
      "tag": "Work",
      "id": "47373560-0a51-11e9-b5b1-f13df6246d0c"
  }
]
```

### POST

Create a new note ```/notetaker```

Example Request:
```
{
	"content": "hello world",
	"tag": "Work",
	"date": "2018-04-04"
}
```

Example Response:

```
{
  statusCode: 201,
  message: "Note successfully created"
}
```

# Final Result!

![layout](layout.gif)

![Network on page load](get.gif)

![While filtering](filter.gif)

