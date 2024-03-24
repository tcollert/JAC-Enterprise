package com.ctrlaltelite.nasa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ctrlaltelite.nasa.entity.VirtualPet;

@Repository
public interface VirtualPetRepository extends JpaRepository<VirtualPet, Long> {

}