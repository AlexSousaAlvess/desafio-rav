package br.com.desafio.rav.partsSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.desafio.rav.partsSystem.entities.PartChild;

@Repository
public interface PartChildRepository extends JpaRepository<PartChild, Long>{

}
