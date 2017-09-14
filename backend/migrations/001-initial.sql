--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Starships (
	id 							INTEGER PRIMARY KEY,
	cargo_capacity 	TEXT,
	manufacturer 		TEXT,
	max_atmosphering_speed TEXT,
	model 					TEXT,
	name 						TEXT,
	passengers 			TEXT,
	starship_class 	TEXT,
	url 						TEXT
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Starships;