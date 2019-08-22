module.exports.all  = function(req, res) {
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM customers', function(err, rows) {
            if (err) throw new Error;
            res.render('customers', {page_title: 'IMT_CRM Пользователи', data: rows});
        });
    });
};

module.exports.add = function (req, res) {
    res.render('add_customers', {page_title: 'Добавить пользователя в CRM систему'});
};