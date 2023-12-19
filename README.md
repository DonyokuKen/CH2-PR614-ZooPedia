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
</br>paths:
  </br>/:
    </br>get:
      </br>summary: Get all animals
      </br>operationId: getAnimals
      </br>responses:
        </br>'200':
          </br>description: Successful response
         </br> content:
            </br>application/json:
              </br>example: |
             </br>   [
                 </br> {
                  </br>  "name": "Lion",
                 </br>   "class": "Mammalia"
               </br>   },
                </br>  {
                </br>    "name": "Eagle",
               </br>     "class": "Aves"
               </br>   },
              </br>    ...
             </br>   ]

</br>  /verte:
</br>    get:
 </br>     summary: Get animals by vertebrata
  </br>    operationId: getAnimalsByVertebrata
   </br>   responses:
   </br>     '200':
    </br>      description: Successful response
      </br>    content:
       </br>     application/json:
         </br>     example: |
          </br>      [
           </br>       {
             </br>       "name": "Dog",
             </br>       "class": "Mammalia"
             </br>     },
              </br>    {
               </br>     "name": "Snake",
              </br>      "class": "Reptilia"
               </br>   },
              </br>    ...
             </br>   ]

 </br> /inverte:
  </br>  get:
   </br>   summary: Get animals by invertebrata
   </br>   operationId: getAnimalsByInvertebrata
    </br>  responses:
    </br>    '200':
      </br>    description: Successful response
      </br>    content:
      </br>      application/json:
        </br>      example: |
         </br>       [
          </br>        {
           </br>         "name": "Butterfly",
           </br>         "phylum": "Arthropoda"
            </br>      },
              </br>    {
                 </br>   "name": "Snail",
               </br>     "phylum": "Mollusca"
             </br>     },
            </br>      ...
             </br>   ]
