package br.com.desafio.rav.partsSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.desafio.rav.partsSystem.entities.Simulation;

@Repository
public interface SimulationRepository extends JpaRepository<Simulation, Long>{

}
