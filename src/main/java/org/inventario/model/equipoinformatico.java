package org.inventario.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class equipoinformatico implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	@Version
	@Column(name = "version")
	private int version;

	@Column
	private String numerodeserie;

	@Column
	private String marca;

	@Column
	private String color;

	@Column
	private String status;

	@Column
	private String modelo;

	@Column
	private String interfaz;

	@Column
	private String fechamantenimiento;

	@Column
	private String observaciones;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public int getVersion() {
		return this.version;
	}

	public void setVersion(final int version) {
		this.version = version;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof equipoinformatico)) {
			return false;
		}
		equipoinformatico other = (equipoinformatico) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	public String getNumerodeserie() {
		return numerodeserie;
	}

	public void setNumerodeserie(String numerodeserie) {
		this.numerodeserie = numerodeserie;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getInterfaz() {
		return interfaz;
	}

	public void setInterfaz(String interfaz) {
		this.interfaz = interfaz;
	}

	public String getFechamantenimiento() {
		return fechamantenimiento;
	}

	public void setFechamantenimiento(String fechamantenimiento) {
		this.fechamantenimiento = fechamantenimiento;
	}

	public String getObservaciones() {
		return observaciones;
	}

	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		if (numerodeserie != null && !numerodeserie.trim().isEmpty())
			result += "numerodeserie: " + numerodeserie;
		if (marca != null && !marca.trim().isEmpty())
			result += ", marca: " + marca;
		if (color != null && !color.trim().isEmpty())
			result += ", color: " + color;
		if (status != null && !status.trim().isEmpty())
			result += ", status: " + status;
		if (modelo != null && !modelo.trim().isEmpty())
			result += ", modelo: " + modelo;
		if (interfaz != null && !interfaz.trim().isEmpty())
			result += ", interfaz: " + interfaz;
		if (fechamantenimiento != null && !fechamantenimiento.trim().isEmpty())
			result += ", fechamantenimiento: " + fechamantenimiento;
		if (observaciones != null && !observaciones.trim().isEmpty())
			result += ", observaciones: " + observaciones;
		return result;
	}
}