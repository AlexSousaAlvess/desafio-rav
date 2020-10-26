package br.com.desafio.rav.partsSystem.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.services.PartService;

@RestController
@RequestMapping(value = "/parts")
public class PartResource {
	
	@Autowired
	private PartService service;
	
	@GetMapping
	public ResponseEntity<List<Part>> findAll(){
		List<Part> list = service.findAll();
		
		return ResponseEntity.ok().body(list);
	}
}
