INSERT INTO tb_simulation (name, description) VALUES ('Simulação 1','essa eh uma simulação teste');

INSERT INTO tb_part (name, weight, price, type, simulation_id) VALUES ('peça1', 300.00, 100.00, 'Geral', 1);
INSERT INTO tb_part (name, weight, price, type, simulation_id) VALUES ('peça2', 300.00, 100.00, 'Geral', 1);

INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 1);
INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 1);
INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 2);



