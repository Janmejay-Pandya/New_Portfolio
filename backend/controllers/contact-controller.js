const contact_user = require("../models/contact-user");
const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const userCreate = await contact_user.create({ name, email, message });
        return res.status(200).json({ message: "Message send successfull" });
    } catch (error) {
        console.log("Not successfull");
        return res.status(500).json({ message: "Message not deliverd" });
    }
}
module.exports = contactForm;