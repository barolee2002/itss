package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
@Configuration
public class ModelMapperConfig {
    public void ModelMapperConfig(){};
//    @Bean
//    public ModelMapper modelMapperProduct() {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT).setAmbiguityIgnored(true);
//        //mapping Storage
//        modelMapper.createTypeMap(ProductDto.class, ProductEntity.class)
//                .addMappings(mapper -> mapper.skip(ProductEntity::setDateCreate));
//        //mapping Storage
//        modelMapper.createTypeMap(StorageDto.class, StorageEntity.class)
//                .addMappings(mapper -> mapper.skip(StorageEntity::setDateCreate));
//        //mapping Category
//        modelMapper.createTypeMap(CategoryDto.class, CategoryTypeEntity.class)
//                .addMappings(mapper -> mapper.skip(CategoryTypeEntity::setDateCreate));
//        return modelMapper;
//    }
}
