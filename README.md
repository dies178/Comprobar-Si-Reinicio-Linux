# If-reboot
Es un pequeño script que sirve, para comprobar si se necesita reiniciar, comprobando si existe un archivo que se crea cuando el sistema si pide reiniciar.

## ¿Como usarlo?
* 1- Despues de descargarlo, nos metemos en la carpeta de este proyecto.
* 2- usamos "npm i" para descargar los paquetes.
* 3-  ejecutarlo con "npm start" o si queréis ponerlo como comando seguir leyendo.

## ¿Como usarlo como un comando?
* 1- Editamos el bashrc, usando nano ~/.bashrc.
* 2- Bajamos abajo del todo.
* 3- Escribimos alias [el nombre que quieras]='node y aqui la ruta/direccion del archivo index.js del src' 
*  (ejemplo: alias if-reboot='node /home/dies178/if_reboot/src/index.js'
* 4- Para que se lea de nuevo el bashrc ponemos "source ~/.bashrc" y ya lo podriamos usar.
