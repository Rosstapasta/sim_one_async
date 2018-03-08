DELETE FROM shelfs
WHERE shelf = ($1) AND bin = ($2);
select * from shelfs
where shelf = ($1);