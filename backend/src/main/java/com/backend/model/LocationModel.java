package com.backend.model;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="location")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String address;
    String postcode;
    String regionName;
    String areaName;
}
