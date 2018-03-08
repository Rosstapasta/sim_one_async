INSERT INTO shelfs
(shelf, bin, item, price)
VALUES ($1, $2, $3, $4);
select * from shelfs
where shelf = ($1);