package br.com.desafio.rav.partsSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.desafio.rav.partsSystem.entities.Part;

@Repository
public interface PartRepository extends JpaRepository<Part, Long>{

}
