package com.stack.java.controller;

import com.stack.java.exception.UserNotFoundException;
import com.stack.java.model.User;
import com.stack.java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3002/")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/addUser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/getUsers")
    List<User> getUser(){
        return userRepository.findAll();
    }
    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setUserName(newUser.getUserName());
            user.setEmailId(newUser.getEmailId());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/deleteUser/{id}")

    String deleteUser (@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id" + id + "has been deleted.";
    }

}

