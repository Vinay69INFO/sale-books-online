package com.onlinestore.org.Online.book.store.repository;

import com.onlinestore.org.Online.book.store.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long> {

    @RestResource(path="categoryId")
    Page<Book> findByCategoryId(@Param("id") Long id, Pageable pageable);

    //SELECT * FROM Book b WHERE b.name LIKE CONCAT('%', :name, '%');
    @RestResource(path="searchbykeyword")
    Page<Book> findByNameContaining(@Param("name") String keyword, Pageable pegeable);
}
