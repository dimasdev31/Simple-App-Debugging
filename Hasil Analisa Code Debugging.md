# Hasil Analisa Code Debugging

  - Pemberian nama file env yang kurang karakter titik
    ```sh
        env -> .env
    ```
  - Deklarasi penggunaan libary dotenv yang salah penataan posisi
     ```sh
            // Sebelum diperbaiki
            const config = {
                port: process.env.PORT,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                oauthUrl: process.env.OAUTH_URL,
                apiUrl: process.env.API_URL,
            }
             const envFound = dotenv.config();  
             
            // Sesudah diperbaiki
            const envFound = dotenv.config();  
            const config = {
                port: process.env.PORT,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                oauthUrl: process.env.OAUTH_URL,
                apiUrl: process.env.API_URL,
            }
    ```
  - Sintak untuk export module yang typo
    ```sh
        // Contoh sebelum dirubah
        module.export = {}
        
        // Contoh setelah dirubah
        module.exports = {}
    ```
  - Pemanggilang fungsi kembalian promise data api kurang betul sehingga menyebabkan data menjadi undefined di module userGetInfo
     ```sh
        // Contoh sebelum dirubah menghilangkan return data ketika success
        function getUserInfo(token) {
            return axios({
                method: "get",
                url: `${config.apiUrl}/user`,
                headers: {
                  'Authorization': "token " + token,             
                },
            })    
          }
    ```
  - paramater return then di module callback terjadi typo
    ```sh
        // Sebelum dirubah
        .then((res) => resp.data["accessTOken"])
        
        // Sesudah dirubah
        .then((res) => res.data.access_token)
    ```