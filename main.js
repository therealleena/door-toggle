function testPurposes() {
    alert('This is an alert! Hey!')
}
let doorIsOpen = true;


function toggleDoor()
{
    const door = document.getElementById('door');

    if(doorIsOpen) {
        door.src = 'img/closed.jpg' ;
        doorIsOpen = false;
    } else {
        door.src = 'img/open.png';
        doorIsOpen = true;
    }
     
}

function CalculateDeathTime(age, death=10) {
    return age+ death
}
CalculateDeathTime(20);
