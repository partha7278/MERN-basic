# Server

```http://localhost:5000``` is server address 


## Details
{EndPoint} is ```http://localhost:5000/api```

### Fetch all Users with paginations
#### url ```{EndPoint}/users```
#### Request (POST)
{ "page":"{page_no}" }
#### Response 
{
    "status": "SUCCESS",
    "statusCode": 200,
    "message": "",
    "rowCount": {no_of_rows},
    "data": [],
    "page": {page_no},
    "totalUsers": {total_users},
    "totalPage": {total_page}
}


### Fetch all friends of a user
#### url ```{EndPoint}/users/friends/{user_id}```
#### Request (GET)
#### Response 
{
    "status": "SUCCESS",
    "statusCode": 200,
    "message": "",
    "rowCount": {no_of_rows},
    "data": []
}


### Fetch all friends of friends of a user (means 2nd degree connection)
#### url ```{EndPoint}/users/friends2/{user_id}```
#### Request (GET)
#### Response 
{
    "status": "SUCCESS",
    "statusCode": 200,
    "message": "",
    "rowCount": {no_of_rows},
    "data": []
}
