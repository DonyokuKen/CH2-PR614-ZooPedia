
## API Reference

Endpoint

#### API Predict

```
  https://api-predict-el7xmjzuqa-uc.a.run.app/predict
```

| Method       | Content Type:         | Key               | Type    |
| :--------    | :--------             | :-------          | :-------|
| `POST`       | `multipart/form-data` | `uploaded_file`   | `Files` |

POST - Response Code: 200
```http
    {  
        "status": {
            "code":200,
            "data":
                     "prediction_class": "cane",
                     "prediction": "dog"
            },
    }
```

Error Endpoint Type
```http
    {
      "code": "404"
      "message": "No data found"
    }
```

Error Connection To Database
```http
    {
      "code": "500"
      "message": "Internal Server Error"
    }
```


#### Get All Animals

```
  https://animal-api-el7xmjzuqa-uc.a.run.app/
```

| Method      | paths:                    |
| :--------   | :--------                 |
| `GET`       | `/getAnimals`             | 
| `GET`       | `/getAnimals/verte`       | 
| `GET`       | `/getAnimals/inverte`     | 

#### 

