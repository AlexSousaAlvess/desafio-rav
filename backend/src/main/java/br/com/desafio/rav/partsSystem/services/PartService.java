package br.com.desafio.rav.partsSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.repositories.PartRepository;

@Service
public class PartService {
	
	@Autowired
	private PartRepository repository;
	
	@Transactional(readOnly = true)
	public List<Part> findAll(){
		return repository.findAll();
	}

}
