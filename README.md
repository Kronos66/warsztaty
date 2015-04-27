#NodeJS - serwer

##Konfiguracja:

* w pliku w Procfile podaje ścieżkę do pliku, który uruchamia cały serwer u Nas jest to **index.js** w folderze app z typem **web**
* w **package.json** wpisuje potrzebne nam zależności do uruchomienia aplikcaji.
* kiedy już mamy gotowy serwer to w konsoli wpisujemy **heroku create ```nasza nazwa aplikacji```**, następnie później wpisujemy **git push heroku master**, nasz serwer musi znajdowac się na branchu master
ponieważ tylko wtedy klient heroku zaciągnie nam zależności potrzebne do usuchomienia serwera i go następnie uruchomi.
* nasza aplikacja po udany wypchnięciu aplikacji do heroku staje się ona dostępna pod adresem ```nazwa aplikacji```.herokuapp.com```/routy które wpisaliśmy w serwerze```
* jeśli serwer się nie odpalił to trzeba wpisać w konsoli **heroku ps:scale web=1**