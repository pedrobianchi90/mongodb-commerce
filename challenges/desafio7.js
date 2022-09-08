db.produtos.find(
  {
    $nor: [
      { vendidos: { $eq: 50 } },
      { tags: { $exists: true } },
      ],
  },
  { _id: 0, nome: 1, vendidos: 1 },
);