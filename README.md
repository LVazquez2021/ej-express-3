#Ej-Express-3

## instalar dependencias con 
`npm install`

## para ver rutas iniciar el servidor con 
`node server.js`

## ruta raiz poner en el browser

`localhost:3030`

## ruta para ver imagen colocar en el browser

`localhost:3030/img`

## ruta para ver gif en el browser colocar

`**localhost:3030/gif**`




CONSIGNA 3 :
Contruyan un servidor web más con Express con los siguientes endpoints:
GET / : Retorna archivo index.html igual al de la consigna 2
GET /saludo : Retorna el texto "holaaaa"
GET /foto : Retorna un archivo de imagen. Puede ser cualquier archivo jpg, png, gif, etc. Lo retornan con el mismo sendFile que vimos para enviar un archivo HTML y el navegador va a mostrar la imagen. El archivo de imagen que quieran usar cópienlo en la carpeta donde arman el server.
Recuerden que para retornar los archivos tienen que poner la ruta absoluta, que la pueden construir con __dirname o escribirla completa.