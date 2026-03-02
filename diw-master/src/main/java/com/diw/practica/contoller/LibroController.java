package com.diw.practica.contoller;

import com.diw.practica.model.Libro;
import com.diw.practica.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:5173") // Crucial para que Vue conecte
public class LibroController {

    @Autowired
    private LibroRepository libroRepository;

    @GetMapping
    public List<Libro> listarTodos() {
        return (List<Libro>) libroRepository.findAll();
    }

    @PutMapping("/{id}")
    public Libro actualizar(@PathVariable Integer id, @RequestBody Libro detalles) {
        Libro libro = libroRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado"));

        libro.setTitulo(detalles.getTitulo());
        libro.setAutor(detalles.getAutor());
        libro.setEstado(detalles.getEstado());

        return libroRepository.save(libro);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        libroRepository.deleteById(id);
    }
}