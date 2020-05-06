insert into user
    (username, passcode, zip, planetNum, Xcoord, Ycoord, POBox, accType)
values
    ('bigMan321', 'rj29jh3u',423483, 3, 49403843,33239329,9932,'Buyer'),
    ('ISellWeapons', 'ihavedognameddoggy',3321, 32,99878967,88761390,911,'Seller'),
    ('Coolguy420', 'password123',null, null, null,null,null,'Both'),
    ('nerdsRock!', 'cashcashcashheyoo21',8547, 43, 49403843,99182734,43,'Both'),
    ('*LivinLikeLarry*', 'superstrongpassword99',48893, 2, 77283920,77865364,12,'Seller'),
    ('23MichaelJordan23', 'MikeJordanisthegoat324',483993, 921, 17283921,77638495,1,'Buyer'),
    ('PianosSurplus', '#@*HDHUSifj3h*',49983, 31, 28391023,00106201,314,'Both'),
    ('noSpaceDrugsHere', 'Icannseeeunderwater',487483, 12, 98271638,53983718,554,'Seller'),
    ('SpaceShipsRUs', 'wh38hfja4',667643, 2, 748293053,48437474,43,'Seller'),
    ('SecretMapGuy', 'fh3f8h834h',889383, 1, 93736489,65473473,88,'Buyer');

insert into merch
    (title,merchType,quantity,user)
values
    ('Big gun','Weapon',900,'ISellWeapons'),
    ('Easy Hacking program! GET RICH FAST!','Program',9999,'nerdsRock!'),
    ('Walnut Piano','Weapon',12,'PianosSurplus'),
    ('Turbo Thrusters Blueprint! Fly Lightspeed!','Blueprint',500,'SpaceShipsRUs'),
    ('RailGun attachment (Install manual included)','Weapon',23,'SpaceShipsRUs'),
    ('Splinter Bomb (Dark Matter not included)','Weapon',21,'ISellWeapons'),
    ('EASY DIY HOMEMADE GUN BLUEPRINT','Blueprint',3243,'ISellWeapons'),
    ('Beethovens music but in binary!', 'Music', 9999, 'PianosSurplus'),
    ('Robot shark, great for kids! BRAND NEW! (Has lazers)', 'Toy', 35, 'noSpaceDrugsHere'),
    ('Super potent stardust extract - Best in the Galaxy!', 'Material', 2424, 'noSpaceDrugsHere');


insert into orders
    (id,ordertype,timePlaced,buyUser,sellUser)
values
    (1,'Physical','2019-03-10 02:55:05','bigMan321','ISellWeapons'),
    (2,'Digital','2019-04-10 03:56:05','bigMan321','nerdsRock!'),
    (3,'Physical','2020-03-03 06:09:22','bigMan321','ISellWeapons'),
    (4,'Physical','2019-04-09 12:23:25','nerdsRock!','PianosSurplus'),
    (5,'Digital','2020-01-09 22:40:35','SecretMapGuy','ISellWeapons'),
    (6,'Digital','2019-09-01 11:09:54','23MichaelJordan23','SpaceShipsRUs'),
    (7,'Physical','2018-12-03 21:05:25','bigMan321','SpaceShipsRUs'),
    (8,'Physical','2019-11-06 09:52:43','PianosSurplus','ISellWeapons'),
    (9,'Digital','2018-02-12 05:59:00','bigMan321','ISellWeapons'),
    (10,'Digital','2020-03-11 07:43:01','SecretMapGuy','PianosSurplus');

insert into contains
    (orderid,merchid,quantity)
values
    (1,1,1),
    (2,2,10),
    (3,1,2),
    (4,3,3),
    (5,1,10),
    (6,4,1),
    (7,5,1),
    (8,6,2),
    (9,7,1),
    (10,3,1);

insert into payment
    (currency,amount,stat,orderid,buyUser,sellUser)
values
    ('USD',999.99,'Complete',1,'bigMan321','ISellWeapons'),
    ('BTC',1.54349,'Complete',2,'bigMan321','nerdsRock!'),
    ('DarkMatter',0.0932,'Processing',3,'bigMan321','ISellWeapons'),
    ('USD',34.09,'Processing',4,'nerdsRock!','PianosSurplus'),
    ('USD',110032.01,'ActionRequired',5,'SecretMapGuy','ISellWeapons'),
    ('Gold',80.89,'ActionRequired',6,'23MichaelJordan23','SpaceShipsRUs'),
    ('Silver',342.10,'Complete',7,'bigMan321','SpaceShipsRUs'),
    ('DarkMatter',0.19,'Complete',8,'PianosSurplus','ISellWeapons'),
    ('Platinum',55.99,'Processing',9,'bigMan321','ISellWeapons'),
    ('Gold',5424.30,'Complete',10,'SecretMapGuy','PianosSurplus');

    
