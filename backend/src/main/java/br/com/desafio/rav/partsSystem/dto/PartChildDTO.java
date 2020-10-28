package br.com.desafio.rav.partsSystem.dto;

import java.io.Serializable;

import br.com.desafio.rav.partsSystem.entities.PartChild;
import br.com.desafio.rav.partsSystem.entities.enums.Status;

public class PartChildDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private double weight;
	private double price;
	private Status type;

	public PartChildDTO() {

	}

	public PartChildDTO(Long id, String name, double weight, double price, Status type) {
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.price = price;
		this.type = type;
	}

	public PartChildDTO(PartChild entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.weight = entity.getWeight();
		this.price = entity.getPrice();
		this.type = entity.getType();
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

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Status getType() {
		return type;
	}

	public void setType(Status type) {
		this.type = type;
	}
	
}
