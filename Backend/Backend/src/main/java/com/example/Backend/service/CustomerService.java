package com.example.Backend.service;

import java.util.List;

import com.example.Backend.model.Customer;



public interface CustomerService {
	
	Customer addCustomer(Customer customer);
	List<Customer> getAllCustomers();
	Customer updateCustomer(Customer customer);
	Customer deleteCustomer(Customer customer);
	List<Customer> searchCustomerByName(Customer customer);

}
