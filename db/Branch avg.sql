CREATE VIEW avg_factor AS
SELECT 
    Branch,
	(A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8 + A9 + A10) / 10 AS Average_A,
	(B1 + B2 + B3 + B4 + B5 + B6 + B7 + B8 + B9 + B10) / 10 AS Average_B,
	(C1 + C2 + C3) / 3 AS Average_C,
	(D1 + D2 + D3 + D4 + D5 + D6 + D7 + D8 + D9) / 9 AS Average_D,
	(E1 + E2 + E3 + E4 + E5 + E6) / 6 AS Average_E,
	(F1 + F2 + F3) / 3 AS Average_F
FROM 
    database.data
GROUP BY
	Branch;