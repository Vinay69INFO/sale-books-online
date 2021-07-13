package com.onlinestore.org.Online.book.store.repository;

import com.onlinestore.org.Online.book.store.entity.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "bookCateogry", path = "book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {
}
