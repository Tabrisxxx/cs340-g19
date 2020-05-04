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
