package com.project.arkive.user.repository;

import com.project.arkive.user.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Page<User> findAllByNameContains(String name, Pageable pageable);
    Page<User> findAllByEmailContains(String email, Pageable pageable);
}
