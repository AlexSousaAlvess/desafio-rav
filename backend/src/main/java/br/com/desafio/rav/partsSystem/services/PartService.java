package br.com.desafio.rav.partsSystem.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.desafio.rav.partsSystem.dto.PartDTO;
import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.repositories.PartRepository;
import br.com.desafio.rav.partsSystem.services.exceptions.ResourceNotFoundException;

@Service
public class PartService {
	
	@Autowired
	private PartRepository repository;
	
	@Transactional(readOnly = true)
	public List<PartDTO> findAll(){
		List<Part> list = repository.findAll();
		
		return list.stream().map(x -> new PartDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public PartDTO findById(Long id) {
		Optional<Part> obj = repository.findById(id);
		Part entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new PartDTO(entity);
	}

	@Transactional
	public PartDTO insert(PartDTO dto) {
		Part entity = new Part();
		entity.setName(dto.getName());
		entity.setWeight(dto.getWeight());
		entity.setPrice(dto.getPrice());
		entity.setType(dto.getType());
		entity = repository.save(entity);
		return new PartDTO(entity);
	}

	@Transactional
	public PartDTO update(Long id, PartDTO dto) {
		try {
			Part entity = repository.getOne(id);
			entity.setName(dto.getName());
			entity.setWeight(dto.getWeight());
			entity.setPrice(dto.getPrice());
			entity.setType(dto.getType());
			entity = repository.save(entity);
			return new PartDTO(entity);
		}catch(EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
	}

}
