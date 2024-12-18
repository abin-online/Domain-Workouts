const bcrypt = require('bcrypt');

const plainPassword = 'Atomica@2002'; // Replace with your desired password
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
    if (err) {
        console.error("Error hashing password:", err);
        return;
    }
    console.log("Hashed Password:", hashedPassword);
});
