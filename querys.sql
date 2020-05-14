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



