package com.example.Backend.exception;


	
public class BillingSystemAlreadyExist extends RuntimeException {
	public BillingSystemAlreadyExist(String message) {
		super(message);
	}
	
	 public BillingSystemAlreadyExist(String message, Throwable cause) {
	        super(message, cause);
	    }
	 
}


