package br.com.desafio.rav.partsSystem.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import br.com.desafio.rav.partsSystem.entities.enums.Status;

@Entity
@Table(name = "tb_part")
public class Part implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double weight;
	private double price;

	@Enumerated(EnumType.STRING)
	private Status type;
	
	@OneToMany(mappedBy = "part", fetch = FetchType.EAGER)
	private List<PartChild> partChildren = new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "simulation_id")
	private Simulation simulation;

	public Part() {

	}

	public Part(Long id, String name, double weight, double price, Status type) {
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.price = price;
		this.type = type;
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
	
	public List<PartChild> getPartChildren() {
		return partChildren;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		Part other = (Part) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
