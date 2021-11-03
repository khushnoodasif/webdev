prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore === 100) {
    alert("Your love score is " + loveScore + "%" + "Perfect Match!");
} else {
    alert("Your love score is " + loveScore + "%");
}