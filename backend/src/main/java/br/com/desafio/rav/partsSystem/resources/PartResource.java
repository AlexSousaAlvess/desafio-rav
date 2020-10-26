package br.com.desafio.rav.partsSystem.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.rav.partsSystem.dto.PartDTO;
import br.com.desafio.rav.partsSystem.services.PartService;

@RestController
@RequestMapping(value = "/parts")
public class PartResource {
	
	@Autowired
	private PartService service;
	
	@GetMapping
	public ResponseEntity<List<PartDTO>> findAll(){
		List<PartDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<PartDTO> findById(@PathVariable Long id){
		PartDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
}
