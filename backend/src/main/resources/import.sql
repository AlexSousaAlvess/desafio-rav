INSERT INTO tb_simulation (name, description) VALUES ('Simulação 1','essa eh uma simulação teste');
INSERT INTO tb_simulation (name, description) VALUES ('Simulação 2','essa eh uma simulação teste');

INSERT INTO tb_part (name, weight, price, type) VALUES ('peça1', 300.00, 100.00, 'Geral');
INSERT INTO tb_part (name, weight, price, type) VALUES ('peça2', 300.00, 100.00, 'Geral');

INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 1);
INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 1);
INSERT INTO tb_part_child (name, weight, price, type, part_id) VALUES ('peça filha1', 300.00, 100.00, 'Interior', 2);

INSERT INTO tb_part_simulation (simulation_id, part_id) VALUES (1, 1);
INSERT INTO tb_part_simulation (simulation_id, part_id) VALUES (1, 2);
INSERT INTO tb_part_simulation (simulation_id, part_id) VALUES (2, 2);