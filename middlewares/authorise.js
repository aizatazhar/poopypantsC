const admin = (req, res, next) => {
    if (!req.roles.includes("admin")) {
        return res.status(403).json({ message: "Not authorised" });
    }

    next();
};

const viewer = (req, res, next) => {
    if (!req.roles.includes("viewer")) {
        return res.status(403).json({ message: "Not authorised" });
    }

    next();
};

module.exports = { admin, viewer };
