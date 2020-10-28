package br.com.desafio.rav.partsSystem.entities;

import java.io.Serializable;

public class Simulation implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String name;
	private String description;
	
	private Part part;
	
	public Simulation() {
		
	}

	public Simulation(long id, String name, String description, Part part) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.part = part;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public Part getPart() {
		return part;
	}

	public void setPart(Part part) {
		this.part = part;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Simulation other = (Simulation) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	

}
