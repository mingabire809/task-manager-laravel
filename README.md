I built this project with the help of freecodecamp.org. The project was not fully built by myself. I got some assistances from freecodecamp.org

Requirements on the server should be:

PHP>=8.0
Composer
Node


Installing dependencies

composer update
composer install

npm install

setting up variable:
cp .env.example .env

Generate a key:
php artisan key:generate


php migrate --force
php artisan db:seed

npm run build

set up permissions (on linux):

sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache




DB connection in mysql in .env file example:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_manager
DB_USERNAME=root
DB_PASSWORD=Password

add the respective value corresponding to the database