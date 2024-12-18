const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminModel = require('./adminModel');

mongoose.connect('mongodb://localhost:27017/Atomica-Auth-Service', { useNewUrlParser: true, useUnifiedTopology: true });

const seedAdmin = async () => {
    const email = "admin@atomica.com";
    const plainPassword = "Atomica@2002";
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const existingAdmin = await adminModel.findOne({ email });
    if (!existingAdmin) {
        await adminModel.create({ email, password: hashedPassword, role: 'admin' });
        console.log("Admin seeded successfully!");
    } else {
        console.log("Admin already exists.");
    }
    mongoose.disconnect();
};

seedAdmin().catch((err) => {
    console.error(err);
    mongoose.disconnect();
});
