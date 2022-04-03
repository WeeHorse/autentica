package com.weehorse.autentica.repository;

import java.util.Optional;

import com.weehorse.autentica.models.ERole;
import com.weehorse.autentica.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
