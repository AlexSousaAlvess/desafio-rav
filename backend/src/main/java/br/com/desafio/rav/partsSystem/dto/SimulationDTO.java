package br.com.desafio.rav.partsSystem.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.entities.Simulation;

public class SimulationDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private long id;
	private String name;
	private String description;
	
	private List<PartDTO> parts = new ArrayList<>();

	public SimulationDTO() {

	}

	public SimulationDTO(Long id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}

	public SimulationDTO(Simulation entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
	}
	
	public SimulationDTO(Simulation entity, List<Part> list) {
		this(entity);
		list.forEach(p -> this.parts.add(new PartDTO(p)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
