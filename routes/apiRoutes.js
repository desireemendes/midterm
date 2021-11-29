module.exports = function(router, database) {

  router.get('/menus', (req, res) => {
    database.getAllMenus(req.query, 20)
    .then(menus => res.send({menus}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.get('/orders', (req, res) => {
    const customerId = req.session.customerId;
    if (!customerId) {
      res.error("💩");
      return;
    }
    database.getAllOrders(customerId)
    .then(orders => res.send({orders}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.post('/menus', (req, res) => {
    const customerId = req.session.customerId;
    database.addMenu({...req.body, customer_id: customerId})
      .then(menu => {
        res.send(menu);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

  return router;
}
