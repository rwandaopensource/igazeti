postgres:
	docker run --name postgres -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=igazeti@123 -d postgres:12-alpine

createdb:
	docker exec -it postgres createdb --username=root --owner=root igazeti

dropdb:
	docker exec -it postgres dropdb --username=root --owner=root igazeti

migrateup:
	migrate -path internal/db/migration -database "postgresql://root:igazeti@123@localhost:5432/igazeti?sslmode=disable" -verbose up

migratedown:
	migrate -path internal/db/migration -database "postgresql://root:igazeti@123@localhost:5432/igazeti?sslmode=disable" -verbose down

.PHONY: postgres createdb dropdb migrateup migratedown

