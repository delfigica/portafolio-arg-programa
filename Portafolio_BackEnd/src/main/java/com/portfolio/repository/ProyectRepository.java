package com.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.model.Proyect;

@Repository
public interface ProyectRepository extends JpaRepository <Proyect, Long>{

}
