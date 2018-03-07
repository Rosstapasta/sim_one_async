UPDATE shelfs
SET item = ($3), price = ($4)
WHERE shelf = ($1) AND bin = ($2);
select * from shelfs
where shelf = ($1);
