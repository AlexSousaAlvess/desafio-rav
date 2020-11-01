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
import br.com.desafio.rav.partsSystem.dto.PartDTO;
import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.entities.PartChild;
import br.com.desafio.rav.partsSystem.repositories.PartChildRepository;
import br.com.desafio.rav.partsSystem.repositories.PartRepository;
import br.com.desafio.rav.partsSystem.services.exceptions.DatabaseException;
import br.com.desafio.rav.partsSystem.services.exceptions.ResourceNotFoundException;

@Service
public class PartService {

	@Autowired
	private PartRepository repository;

	@Autowired
	private PartChildRepository partChildRepository;

	@Transactional(readOnly = true)
	public List<PartDTO> findAll() {
		List<Part> list = repository.findAll();
		return list.stream().map(x -> new PartDTO(x, x.getPartChildren())).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public PartDTO findById(Long id) {
		Optional<Part> obj = repository.findById(id);
		Part entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new PartDTO(entity, entity.getPartChildren());
	}

	@Transactional
	public PartDTO insert(PartDTO dto) {
		Part entity = new Part();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new PartDTO(entity);
	}

	@Transactional
	public PartDTO update(Long id, PartDTO dto) {
		try {
			Part entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new PartDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity Violation");
		}
	}

	private void copyDtoToEntity(PartDTO dto, Part entity) {
		entity.setName(dto.getName());
		entity.setPrice(dto.getPrice());
		entity.setWeight(dto.getWeight());
		entity.setType(dto.getType());

		entity.getPartChildren().clear();
		for (PartChildDTO childDto : dto.getPartChildren()) {
			
			PartChild partChild = partChildRepository.getOne(childDto.getId());
			entity.getPartChildren().add(partChild);
		}
	}
	
	
//	public List<PartDTO> findAll() {
//		List<Part> list = repository.findAll();
//		return list.stream().map(x -> new PartDTO(x, x.getPartChildren())).collect(Collectors.toList());
//	}
	

}
