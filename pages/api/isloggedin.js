export default (req, res) => {
    var cookie = require("cookie");

    if (req.headers.cookie) {
        var data = req.headers.cookie.split('=')[1]
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({ token: data });
    } else {
        res.json({ token: '' })
    }

}