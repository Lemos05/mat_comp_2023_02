# mat_comp_2023_02

ex. 3.3
c-)

1- Para contar quantas vezes cada produto é comprado:

SELECT Produto, COUNT(*) as TotalCompras
FROM compras
GROUP BY Produto
ORDER BY TotalCompras DESC;

2- Para identificar quais produtos são frequentemente comprados juntos:

SELECT c1.Produto AS Produto1, c2.Produto AS Produto2, COUNT(*) AS TotalCompras
FROM compras c1
JOIN compras c2 ON c1.IdTransacao = c2.IdTransacao
WHERE c1.Produto < c2.Produto
GROUP BY Produto1, Produto2
ORDER BY TotalCompras DESC;

3-  Para verificar se a conclusão é verdadeira ou falsa, pode usar consultas SQL para calcular a probabilidade de
os consumidores que compram adoçante também comprem leite e café. 
Vamos supor que "Produto 1" seja café, "Produto 2" seja leite e "Produto 3" seja adoçante:

//SELECT COUNT(*) AS ComprasLeiteComAdocante
FROM compras
WHERE Produto = 'Produto 2' AND IdTransacao IN (SELECT IdTransacao FROM compras WHERE Produto = 'Produto 3');//

//SELECT COUNT(*) AS ComprasCafeComAdocante
FROM compras
WHERE Produto = 'Produto 1' AND IdTransacao IN (SELECT IdTransacao FROM compras WHERE Produto = 'Produto 3');//
