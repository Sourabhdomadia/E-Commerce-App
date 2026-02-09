package com.backend.service;

import com.backend.model.Product;
import com.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

  @Autowired
  private ProductRepo repo;

  public List<Product> getAllProducts(String search, String category, String brand, String sortBy, String sortOrder) {
    Sort.Direction direction = sortOrder.equalsIgnoreCase("DESC")
        ? Sort.Direction.DESC
        : Sort.Direction.ASC;

    Sort sort = Sort.by(direction, sortBy);

    // Build specification based on filters
    Specification<Product> spec = createFilterSpecification(search, category, brand);

    if (spec != null) {
      return repo.findAll(spec, sort);
    }

    return repo.findAll(sort);
  }

  private Specification<Product> createFilterSpecification(String search, String category, String brand) {
    Specification<Product> spec = null;

    // Add search filter
    if (search != null && !search.trim().isEmpty()) {
      Specification<Product> searchSpec = (root, query, criteriaBuilder) -> {
        String searchPattern = "%" + search.toLowerCase() + "%";
        return criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), searchPattern);
      };
      spec = (spec == null) ? searchSpec : spec.and(searchSpec);
    }

    // Add category filter
    if (category != null && !category.trim().isEmpty() && !category.equalsIgnoreCase("All")) {
      Specification<Product> categorySpec = (root, query, criteriaBuilder) ->
        criteriaBuilder.equal(criteriaBuilder.lower(root.get("category")), category.toLowerCase());
      spec = (spec == null) ? categorySpec : spec.and(categorySpec);
    }

    // Add brand filter
    if (brand != null && !brand.trim().isEmpty() && !brand.equalsIgnoreCase("All")) {
      Specification<Product> brandSpec = (root, query, criteriaBuilder) ->
        criteriaBuilder.equal(criteriaBuilder.lower(root.get("brand")), brand.toLowerCase());
      spec = (spec == null) ? brandSpec : spec.and(brandSpec);
    }

    return spec;
  }

  public Product getProductByID(int id) {
    return repo.findById(id).orElse(null);
  }
}
