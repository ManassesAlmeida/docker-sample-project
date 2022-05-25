package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
