package com.portfolio.repository;

import org.springframework.stereotype.Repository;

import com.portfolio.model.Skill;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface SkillRepository extends JpaRepository <Skill, Long>{

}
