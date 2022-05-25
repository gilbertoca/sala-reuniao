package me.dio.rest.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sala_reuniao")
public class SalaReuniao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    private Long id;
    private String nome;
    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate dtReuniao;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime hrInicio;
    @JsonFormat(pattern = "HH:mm")
    private LocalTime hrFim;

    public SalaReuniao() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDtReuniao() {
        return dtReuniao;
    }

    public void setDtReuniao(LocalDate dtReuniao) {
        this.dtReuniao = dtReuniao;
    }

    public LocalTime getHrInicio() {
        return hrInicio;
    }

    public void setHrInicio(LocalTime hrInicio) {
        this.hrInicio = hrInicio;
    }

    public LocalTime getHrFim() {
        return hrFim;
    }

    public void setHrFim(LocalTime hrFim) {
        this.hrFim = hrFim;
    }

}
