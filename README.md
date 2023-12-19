# CH2-PR614-ZooPedia

**API Documentation**

**Endpoint API Predict**
</br>URL: https://api-predict-el7xmjzuqa-uc.a.run.app/predict
</br>Method: POST
</br>
        
**Description**
</br>This API endpoint allows users to perform predictions by uploading a file.

**Request Format**
</br> Method: POST 
</br> Content Type: multipart/form-data
        
**Request Body**
</br> Key: uploaded_file
</br>Type: File

**Interactive Documentation**
</br>Visit https://api-predict-el7xmjzuqa-uc.a.run.app/docs </br>to access the interactive API documentation.

#############

**Endpoint API getAnimals**
</br>URL: https://animal-api-el7xmjzuqa-uc.a.run.app/getAnimals
</br>Method: GET
</br>
        
**Description**
paths:
  /:
    get:
      summary: Get all animals
      operationId: getAnimals
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              example: |
                [
                  {
                    "name": "Lion",
                    "class": "Mammalia"
                  },
                  {
                    "name": "Eagle",
                    "class": "Aves"
                  },
                  ...
                ]

  /verte:
    get:
      summary: Get animals by vertebrata
      operationId: getAnimalsByVertebrata
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              example: |
                [
                  {
                    "name": "Dog",
                    "class": "Mammalia"
                  },
                  {
                    "name": "Snake",
                    "class": "Reptilia"
                  },
                  ...
                ]

  /inverte:
    get:
      summary: Get animals by invertebrata
      operationId: getAnimalsByInvertebrata
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              example: |
                [
                  {
                    "name": "Butterfly",
                    "phylum": "Arthropoda"
                  },
                  {
                    "name": "Snail",
                    "phylum": "Mollusca"
                  },
                  ...
                ]
