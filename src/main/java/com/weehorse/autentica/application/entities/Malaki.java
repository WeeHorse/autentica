package com.weehorse.autentica.application.entities;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "malakis")
public class Malaki {
    private String id;
    private String name;
    private String creator;

    // default constructor - not that I can figure out why it needs one and why it wants to call a non existant super class...
    public Malaki()
    {
        super();
    }

    public Malaki(String id, String name, String creator) {
        this.id = id;
        this.name = name;
        this.creator = creator;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}
