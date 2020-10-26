package br.com.desafio.rav.partsSystem.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.rav.partsSystem.entities.Part;

@RestController
@RequestMapping(value = "/parts")
public class PartResource {
	
	@GetMapping
	public ResponseEntity<List<Part>> findAll(){
		List<Part> list = new ArrayList<>();
		list.add(new Part(1L, "peça1", 100.50, 100.00, "Geral"));
		list.add(new Part(1L, "peça2", 100.50, 100.00, "Geral"));
		list.add(new Part(1L, "peça3", 100.50, 100.00, "Geral"));
		return ResponseEntity.ok().body(list);
	}
}
