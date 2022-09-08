// 7 - Retorne o nome e vendidos dos lanches 
// que tenham sido vendidos com uma quantidade 
// diferente de 50 e em que o campo tags não 
// exista

db.produtos.find(
  {
    $nor: [
      { vendidos: { $eq: 50 }},
      { tags: { $exists: true }},
      ],
  },
  { _id: 0, nome: 1, vendidos: 1 },
);