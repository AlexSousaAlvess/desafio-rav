package br.com.desafio.rav.partsSystem.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.desafio.rav.partsSystem.dto.SimulationDTO;
import br.com.desafio.rav.partsSystem.entities.Simulation;
import br.com.desafio.rav.partsSystem.repositories.SimulationRepository;
import br.com.desafio.rav.partsSystem.services.exceptions.DatabaseException;
import br.com.desafio.rav.partsSystem.services.exceptions.ResourceNotFoundException;

@Service
public class SimulationService {
	
	@Autowired
	private SimulationRepository repository;
	
	@Transactional(readOnly = true)
	public List<SimulationDTO> findAll(){
		List<Simulation> list = repository.findAll();
		
		return list.stream().map(x -> new SimulationDTO(x, x.getParts())).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public SimulationDTO findById(Long id) {
		Optional<Simulation> obj = repository.findById(id);
		Simulation entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new SimulationDTO(entity, entity.getParts());
	}

	@Transactional
	public SimulationDTO insert(SimulationDTO dto) {
		Simulation entity = new Simulation();
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity = repository.save(entity);
		return new SimulationDTO(entity);
	}

	@Transactional
	public SimulationDTO update(Long id, SimulationDTO dto) {
		try {
			Simulation entity = repository.getOne(id);
			entity.setName(dto.getName());
			entity.setDescription(dto.getDescription());
			entity = repository.save(entity);
			return new SimulationDTO(entity);
		}catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation");
		}
	}

}
