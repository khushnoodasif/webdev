var name = window.prompt("What is your name ?");
var firstchar = name.slice(0,1);
var uppercasefirstchar = firstchar.toUpperCase();
var restofname = name.slice(1,name.length);
restofname = restofname.toLowerCase();
var capitalisename = uppercasefirstchar + restofname;

alert("Your name is "+ capitalisename);