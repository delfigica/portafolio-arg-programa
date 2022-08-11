package com.portfolio.repository;

import org.springframework.stereotype.Repository;

import com.portfolio.model.Education;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EducationRepository extends JpaRepository <Education, Long> {

}
