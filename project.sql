create table user (
    username    varchar(25)     Primary key,
    passcode    varchar(100)    not null,
    zip         integer(25),
    planetNum   integer(11),
    Xcoord      integer(11),
    Ycoord      integer(11),
    POBox       integer(11),
    accType     varchar(25)     not null
);
create table merch (
    id          integer(11)     Primary Key auto_increment,
    title       varchar(255)    not null,
    photo       nvarchar(2083)  null,   
    merchType   varchar(25)     not null,
    quantity    integer(11)     not null,
    user        varchar(25),
    foreign key(user) references user(username)
);
create table orders (
    id          integer(11)     Primary Key auto_increment,
    ordertype   varchar(255)    not null,
    timePlaced  datetime        not null,
    buyUser     varchar(25),
    sellUser    varchar(25),
    foreign key(buyUser) references user(username),
    foreign key(sellUser) references user(username)
);
create table contains (
    orderid     integer(11),
    merchid     integer(11),
    quantity    integer(11)     not null,
    primary key(orderid, merchid),
    foreign key(orderid) references orders(id),
    foreign key(merchid) references merch(id)
);
create table payment (
    id          integer(11)     Primary key auto_increment,
    currency    varchar(64)     not null,
    amount      decimal(38,10)  not null,
    stat        varchar(64)     not null,
    orderid     integer(11),
    buyUser     varchar(25),
    sellUser    varchar(25),
    foreign key(orderid) references orders(id),
    foreign key(buyUser) references orders(buyUser),
    foreign key(sellUser) references orders(sellUser)
);
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
    (title,photo,merchType,quantity,user)
values
    ('Big gun','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p5wPr5DbOhQhEVcB9M6fLgHaEc%26pid%3DApi&f=1','Weapon',900,'ISellWeapons'),
    ('Easy Hacking program! GET RICH FAST!',null,'Program',9999,'nerdsRock!'),
    ('Walnut Piano','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rHIW3zk1XCBKUWGxTwdSHwHaHa%26pid%3DApi&f=1','Weapon',12,'PianosSurplus'),
    ('Turbo Thrusters Blueprint! Fly Lightspeed!',null,'Blueprint',500,'SpaceShipsRUs'),
    ('RailGun attachment (Install manual included)','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UQlFPRtuwm77Dq97j8WbWgHaFp%26pid%3DApi&f=1','Weapon',23,'SpaceShipsRUs'),
    ('Splinter Bomb (Dark Matter not included)','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5Bfo9TPGK7skIwz1q3J8PAHaEK%26pid%3DApi&f=1','Weapon',21,'ISellWeapons'),
    ('EASY DIY HOMEMADE GUN BLUEPRINT',null,'Blueprint',3243,'ISellWeapons'),
    ('Beethovens music but in binary!','https://bradfieldpiano.com/wp-content/uploads/2018/10/Yamaha-GC1-grand-piano-mahogany-4-1.jpg','Music', 9999, 'PianosSurplus'),
    ('Robot shark, great for kids! BRAND NEW! (Has lazers)',null,'Toy', 35, 'noSpaceDrugsHere'),
    ('Super potent stardust extract - Best in the Galaxy!',null,'Material', 2424, 'noSpaceDrugsHere');


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

-- INSERT into two tables
    -- insert into the orders table when a user clicks 'buy'
INSERT INTO orders
VALUES ($merchid, $ordetType, $timePlaced, $buyUser, $sellUser);

INSERT INTO contains
VALUES ($orderIDfromneworder,$merchid,$quantityofitemfromuser)

    -- when a user creates an account:
INSERT INTO user
    (username,passcode,accType)
VALUES ($newUsername, $newPasscode, $accType)

    -- when a user adds a new merchandise
INSERT INTO merch
VALUES ($title,$photo,$merchType,$quantity,$currentUser)

-- every tables used in at least one SELECT

    -- query to show merch on front page
SELECT title, photo
FROM merch
WHERE quantity > 0;

    -- query to show merch that current user is selling
SELECT *
FROM merch
WHERE merch.user = $currentUser;

    -- query to show user recent orders
SELECT *
FROM orders
WHERE orders.buyUser = $currentUser;

    -- when checking if username is taken
SELECT username
FROM user;

    -- when user wants to look at payment associated with order
SELECT *
FROM payment
WHERE payment.orderid = $orderid_from_user

    -- when user looks at all the elements in the order
SELECT *
FROM contains
WHERE orderid = $userOrder

-- at least one SELECT where we search / filter

    -- search through the type that the user requested with `$type`
SELECT title, photo
FROM merch
WHERE merchType= $input_type AND quantity > 0;

-- at least one SELECT query that involves multiple tables

    -- this will select all users that currently have merchandise for sale
SELECT username
FROM user
INNER JOIN merch ON merch.user = user.username
GROUP BY username

-- at least 2 DELETE operations

    -- when a user cancels an order
DELETE FROM payment
WHERE orderid = $deletedOrder

DELETE FROM contains
WHERE orderid = $deletedOrder

DELETE FROM orders
WHERE id = $deletedOrder

-- at least 2 UPDATE operations

    -- when an order is cancelled the quantity available in merch changes back
UPDATE merch
SET quantity = (quantity + (SELECT quantity
                            FROM contains
                            WHERE orderid = $deletedOrder));

    -- when the user adds an address to their account
UPDATE user
SET zip     = $inputzip,
planetNum   = $inputplanetNum,
Xcoord      = $inputXcoord,
Ycoord      = $inputYcoord,
POBox       = $inputPOBox;

-- INSERT and DELETE rows from at least one many to many relationship
    -- 'DELETE FROM contains' above deletes from one many to many relationship
    
    -- 'INSERT INTO contains' above inserts into a many to many relationship


-- trigger that does not allow merch quantity to be over 9999, or under 0

CREATE TRIGGER merch_trig
BEFORE UPDATE ON merch
BEGIN
	IF (NEW.quantity > 9999)
    THEN 
    UPDATE quantity
    	SET NEW.quantity := 9999;
    END IF;
	IF (NEW.quantity < 0)
    THEN 
    UPDATE quantity
    	SET NEW.quantity := 0;
    END IF;
END;