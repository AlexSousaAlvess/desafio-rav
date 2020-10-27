package br.com.desafio.rav.partsSystem.dto;

import java.io.Serializable;

import br.com.desafio.rav.partsSystem.entities.Part;
import br.com.desafio.rav.partsSystem.entities.enums.Type;

public class PartDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private double weight;
	private double price;
	private Type type;

	public PartDTO() {

	}

	public PartDTO(Long id, String name, double weight, double price, Type type) {
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.price = price;
		this.type = type;
	}

	public PartDTO(Part entity) {
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

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

}
