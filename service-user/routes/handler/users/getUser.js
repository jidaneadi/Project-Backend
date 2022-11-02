const { User } = require('../../../models');

module.exports = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id, {
        attributes : ['id', 'name', 'role', 'profession', 'avatar']
    });

    if (!user){
        return res.status(200).json({
            status : 'error',
            message: ' User not found'
        });
    }

    return res.json({
        status : 'succes',
        message: user
    });
}