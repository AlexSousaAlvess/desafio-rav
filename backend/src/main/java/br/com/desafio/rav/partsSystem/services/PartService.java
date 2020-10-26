package br.com.desafio.rav.partsSystem.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.desafio.rav.partsSystem.dto.PartDTO;
import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.repositories.PartRepository;
import br.com.desafio.rav.partsSystem.services.exceptions.EntityNotFoundException;

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
		Part entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new PartDTO(entity);
	}

}
