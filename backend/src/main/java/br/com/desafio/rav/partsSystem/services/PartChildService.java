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

import br.com.desafio.rav.partsSystem.dto.PartChildDTO;
import br.com.desafio.rav.partsSystem.entities.PartChild;
import br.com.desafio.rav.partsSystem.repositories.PartChildRepository;
import br.com.desafio.rav.partsSystem.services.exceptions.DatabaseException;
import br.com.desafio.rav.partsSystem.services.exceptions.ResourceNotFoundException;

@Service
public class PartChildService {
	
	@Autowired
	private PartChildRepository repository;
	
	@Transactional(readOnly = true)
	public List<PartChildDTO> findAll(){
		List<PartChild> list = repository.findAll();
		return list.stream().map(x -> new PartChildDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public PartChildDTO findById(Long id) {
		Optional<PartChild> obj = repository.findById(id);
		PartChild entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new PartChildDTO(entity);
	}

	@Transactional
	public PartChildDTO insert(PartChildDTO dto) {
		PartChild entity = new PartChild();
		entity.setName(dto.getName());
		entity.setWeight(dto.getWeight());
		entity.setPrice(dto.getPrice());
		entity.setType(dto.getType());
		entity = repository.save(entity);
		return new PartChildDTO(entity);
	}

	@Transactional
	public PartChildDTO update(Long id, PartChildDTO dto) {
		try {
			PartChild entity = repository.getOne(id);
			entity.setName(dto.getName());
			entity.setWeight(dto.getWeight());
			entity.setPrice(dto.getPrice());
			entity.setType(dto.getType());
			entity = repository.save(entity);
			return new PartChildDTO(entity);
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
