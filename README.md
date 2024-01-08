# How To Use Pemilu Backend Using Postman

How to use authorization
1. Click tab authorization on postman
2. Choose Type "Bearer Token" on the left
3. Insert token on the right


#### A. User

1. Register<br>
    ### Users
    * Url : http://localhost:5000/api/v1/user/register
    * Method : `POST`
    * Json body example :

            {
                "fullName": "Anak Buah",
                "alamat": "sebelah tangga",
                "jenisKelamin": "Laki-Laki",
                "username": "users",
                "password": "123456"
            }

    ### Admin
    * Url : http://localhost:5000/api/v1/user/register/admin
    * Method : `POST`
    * Json body example :

            {
                "fullName": "Bos Besar",
                "alamat": "sebelah rumah",
                "jenisKelamin": "Laki-Laki",
                "username": "ademin",
                "password": "123456"
            }

2. Login<br>
* Url       : http://localhost:5000/api/v1/user/login
* Method    : `POST`
* Json body example :

        {
            "username" : "user",
            "password" : "123456"
        }

note: you will received token which is used to authorization<br>


#### B. Article

1. Getting all article (no authorization)<br>
* Url       : http://localhost:5000/api/v1/article
* Method    : `GET`
  
2. Getting a article (no authorization)<br>
* Url       : http://localhost:5000/api/v1/article/{article-id}
* Method    : `GET`

3. Create a article (required authorizaton (Admin))
* Url       : http://localhost:5000/api/v1/article/add
* Method    : `GET`
* Form-data body example :
```
    title       = Debat Capres Memanas
    img         = capres.png
    description = Debat Capres kembali memanas di tahun 2024
```

4. Update a article (required authorizaton (Admin))<br>  
* Url       : http://localhost:5000/api/v1/article/{article-id}
* Method    : `PUT`
* Form-data body example :
```
    title       = Debat Capres Memanas
    img         = capres.png
    description = Debat Capres kembali memanas di tahun 2024
```

5. Delete a article (required authorization (Admin))<br>
* Url       : http://localhost:5000/api/v1/article/{article-id}
* Method    : `DELETE`


#### C. Paslon

1. Getting all paslon (no authorization)<br>
* Url       : http://localhost:5000/api/v1/paslon
* Method    : `GET`
  
2. Getting a paslon (no authorization)<br>
* Url       : http://localhost:5000/api/v1/paslon/{paslon-id}
* Method    : `GET`

3. Create a paslon (required authorizaton (Admin))
* Url       : http://localhost:5000/api/v1/paslon
* Method    : `POST`
* Form-data body example :
````
    name          = Bowo
    nomorUrut     = 1
    visiMisi = Berantas Tikus
    img         = wujudAseliBowo.png
````
4. Update a paslon (required authorizaton (Admin))
* Url       : http://localhost:5000/api/v1/paslon/{paslon-id}
* Method    : patch
* Form-data body example :
````
    name          = Bowo
    nomorUrut     = 1
    visiMisi = Berantas Tikus
    img         = wujudAseliBowo.png
````
5. Delete a paslon (required authorization (admin))<br>
* Url       : http://localhost:5000/api/v1/paslon/{paslon-id}
* Method    : `DELETE`

#### D. Partai

1. Getting all partais (no authorization)<br>
* Url       : http://localhost:5000/api/v1/partai
* Method    : `GET`
  
2. Getting a partai (no authorization)<br>
* Url       : http://localhost:5000/api/v1/partai/{partai-id}
* Method    : `GET`

3. Create a partai (required authorizaton)
* Url       : http://localhost:5000/api/v1/partai
* Method    : `POST`
* Form-data body example :
```
    name          = Partai Kandang
    leader        = Ibu Besar
    visiMisi      = REKAM BACA POSTING
    alamat        = sebelah warung barokah
    img           = ibuBesar.png
```
4. Update a partai (required authorizaton (admin))
* Url       : http://localhost:5000/api/v1/partais/{{partai-id}}
* Method    : `PATCH`
* Form-data body example :
```
    name          = Partai Kandang
    leader        = Ibu Besar
    visiMisi      = REKAM BACA POSTING
    alamat        = sebelah warung barokah
    img           = ibuBesar.png
```
5. Delete a partai (required authorization (admin))
* Url       : http://localhost:5000/api/v1/partais/{{partai-id}}
* Method    : `DELETE`

6. Pick a Paslon as Partai (required authorization (admin))<br>
* Url       : http://localhost:5000/api/v1/partai/{{partai-id}}
* Method    : `POST`
* Json body example :

        {
            "paslonId" : 1
        }

#### E. Voter

1. Getting all vote (no required authorization)<br>
* Url       : http://localhost:5000/api/v1/voting
* Method    : `GET`

2. Voting (required authorization (users))<br>
* Url       : http://localhost:5000/api/v1/voting<br>
* Method    : `POST`
* Json body example :

        {
            "paslonId" : 1
        }



