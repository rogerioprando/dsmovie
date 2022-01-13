package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	// vai fazer uma busca no database por email (método padrão do JPA)
	User findByEmail(String email);
	
}
