package com.backend.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Product;
import com.backend.repository.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductRest {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping
	public ResponseEntity<List<Product>> findAll(){
		List<Product> products = productRepository.findAll();
		return ResponseEntity.ok(products);
	}
	
	@PostMapping
	public ResponseEntity<Product> save(@RequestBody Product product){
		product = productRepository.save(product);
		return ResponseEntity.ok(product);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id){
		this.productRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
}
