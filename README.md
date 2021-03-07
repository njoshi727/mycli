#### mycli

mycli is an command line utility , made using JavaScript and NodeJs .
It has following commands :
* **View** : 
    It has following two modes
    * node mycli.js view Tree *dirPath* --> To show structure of directory in Tree mode 
    * node mycli.js view Flat *dirPath* --> To show structure of directory in Flat mode

* **Organize** :
    Highlight of *mycli* , It basically copy files inside a directory and segregate them into *Media*,*Apps*,*Docs*,*Archives* and *Others*
    node mycli.js organize *dirPath*

* **Help** :
    To List out all the commands
    node mycli.js Help

###### Further Possible Improvement to implement in Future :
* To make this script global.
* Currently If there are different file of same name in different subdirectory of a directory , It cannot duplicate them.
* Some system level file can't accesed and copy.
