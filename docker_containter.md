docker run --name api-simpligy-db \
    -p 5432:5432 \
    -e POSTGRES_DB=api-simpligy \
    -e POSTGRES_PASSWORD=tyler \
    -d postgres
