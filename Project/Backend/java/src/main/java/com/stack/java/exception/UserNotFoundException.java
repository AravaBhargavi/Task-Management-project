package com.stack.java.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("The user is not exist: " + id);
    }
}