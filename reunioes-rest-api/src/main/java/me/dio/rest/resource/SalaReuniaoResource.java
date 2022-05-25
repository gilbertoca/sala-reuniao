package me.dio.rest.resource;

import java.util.List;
import java.util.Optional;
import me.dio.rest.entity.SalaReuniao;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import me.dio.rest.repository.SalaReuniaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
@RequestMapping("/api/v1/reunioes")
public class SalaReuniaoResource {
    
    private final SalaReuniaoRepository repo;

    @Autowired
    public SalaReuniaoResource(SalaReuniaoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<SalaReuniao> listar() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SalaReuniao> obterSalaReuniao(@PathVariable Long id) {
        Optional<SalaReuniao> salaReuniao = repo.findById(id);

        if (salaReuniao.isPresent()) {
            return ResponseEntity.ok(salaReuniao.get());
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SalaReuniao adicionar(@RequestBody SalaReuniao salaReuniao) {
        return repo.save(salaReuniao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SalaReuniao> atualizar(@PathVariable Long id, @RequestBody SalaReuniao salaReuniao) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(salaReuniao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repo.deleteById(id);

        return ResponseEntity.noContent().build();
    }

}
