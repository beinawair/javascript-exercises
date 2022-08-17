const findTheOldest = function(people) {
    const age = (birth, death) => {
        if(!death){
            death = new Date().getFullYear();
        }

        return death - birth;
    }

    return people.reduce((oldest, currentPerson) => {
        const oldestPerson = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestPerson < currentAge ? currentPerson : oldest;
    })


};

// Do not edit below this line
module.exports = findTheOldest;
