package com.weehorse.autentica.application.repositories;

import com.weehorse.autentica.application.entities.Malaki;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MalakiRepository extends MongoRepository<Malaki, String> {

}
