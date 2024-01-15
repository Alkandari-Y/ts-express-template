
.PHONY: add_db_prisma
add_db_prisma:
	npm i -D add_db_prisma
	npm i @prisma/client


.PHONY: prisma_init
prisma_init:
	npx prisma init