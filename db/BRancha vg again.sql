CREATE VIEW avg_branch AS
SELECT * FROM avg_factor
GROUP BY
	Branch;
