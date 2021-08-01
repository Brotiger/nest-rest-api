# Создание пользователя

docker exec -it mongo sh

mongo -u root -p

use products

db.createUser(
{
    user: "admin",
    pwd: "123123",
    roles: ["readWrite"]
})